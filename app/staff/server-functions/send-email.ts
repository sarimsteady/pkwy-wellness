'use server';

import { sesClient } from "@/utils/ses-client";
import { SendEmailCommand } from "@aws-sdk/client-ses";
import { supabaseClient } from "@/utils/supabase-client";

interface SendEmailResult {
    success: boolean;
    message: string;
    details?: unknown;
}

export async function sendEmailAction(
    recipients: string[],
    subject: string,
    body: string,
    senderEmail: string = "hello@pkwywellness.com",
    senderName: string = "",
    isHtml: boolean = false
): Promise<SendEmailResult> {

    const results: { email: string; success: boolean; messageId?: string; error?: string }[] = [];
    const fromAddress = senderName ? `"${senderName.replace(/"/g, '')}" <${senderEmail}>` : senderEmail;

    // Helper to split array into chunks
    const chunkArray = <T>(arr: T[], size: number): T[][] => {
        return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
            arr.slice(i * size, i * size + size)
        );
    };

    try {
        // Send in batches of 10 to avoid hitting rate limits too hard BUT significantly speed up processing
        // 300 emails / 10 concurrent = 30 steps. 30 * ~500ms = 15 seconds (safe for Server Actions)
        // Sequential: 300 * ~500ms = 150 seconds (Will timeout)
        const BATCH_SIZE = 10;
        const batches = chunkArray(recipients, BATCH_SIZE);

        for (const batch of batches) {
            await Promise.all(batch.map(async (recipient) => {
                try {
                    const command = new SendEmailCommand({
                        Destination: {
                            ToAddresses: [recipient],
                        },
                        Message: {
                            Body: {
                                [isHtml ? 'Html' : 'Text']: {
                                    Charset: "UTF-8",
                                    Data: body,
                                },
                            },
                            Subject: {
                                Charset: "UTF-8",
                                Data: subject,
                            },
                        },
                        Source: fromAddress,
                    });

                    const response = await sesClient.send(command);
                    console.log(`Email sent to ${recipient}`, response.MessageId);
                    results.push({ email: recipient, success: true, messageId: response.MessageId });

                } catch (err: unknown) {
                    const errorMessage = err instanceof Error ? err.message : String(err);
                    console.error(`Error sending to ${recipient}:`, errorMessage);
                    results.push({ email: recipient, success: false, error: errorMessage });
                }
            }));
        }

        const successCount = results.filter(r => r.success).length;
        const failedCount = results.length - successCount;

        // Track batch in Supabase
        try {
            const supabase = supabaseClient();
            await supabase.from('sent_emails').insert({
                recipients: recipients,
                subject: subject,
                body: body,
                sender: fromAddress,
                status: failedCount === 0 ? 'sent' : (successCount === 0 ? 'failed' : 'partial'),
                metadata: {
                    results,
                    isHtml,
                    batchSize: recipients.length,
                    successCount,
                    failedCount
                },
                error_message: failedCount > 0 ? `${failedCount} failures` : null
            });
        } catch (logError) {
            console.error("Failed to log sent email batch to Supabase:", logError);
        }

        if (successCount === 0) {
            return { success: false, message: "Failed to send emails. Check logs for details.", details: results };
        }

        return {
            success: true,
            message: `Sent ${successCount}/${recipients.length} emails successfully.${failedCount > 0 ? ` ${failedCount} failed.` : ''}`,
            details: results
        };

    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error("Unexpected error in sendEmailAction:", errorMessage);
        return { success: false, message: "Unexpected system error: " + errorMessage };
    }
}

export async function getSentEmails() {
    const supabase = supabaseClient();
    const { data, error } = await supabase
        .from('sent_emails')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(20);

    if (error) {
        console.error("Error fetching sent emails:", error);
        return [];
    }
    return data;
}

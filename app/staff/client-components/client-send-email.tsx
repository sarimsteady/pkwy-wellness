'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RichTextEditor } from '@/components/ui/rich-text-editor';
import { sendEmailAction, getSentEmails } from '../server-functions/send-email';
import { Loader2, RefreshCw } from 'lucide-react';

import { Database } from '@/types/database';

type SentEmail = Database['public']['Tables']['sent_emails']['Row'];

export function ClientSendEmail() {
    const [recipientString, setRecipientString] = useState('');
    const [subject, setSubject] = useState('');
    const [body, setBody] = useState('');
    const [senderEmail, setSenderEmail] = useState('hello@pkwywellness.com');
    const [senderName, setSenderName] = useState('PKWY Wellness');

    // Default to HTML since we use Rich Text Editor
    const isHtml = true;

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);
    const [recentEmails, setRecentEmails] = useState<SentEmail[]>([]);
    const [expandedEmailId, setExpandedEmailId] = useState<string | null>(null);

    const fetchHistory = async () => {
        const history = await getSentEmails();
        setRecentEmails(history || []);
    };

    useEffect(() => {
        fetchHistory();
    }, []);

    const handleSend = async () => {
        setLoading(true);
        setStatus(null);

        // Parse recipients
        const recipients = recipientString
            .split(',')
            .map(email => email.trim())
            .filter(email => email.length > 0);

        if (recipients.length === 0) {
            setStatus({ type: 'error', message: 'Please enter at least one recipient.' });
            setLoading(false);
            return;
        }

        if (!subject || !body || body === '<p></p>') {
            setStatus({ type: 'error', message: 'Please enter a subject and body.' });
            setLoading(false);
            return;
        }

        try {
            const result = await sendEmailAction(
                recipients,
                subject,
                body,
                senderEmail,
                senderName,
                isHtml
            );

            if (result.success) {
                setStatus({ type: 'success', message: result.message });
                // Clear body after successful send
                setBody('');
                fetchHistory();
            } else {
                setStatus({ type: 'error', message: result.message });
            }
        } catch (err: unknown) {
            console.error("Error sending email:", err);
            setStatus({ type: 'error', message: "An unexpected error occurred." });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle>Send Email</CardTitle>
                    <CardDescription>Send an email to multiple recipients via Amazon SES.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="senderName">Sender Name</Label>
                            <Input
                                id="senderName"
                                value={senderName}
                                onChange={(e) => setSenderName(e.target.value)}
                                placeholder="PKWY Wellness"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="senderEmail">Sender Email</Label>
                            <Input
                                id="senderEmail"
                                value={senderEmail}
                                onChange={(e) => setSenderEmail(e.target.value)}
                                placeholder="hello@pkwywellness.com"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="recipients">Recipients (comma separated)</Label>
                        <Textarea
                            id="recipients"
                            placeholder="jane@example.com, john@example.com"
                            value={recipientString}
                            onChange={(e) => setRecipientString(e.target.value)}
                            className="min-h-[100px]"
                        />
                        <p className="text-sm text-muted-foreground">
                            {recipientString.split(',').filter(x => x.trim()).length} recipients
                        </p>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                            id="subject"
                            placeholder="Email Subject"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label>Message Body</Label>
                        <RichTextEditor
                            value={body}
                            onChange={setBody}
                        />
                    </div>

                    {status && (
                        <div className={`p-3 rounded-md text-sm ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                            {status.message}
                        </div>
                    )}

                    <Button onClick={handleSend} disabled={loading} className="w-full">
                        {loading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            'Send Email'
                        )}
                    </Button>
                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <div>
                        <CardTitle>Recent Emails</CardTitle>
                        <CardDescription>History of last 20 sent email batches.</CardDescription>
                    </div>
                    <Button variant="ghost" size="icon" onClick={fetchHistory}>
                        <RefreshCw className="h-4 w-4" />
                    </Button>
                </CardHeader>
                <CardContent>
                    <div className="space-y-1">
                        {recentEmails.length === 0 ? (
                            <p className="text-sm text-muted-foreground">No sent emails found.</p>
                        ) : (
                            recentEmails.map((email) => (
                                <div key={email.id} className="border-b last:border-0">
                                    <div
                                        className="flex justify-between items-start py-4 cursor-pointer hover:bg-muted/50 px-2 rounded-md transition-colors"
                                        onClick={() => setExpandedEmailId(expandedEmailId === email.id ? null : email.id)}
                                    >
                                        <div>
                                            <p className="font-medium">{email.subject}</p>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                To: {email.recipients.length > 3
                                                    ? `${email.recipients.slice(0, 3).join(', ')} +${email.recipients.length - 3} more`
                                                    : email.recipients.join(', ')}
                                            </p>
                                            <p className="text-xs text-muted-foreground">
                                                From: {email.sender}
                                            </p>
                                        </div>
                                        <div className="text-right">
                                            <span className={`text-xs px-2 py-1 rounded-full ${email.status === 'sent' ? 'bg-green-100 text-green-800' :
                                                email.status === 'partial' ? 'bg-yellow-100 text-yellow-800' :
                                                    'bg-red-100 text-red-800'
                                                }`}>
                                                {email.status.toUpperCase()}
                                            </span>
                                            <p className="text-xs text-muted-foreground mt-1">
                                                {new Date(email.created_at).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                    {expandedEmailId === email.id && (
                                        <div className="px-2 pb-4 pt-0 animate-in slide-in-from-top-1 duration-200">
                                            <div className="text-xs font-semibold text-muted-foreground mb-1">Message Content:</div>
                                            <div
                                                className="prose prose-sm max-w-none bg-muted/30 p-3 rounded-md border text-sm"
                                                dangerouslySetInnerHTML={{ __html: email.body }}
                                            />
                                        </div>
                                    )}
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

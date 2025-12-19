import { supabaseClient } from "@/utils/supabase-client";
import { CopyTextButton } from "@/components/functional/copy-button";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "lucide-react";
import { deleteWaitlistEntry } from "../server-functions/delete-waitlist-entry";

export async function WaitlistSection() {

    const { data, error } = await supabaseClient()
        .from("waitlist")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <span className="font-mono">{error.name}</span>
        )
    } else {
        return (
            <main className="space-y-2">
                <section className="flex gap-2 items-center justify-between">
                    <div className="font-mono">
                        <p className="text-7xl">
                            {data.length}
                        </p>
                        <p>Waitlist entries</p>
                    </div>
                    <CopyTextButton label="Copy All Emails" copyText={data.map(i => i.email).join(", ")} />
                </section>
                <div className="p-3 bg-slate-100 rounded-2xl space-y-3">
                    {data.map(i => {
                        return (
                            <div key={i.id}>
                                <div className="font-mono flex justify-between">
                                    <section>
                                        <p>
                                            <strong>{new Date(i.created_at).toLocaleString('en-US', {
                                                dateStyle: 'medium',
                                                timeStyle: 'short',
                                            })}</strong>
                                        </p>
                                        <p>
                                            {i.email}
                                        </p>
                                    </section>
                                    <section className="flex">
                                        <CopyTextButton copyText={i.email} variant="icon" />
                                        <form action={deleteWaitlistEntry}>
                                            <input type="hidden" name="id" value={i.id} />
                                            <Button
                                                size="icon"
                                                variant="destructive"
                                                type="submit"
                                            >
                                                <TrashIcon />
                                            </Button>
                                        </form>
                                    </section>
                                </div>
                                <hr className="my-1" />
                            </div>
                        )
                    })}
                </div>
            </main>
        )
    }

}
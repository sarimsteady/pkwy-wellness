import { supabaseClient } from "@/utils/supabase-client";
import { WaitlistClient } from "./client-components/client-waitlist";
import { AlertCircle } from "lucide-react";

export async function WaitlistSection() {
    const { data, error } = await supabaseClient()
        .from("waitlist")
        .select("*")
        .order("created_at", { ascending: false });

    if (error) {
        return (
            <div className="p-6 border border-destructive/20 bg-destructive/5 rounded-xl flex items-center gap-3 text-destructive">
                <AlertCircle className="w-5 h-5" />
                <p className="font-mono text-sm">{error.message}</p>
            </div>
        );
    }

    return <WaitlistClient initialEntries={data || []} />;
}
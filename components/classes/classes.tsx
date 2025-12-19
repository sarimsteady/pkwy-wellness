import { Fonts } from "@/config/fonts";
import { AlertCircle } from "lucide-react";
import { SundayClasses } from "./sunday-classes/sunday-classes";
import { supabaseClient } from "@/utils/supabase-client";

export async function ClassesSection() {
    const supabase = supabaseClient()

    const { data: classes, error } = await supabase.from('pkwy_offerings')
        .select('*')
        .order('created_at', { ascending: true })

    if (error) {
        return (
            <div className="p-6 border border-destructive/20 bg-destructive/5 rounded-xl flex items-center gap-3 text-destructive">
                <AlertCircle className="w-5 h-5" />
                <p className="font-mono text-sm">{error.message}</p>
            </div>
        )
    }

    return (
        <main className="bg-secondary/20 rounded-4xl relative overflow-hidden py-20 px-4">
            <section id="classes" className="relative max-w-4xl mx-auto text-center space-y-8">
                <h1 className={`text-5xl md:text-6xl font-light text-gray-900 ${Fonts.quicksand.className}`}>
                    Sunday Sessions
                </h1>
                <p className="text-xl text-gray-600">
                    Hosted by Samantha
                </p>
                <SundayClasses classes={classes} />
            </section>
        </main>
    )
}
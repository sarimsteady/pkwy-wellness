import { Button } from "@/components/ui/button";
import { Fonts } from "@/config/fonts";
import { Database } from "@/types/database";
import { CalendarCheckIcon, ClockIcon } from "lucide-react";

export async function SundayClasses({ classes }: { classes: Database['public']['Tables']['pkwy_offerings']['Row'][] }) {
    return (
        <main className={`${Fonts.quicksand.className}`}>
            <section>
                <div className="items-start gap-4 space-y-4">
                    {classes.map((c) => {
                        const isRecurring = c.classes > 1;
                        return (
                            <div
                                key={c.id}
                                className="flex flex-col md:w-3/6 w-5/6 mx-auto border border-gray-200 bg-slate-100 rounded-lg p-6 "
                            >
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-semibold">
                                        {c.name}
                                    </h2>
                                    <p className="text-gray-600">
                                        {c.description}
                                    </p>
                                    <Button size="lg">
                                        <p className={`text-lg font-light p-3 ${Fonts.sora.className}`}>
                                            Sign Up
                                        </p>
                                    </Button>
                                    <hr />
                                    <div className="flex justify-between gap-4">
                                        <p className="text-gray-600">
                                            {c.classes} class{isRecurring ? 'es' : ''}
                                        </p>
                                        <div className="flex flex-col text-right">
                                            <p className="text-gray-600 font-semi">
                                                <strong>${c.price_per_class * c.classes}{isRecurring ? '/month' : ''}</strong>
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                {isRecurring ? ` ($${c.price_per_class}/class)` : ''}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-gray-600 flex flex-col text-left text-xs space-y-1">
                                        <p className="flex items-center gap-2">
                                            <ClockIcon className="size-4" />Classes held every Sunday at 10:00 AM
                                        </p>
                                        {isRecurring && (
                                            <p className="flex items-center gap-2">
                                                <CalendarCheckIcon className="size-4" />Renews monthly, cancel any time
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}
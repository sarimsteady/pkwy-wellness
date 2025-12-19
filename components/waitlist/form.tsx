'use client';

import { useActionState } from "react";
import { Input } from "../ui/input";
import { addToWaitlistAction } from "./server-functions";
import { Button } from "../ui/button";
import { AlertCircleIcon, ArrowRightIcon, CheckCircle2Icon } from "lucide-react";

export function WaitlistForm() {
    const [state, formAction, isPending] = useActionState(
        addToWaitlistAction,
        { success: false }
    );

    return (
        <div className="w-full max-w-md mx-auto bg-secondary">
            <form action={formAction} className="space-y-4">
                <div className="relative">
                    <Input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        disabled={isPending || state.success}
                        className="pr-32 h-12 text-base"
                        required
                    />
                    <Button
                        type="submit"
                        disabled={isPending || state.success}
                        className="absolute right-1 top-1 h-10 px-4"
                    >
                        {isPending ? (
                            <span className="flex items-center gap-2">
                                <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                                Joining...
                            </span>
                        ) : state.success ? (
                            <span className="flex items-center gap-2">
                                <CheckCircle2Icon className="w-4 h-4" />
                                Joined!
                            </span>
                        ) : (
                            <span className="flex items-center gap-2">
                                Join Waitlist
                                <ArrowRightIcon className="w-4 h-4" />
                            </span>
                        )}
                    </Button>
                </div>

                {state.message && (
                    <div
                        className={`flex items-center gap-2 p-3 rounded-lg text-sm ${state.success
                            ? 'bg-green-50 text-green-700 border border-green-200'
                            : 'bg-red-50 text-red-700 border border-red-200'
                            }`}
                    >
                        {state.success ? (
                            <CheckCircle2Icon className="w-4 h-4 flex-shrink-0" />
                        ) : (
                            <AlertCircleIcon className="w-4 h-4 flex-shrink-0" />
                        )}
                        <span>{state.message}</span>
                    </div>
                )}

                {state.error && (
                    <div className="flex items-center gap-2 p-3 rounded-lg text-sm bg-red-50 text-red-700 border border-red-200">
                        <AlertCircleIcon className="w-4 h-4 flex-shrink-0" />
                        <span>{state.error}</span>
                    </div>
                )}
            </form>
        </div>
    )
}

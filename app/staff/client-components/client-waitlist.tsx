'use client';

import { useState, useEffect } from 'react';
import { CopyTextButton } from "@/components/functional/copy-button";
import { Button } from "@/components/ui/button";
import { TrashIcon, Users, Calendar, Mail, Loader2 } from "lucide-react";
import { deleteWaitlistEntry } from "../server-functions/delete-waitlist-entry";
import { Card, CardContent } from "@/components/ui/card";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { cn } from "@/lib/utils";

interface WaitlistEntry {
    id: string;
    email: string;
    created_at: string;
}

interface WaitlistDashboardProps {
    initialEntries: WaitlistEntry[];
}

export function WaitlistClient({ initialEntries }: WaitlistDashboardProps) {
    const [data, setData] = useState<WaitlistEntry[]>(initialEntries);
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const handleDelete = async (id: string) => {
        setIsDeleting(id);
        try {
            const formData = new FormData();
            formData.append("id", id);
            await deleteWaitlistEntry(formData);
            setData(prev => prev.filter(item => item.id !== id));
        } catch (err) {
            console.error("Failed to delete entry:", err);
        } finally {
            setIsDeleting(null);
        }
    };

    const allEmails = data.map(i => i.email).join(", ");

    return (
        <main className="space-y-6 max-w-4xl mx-auto">
            {/* Summary Card */}
            <Card className="border-primary/10 bg-gradient-to-br from-white to-primary/[0.02] shadow-sm overflow-hidden">
                <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-center gap-4">
                            <div className="p-3 bg-primary/10 rounded-2xl">
                                <Users className="w-8 h-8 text-primary" />
                            </div>
                            <div>
                                <h2 className="text-4xl font-bold tracking-tight">{data.length}</h2>
                                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Total Waitlist Entries</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CopyTextButton
                                label="Copy All Emails"
                                copyText={allEmails}
                                className="w-fit"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Entries List */}
            <div className="space-y-3">
                <div className="flex items-center justify-between px-1">
                    <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-widest">Recent Signups</h3>
                </div>

                {data.length === 0 ? (
                    <div className="text-center py-12 border-2 border-dashed border-muted rounded-2xl">
                        <p className="text-muted-foreground italic">No entries found yet.</p>
                    </div>
                ) : (
                    data.map((i) => (
                        <Card
                            key={i.id}
                            className={cn(
                                "group transition-all duration-200 hover:shadow-md hover:border-primary/20",
                                isDeleting === i.id && "opacity-50 grayscale pointer-events-none"
                            )}
                        >
                            <CardContent className="p-4">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-4 min-w-0">
                                        <div className="hidden sm:flex p-2 bg-muted rounded-full text-muted-foreground group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                                            <Mail className="w-4 h-4" />
                                        </div>
                                        <div className="min-w-0">
                                            <p className="font-mono text-sm font-semibold truncate group-hover:text-primary transition-colors">
                                                {i.email}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-3 h-3 text-muted-foreground" />
                                                <DateDisplay date={i.created_at} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 shrink-0">
                                        <CopyTextButton copyText={i.email} variant="icon" />

                                        <AlertDialog>
                                            <AlertDialogTrigger
                                                render={
                                                    <Button
                                                        size="icon"
                                                        variant="ghost"
                                                        className="size-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
                                                    />
                                                }
                                            >
                                                <TrashIcon className="w-4 h-4" />
                                            </AlertDialogTrigger>
                                            <AlertDialogContent>
                                                <AlertDialogHeader>
                                                    <AlertDialogTitle>Delete Entry</AlertDialogTitle>
                                                    <AlertDialogDescription>
                                                        Are you sure you want to remove <span className="font-semibold text-foreground">{i.email}</span> from the waitlist? This action cannot be undone.
                                                    </AlertDialogDescription>
                                                </AlertDialogHeader>
                                                <AlertDialogFooter>
                                                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                                                    <AlertDialogAction
                                                        onClick={() => handleDelete(i.id)}
                                                        className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                                                    >
                                                        {isDeleting === i.id ? <Loader2 className="w-4 h-4 animate-spin text-white" /> : "Delete Entry"}
                                                    </AlertDialogAction>
                                                </AlertDialogFooter>
                                            </AlertDialogContent>
                                        </AlertDialog>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </main>
    );
}

function DateDisplay({ date }: { date: string }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="h-4 w-24 bg-muted animate-pulse rounded" />;
    }

    return (
        <p className="text-[11px] text-muted-foreground font-medium">
            {new Date(date).toLocaleString('en-US', {
                dateStyle: 'medium',
                timeStyle: 'short',
            })}
        </p>
    );
}

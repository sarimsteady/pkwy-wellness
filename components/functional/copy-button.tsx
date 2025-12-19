'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CheckIcon, CopyIcon } from "lucide-react";

interface CopyTextButtonProps {
    copyText: string;
    label?: string;
    variant?: 'default' | 'icon';
}

export function CopyTextButton({ label, copyText, variant }: CopyTextButtonProps) {

    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(copyText);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy emails:', error);
        }
    }

    return (
        <Button variant="secondary" onClick={handleCopy}>
            {isCopied ? (
                <>
                    <CheckIcon className="w-4 h-4 text-green-600" />
                    {label && (
                        <span className="text-green-600">{label}</span>
                    )}
                </>
            ) : (
                <>
                    <CopyIcon className="w-4 h-4" />
                    {variant !== "icon" && (
                        <p>
                            {label}
                        </p>
                    )}
                </>
            )}
        </Button>
    )
}
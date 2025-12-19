'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircleIcon } from "lucide-react";
import { useState } from "react";
import { verifyStaffPassword } from "../server-functions/verify-staff-password";
import { setAuthCookie } from "../server-functions/auth-session";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function LoginForm() {
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const response = await verifyStaffPassword(password)

            if (!response) {
                setError("Wrong password");
            } else {
                await setAuthCookie();
                router.refresh();
            }

            setPassword('');
        } catch (error) {
            setError(error instanceof Error ? error.message : 'Authentication failed');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main className="flex justify-center">
            <Card className="p-4 m-4">
                <CardHeader>
                    <CardTitle>Staff Portal</CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6">
                    <div className="grid gap-3">
                        <Label>Enter your access code to continue</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Access code"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            disabled={isLoading}
                            required
                            className="h-8"
                        />

                        {error && (
                            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-lg text-xs text-red-700">
                                <AlertCircleIcon className="w-4 h-4 flex-shrink-0" />
                                <span>{error}</span>
                            </div>
                        )}
                    </div>
                </CardContent>
                <CardFooter>
                    <Button
                        type="submit"
                        disabled={isLoading || !password}
                        onClick={handleSubmit}
                    >
                        {isLoading ? 'Authenticating...' : 'Enter'}
                    </Button>
                </CardFooter>
            </Card>
        </main>
    );
}
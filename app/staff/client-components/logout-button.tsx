'use client';

import { Button } from "@/components/ui/button";
import { clearAuthCookie } from "../server-functions/auth-session";
import { useRouter } from "next/navigation";

export function LogoutButton() {
    const router = useRouter();
    
    const handleLogout = async () => {
        await clearAuthCookie();
        router.refresh();
    }
    
    return (
        <Button onClick={handleLogout}>
            Logout
        </Button>
    )
}
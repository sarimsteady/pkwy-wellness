'use client';

import { Tabs } from "@/components/ui/tabs"
import { useRouter, usePathname, useSearchParams } from "next/navigation"
import { useCallback } from "react";

interface StaffTabsWrapperProps {
    children: React.ReactNode;
    defaultTab: string;
}

export function StaffTabsWrapper({ children, defaultTab }: StaffTabsWrapperProps) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)
            return params.toString()
        },
        [searchParams]
    )

    const currentTab = searchParams.get('tab') || defaultTab;

    return (
        <Tabs
            value={currentTab}
            onValueChange={(value) => {
                router.replace(pathname + '?' + createQueryString('tab', value), {
                    scroll: false
                });
            }}
            className="space-y-2"
        >
            {children}
        </Tabs>
    )
}

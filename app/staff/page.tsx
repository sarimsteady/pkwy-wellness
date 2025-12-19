import { CircleDollarSignIcon, NewspaperIcon } from "lucide-react";
import { LoginForm } from "./mini-components/login-form";
import { LogoutButton } from "./mini-components/logout-button";
import { InvoiceSection } from "./section-create-invoice";
import { WaitlistSection } from "./section-waitlist";
import { isAuthenticated } from "./server-functions/auth-session";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Staff Portal",
    description: "Staff management portal for PKWY Wellness",
    openGraph: {
        title: "Staff Portal | PKWY Wellness",
        description: "Staff management portal for PKWY Wellness",
    },
};

export default async function Page() {
    const authenticated = await isAuthenticated();

    if (!authenticated) {
        return <LoginForm />;
    }

    return (
        <main className="p-4 space-y-4">
            <section className="flex justify-between">
                <div>
                    <h1 className="text-3xl font-semibold">
                        Staff Portal
                    </h1>
                </div>
                <div>
                    <LogoutButton />
                </div>
            </section>

            <section>
                <Tabs defaultValue="waitlist" className="space-y-2">
                    <TabsList>
                        <TabsTrigger value="waitlist">
                            <NewspaperIcon />
                            Waitlist
                        </TabsTrigger>
                        <TabsTrigger value="create-invoice">
                            <CircleDollarSignIcon />
                            Create Invoice
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="waitlist">
                        <WaitlistSection />
                    </TabsContent>
                    <TabsContent value="create-invoice">
                        <InvoiceSection />
                    </TabsContent>
                </Tabs>
            </section>
        </main>
    )
}

import { CircleDollarSignIcon, NewspaperIcon } from "lucide-react";
import { LoginForm } from "./client-components/login-form";
import { LogoutButton } from "./client-components/logout-button";
import { CreateInvoiceSection } from "./client-components/section-create-invoice";
import { WaitlistSection } from "./client-components/section-waitlist";
import { isAuthenticated } from "./server-functions/auth-session";
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

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
                        <CreateInvoiceSection />
                    </TabsContent>
                </Tabs>
            </section>
        </main>
    )
}

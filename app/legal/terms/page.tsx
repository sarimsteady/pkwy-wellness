import { About } from "@/config/about";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Review our terms of service",
  openGraph: {
    title: "Terms of Service | PKWY Wellness",
    description: "Review our terms of service",
  },
};

export default function Page() {
  return (
    <main className="space-y-8 mb-8 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Terms of Service</h1>

          <div className="prose prose-primary max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using the services of {About.companyName} (&apos;we,&apos; &apos;our,&apos; or &apos;us&apos;),
                you agree to be bound by these Terms of Service and all applicable laws and regulations.
                If you do not agree with any of these terms, you are prohibited from using our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
              <p className="mb-4">
                {About.companyName} provides Pilates instruction services including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Private Pilates sessions</li>
                <li>Group Pilates classes</li>
                <li>Corporate wellness programs</li>
                <li>Online booking and payment services</li>
                <li>Wellness consultation and guidance</li>
                <li>Merchandise & physical goods</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Health and Safety Requirements</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Health Clearance</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>You must be physically able to participate in Pilates exercises</li>
                <li>You must disclose any health conditions, injuries, or limitations</li>
                <li>Consult your physician before beginning any exercise program</li>
                <li>Inform instructors of any changes in your health status</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Safety Compliance</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Follow all instructor guidance and safety protocols</li>
                <li>Use equipment properly and as instructed</li>
                <li>Report any equipment issues immediately</li>
                <li>Maintain appropriate attire and hygiene</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Booking and Payment Terms</h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Booking Policy</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Sessions must be booked in advance</li>
                <li>Payment is required at time of booking</li>
                <li>Session packages have expiration dates as specified</li>
                <li>Unused sessions may not be refunded after expiration</li>
                <li>We reserve the right to suspend booking privileges for non-payment</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Membership Terms</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Memberships may be subject to a minimum commitment period (e.g., 3 months)</li>
                <li>Cancellation of memberships requires specific written notice (e.g., 30 days) prior to the next billing cycle</li>
                <li>Memberships may be paused for up to 90 days within a 12-month period for medical reasons or travel, subject to approval</li>
                <li>Membership fees are automated and non-refundable once processed</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Cancellation Policy</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Cancellations must be made at least 24 hours in advance</li>
                <li>Late cancellations (less than 24 hours) may result in session forfeiture</li>
                <li>No-shows will result in full session charge</li>
                <li>Emergency cancellations will be considered on a case-by-case basis</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">No Refund Policy</h3>
              <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mb-4">
                <p className="font-semibold text-gray-900 mb-2">IMPORTANT: NO REFUNDS</p>
                <p className="text-gray-700">
                  All sales are final. We do not offer refunds for any services, packages, or memberships.
                </p>
              </div>
              <p className="mb-4">Please understand that:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>All payments for products, services, packages, and memberships are non-refundable</li>
                <li>This policy applies regardless of usage, satisfaction, or circumstances</li>
                <li>Session packages and memberships cannot be refunded, even if unused</li>
                <li>Payment disputes must be resolved directly with {About.companyName}</li>
                <li>Refunds will not be issued for medical reasons, scheduling conflicts, or personal circumstances</li>
                <li>Gift certificates and promotional packages are non-refundable</li>
                <li>In exceptional circumstances, credit toward future services may be considered at our sole discretion</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Liability and Risk Assumption</h2>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg mb-4">
                <p className="font-semibold text-red-800 mb-2">IMPORTANT: READ CAREFULLY</p>
                <p className="text-red-700">
                  Participation in Pilates activities involves inherent risks of injury.
                  By using our services, you acknowledge and assume these risks.
                </p>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Assumption of Risk</h3>
              <p className="mb-4">You acknowledge that:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Physical exercise involves risk of injury</li>
                <li>You participate voluntarily and at your own risk</li>
                <li>You are responsible for knowing your physical limitations</li>
                <li>You will not exceed your personal limits during sessions</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Limitation of Liability</h3>
              <p className="mb-4">
                To the fullest extent permitted by law, {About.companyName} and its instructors
                shall not be liable for any injuries, damages, or losses arising from your participation
                in our services, except in cases of gross negligence or willful misconduct.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Code of Conduct</h2>
              <p className="mb-4">All clients must:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Treat instructors and other clients with respect</li>
                <li>Maintain appropriate language and behavior</li>
                <li>Respect studio property and equipment</li>
                <li>Follow all studio rules and policies</li>
                <li>Maintain confidentiality of other clients information</li>
                <li>Arrive on time; late arrivals may not be permitted to enter to avoid disruption</li>
                <li>Refrain from using mobile phones during sessions</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Personal Belongings</h2>
              <p className="mb-4">
                You are responsible for your personal belongings. {About.companyName} is not liable for any
                lost, stolen, or damaged items. We recommend that you do not bring valuables into the studio.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Intellectual Property</h2>
              <p className="mb-4">
                All content, methods, and materials used in our services are the intellectual property
                of {About.companyName} or licensed to us. You may not reproduce, distribute, or
                use our proprietary methods without written permission.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Privacy and Confidentiality</h2>
              <p className="mb-4">
                Your privacy is important to us. Please review our Privacy Policy for information
                about how we collect, use, and protect your personal information. Health information
                shared with instructors will be kept confidential and used only for providing safe,
                effective instruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
              <p className="mb-4">
                We reserve the right to terminate or suspend your access to our services at any time
                for violation of these terms, inappropriate behavior, or safety concerns. Upon termination,
                you must cease all use of our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Force Majeure</h2>
              <p className="mb-4">
                We are not liable for any failure to perform our obligations due to circumstances
                beyond our reasonable control, including but not limited to natural disasters,
                government regulations, or public health emergencies.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law</h2>
              <p className="mb-4">
                These terms are governed by the laws of the Commonwealth of Pennsylvania.
                Any disputes will be resolved in the courts of Allegheny County, Pennsylvania.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these terms at any time. We will notify you of
                material changes by posting updated terms on our website. Continued use of our
                services after changes constitutes acceptance of the new terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-900"><strong>{About.companyName}</strong></p>
                <p className="text-gray-700">Email: <a href={`mailto:${About.email}`} className="text-primary hover:text-primary/80 transition-colors">{About.email}</a></p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Acknowledgment</h2>
              <p className="mb-4">
                By booking and using our services, you acknowledge that you have read, understood,
                and agree to be bound by these Terms of Service.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

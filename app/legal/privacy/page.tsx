import { About } from "@/config/about";

export default function Page() {
  return (
    <main className="space-y-8 mb-8 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Privacy Policy</h1>
          
          <div className="prose prose-primary max-w-none text-gray-700">
            <p className="text-sm text-gray-500 mb-8">
              <strong>Effective Date:</strong> January 1, 2025<br />
              <strong>Last Updated:</strong> January 1, 2025
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                {About.companyName} (&apos;we,&apos; &apos;our,&apos; or &apos;us&apos;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                when you visit our website {About.url} and use our Pilates services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-800 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium text-gray-800 mb-3">Personal Information</h3>
              <p className="mb-4">We may collect the following personal information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Name, email address, and phone number</li>
                <li>Billing and payment information</li>
                <li>Health and fitness information relevant to Pilates instruction</li>
                <li>Emergency contact information</li>
                <li>Session preferences and scheduling information</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">Automatically Collected Information</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>IP address and browser information</li>
                <li>Website usage data and analytics</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use your information to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide and deliver Pilates services and instruction</li>
                <li>Process payments and manage your account</li>
                <li>Schedule sessions and send appointment reminders</li>
                <li>Communicate about our services and respond to inquiries</li>
                <li>Ensure safety during Pilates sessions</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Health Information</h2>
              <p className="mb-4">
                As a Pilates & Wellness service, we may collect health and fitness information to ensure safe and 
                effective instruction. This information is:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Used solely for providing appropriate Pilates instruction</li>
                <li>Kept confidential and secure</li>
                <li>Shared only with instructors who need it for your safety</li>
                <li>Never sold or used for marketing purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing</h2>
              <p className="mb-4">We do not sell your personal information. We may share information:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>With instructors for session planning and safety</li>
                <li>With payment processors for transaction processing</li>
                <li>With emergency contacts in case of medical emergency</li>
                <li>When required by law or to protect rights and safety</li>
                <li>With service providers who assist in our operations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
              <p className="mb-4">
                We implement appropriate security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Encryption of sensitive data</li>
                <li>Secure payment processing</li>
                <li>Limited access to personal information</li>
                <li>Regular security assessments</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate information</li>
                <li>Request deletion of your information (subject to legal requirements)</li>
                <li>Opt out of marketing communications</li>
                <li>Request information about how we use your data</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Cookies and Tracking</h2>
              <p className="mb-4">
                We use cookies and similar technologies to enhance your website experience. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Third-Party Services</h2>
              <p className="mb-4">
                Our website may contain links to third-party services (payment processors, social media). 
                This privacy policy does not apply to third-party websites or services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="mb-4">
                We may update this privacy policy from time to time. We will notify you of any 
                material changes by posting the new policy on this page with an updated effective date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="text-gray-900"><strong>{About.companyName}</strong></p>
                <p className="text-gray-700">Email: <a href={`mailto:${About.email}`} className="text-primary hover:text-primary/80 transition-colors">{About.email}</a></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

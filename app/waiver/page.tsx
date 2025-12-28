import { Metadata } from "next";
import { About } from "@/config/about";

export const metadata: Metadata = {
  title: "Pilates Waiver & Release of Liability",
  description: "Complete your Pilates waiver and release of liability form before participating in classes with Samantha Syed",
  openGraph: {
    title: "Pilates Waiver & Release of Liability | PKWY Wellness",
    description: "Complete your Pilates waiver and release of liability form before participating in classes.",
  },
};

export default function WaiverPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Pilates Waiver & Release of Liability
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Welcome! Please fill out this waiver before participating in classes with Samantha Syed.
            By submitting this form, you&apos;re agreeing to the terms below.
          </p>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500">
            Having trouble with the form?{" "}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfmaWp0FKWl6YY9PhiBFS8Etni2lu_ebXOuXVeausK_XdMV5g/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
            >
              Open in new tab
            </a>
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center mb-6">
            {/* Google Form Embed */}
            <div className="bg-white rounded-lg shadow-lg p-6">

              {/* Google Form Embed */}
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfmaWp0FKWl6YY9PhiBFS8Etni2lu_ebXOuXVeausK_XdMV5g/viewform?embedded=true"
                  width="100%"
                  height="800"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  className="rounded-lg"
                  title="PKWY Wellness Waiver Form"
                >
                  Loading…
                </iframe>
              </div>

              <div className="mt-4 text-center">
                <p className="text-sm text-gray-500">
                  Having trouble with the form?{" "}
                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfmaWp0FKWl6YY9PhiBFS8Etni2lu_ebXOuXVeausK_XdMV5g/viewform?usp=header"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
                  >
                    Open in new tab
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            What to Expect
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Form Sections
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>Personal information and emergency contacts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>Health and medical history questions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>Liability waiver and risk acknowledgment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>Cancellation policy agreement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>Optional media release consent</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">
                Important Notes
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>All fields marked as required must be completed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>Form takes approximately 5-10 minutes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>Your information is kept confidential</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>Required before your first class</span>
                </li>
                <li className="flex items-start">
                  <span className="text-fuchsia-500 mr-2">•</span>
                  <span>One-time submission per client</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-gray-600">
            Questions? Contact us at{" "}
            <a
              href={`mailto:${About.email}`}
              className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
            >
              {About.email}
            </a>
            {" "}or DM Samantha on{" "}
            <a
              href={About.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-fuchsia-600 hover:text-fuchsia-700 font-medium"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

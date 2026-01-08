"use client";

import PolicyLayout from "../components/PolicyLayout";

export default function PrivacyPolicy() {
    return (
        <PolicyLayout title="Privacy Policy" lastUpdated="January 8, 2026">
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                <p className="text-purple-200/80 mb-4">
                    We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, request customer support, or otherwise communicate with us. This information may include your name, email address, postal address, phone number, and other information you choose to provide.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Information</h2>
                <p className="text-purple-200/80 mb-4">
                    We use the information we collect to provide, maintain, and improve our services, including to:
                </p>
                <ul className="list-disc pl-6 text-purple-200/80 space-y-2">
                    <li>Process transactions and send related information.</li>
                    <li>Send you technical notices, updates, security alerts, and support and administrative messages.</li>
                    <li>Respond to your comments, questions, and requests and provide customer service.</li>
                    <li>Communicate with you about products, services, offers, promotions, rewards, and events offered by Nevolute Cloud Labs.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
                <p className="text-purple-200/80 mb-4">
                    We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction. However, no internet or email transmission is ever fully secure or error free.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Cookies</h2>
                <p className="text-purple-200/80 mb-4">
                    We use cookies and similar technologies to collect information about your interactions with our Services. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Changes to This Policy</h2>
                <p className="text-purple-200/80 mb-4">
                    We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                <p className="text-purple-200/80 mb-4">
                    If you have any questions about this Privacy Policy, please contact us at support@nevolutelabs.in.
                </p>
            </section>
        </PolicyLayout>
    );
}

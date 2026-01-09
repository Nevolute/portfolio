"use client";

import PolicyLayout from "../components/PolicyLayout";

export default function PrivacyPolicy() {
    return (
        <PolicyLayout title="Privacy Policy" lastUpdated="January 8, 2026">
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
                <p className="text-gray-600 mb-4">
                    We collect information you provide directly to us when you fill out a contact form, request a demo, or communicate with us via email. This may include your name, email address, company name, and any other information you choose to provide.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Information</h2>
                <p className="text-gray-600 mb-4">
                    We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Provide, maintain, and improve our services.</li>
                    <li>Respond to your comments, questions, and requests.</li>
                    <li>Send you technical notices, updates, security alerts, and support messages.</li>
                    <li>Communicate with you about products, services, offers, and events.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Security</h2>
                <p className="text-gray-600 mb-4">
                    We take reasonable measures to help protect information about you from loss, theft, misuse and unauthorized access, disclosure, alteration and destruction.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies</h2>
                <p className="text-gray-600 mb-4">
                    We use cookies to improve your experience on our website. You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Changes to This Policy</h2>
                <p className="text-gray-600 mb-4">
                    We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                    If you have any questions about this Privacy Policy, please contact us at support@nevolutelabs.in.
                </p>
            </section>
        </PolicyLayout>
    );
}

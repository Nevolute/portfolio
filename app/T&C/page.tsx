"use client";

import PolicyLayout from "../components/PolicyLayout";

export default function TermsAndConditions() {
    return (
        <PolicyLayout title="Terms and Conditions" lastUpdated="January 8, 2026">
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
                <p className="text-purple-200/80 mb-4">
                    Welcome to Nevolute Cloud Labs. By accessing our website and using our services, you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
                <p className="text-purple-200/80 mb-4">
                    The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary (including but not limited to intellectual property) rights. The copying, redistribution, use, or publication by you of any such matters or any part of the Site is strictly prohibited.VB
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Use of Services</h2>
                <p className="text-purple-200/80 mb-4">
                    You agree to use our services only for lawful purposes. You are prohibited from violating or attempting to violate the security of the Site, including, without limitation:
                </p>
                <ul className="list-disc pl-6 text-purple-200/80 space-y-2">
                    <li>Accessing data not intended for you.</li>
                    <li>Attempting to probe, scan, or test the vulnerability of a system.</li>
                    <li>Interfering with service to any user, host, or network.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
                <p className="text-purple-200/80 mb-4">
                    In no event will Nevolute Cloud Labs be liable for any incidental, consequential, or indirect damages (including, but not limited to, damages for loss of profits, business interruption, loss of programs or information, and the like) arising out of the use of or inability to use the service, or any information, or transactions provided on the service, or downloaded from the service, or any delay of such informationdv service.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Governing Law</h2>
                <p className="text-purple-200/80 mb-4">
                    These Terms and Conditions shall be governed by and construed in accordance with the laws of India. Any legal action or proceeding related to this Site shall be brought exclusively in a federal or state court of competent jurisdiction sitting in India.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">6. Contact Information</h2>
                <p className="text-purple-200/80 mb-4">
                    If you have any questions or concerns about these Terms, please contact us at support@nevolutelabs.in.
                </p>
            </section>
        </PolicyLayout>
    );
}

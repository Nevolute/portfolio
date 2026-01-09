"use client";

import PolicyLayout from "../components/PolicyLayout";

export default function RefundPolicy() {
    return (
        <PolicyLayout title="Refund Policy" lastUpdated="January 8, 2026">
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Refund Process</h2>
                <p className="text-gray-600 mb-4">
                    If your return is approved, then your refund will be processed, and a credit will automatically be applied to your credit card or original method of payment, within a certain amount of days (typically 5-10 business days).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Late or Missing Refunds</h2>
                <p className="text-gray-600 mb-4">
                    If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted. Next, contact your bank. There is often some processing time before a refund is posted. If you’ve done all of this and you still have not received your refund yet, please contact us.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Services & Consulting</h2>
                <p className="text-gray-600 mb-4">
                    Refunds for training and consulting services are subject to the terms agreed upon in the service contract. Generally, no refunds are provided for services already rendered.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Sale Items</h2>
                <p className="text-gray-600 mb-4">
                    Only regular priced items may be refunded. Sale items cannot be refunded.
                </p>
            </section>
        </PolicyLayout>
    );
}

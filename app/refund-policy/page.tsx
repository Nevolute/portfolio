"use client";

import PolicyLayout from "../components/PolicyLayout";

export default function RefundPolicy() {
    return (
        <PolicyLayout title="Refund Policy" lastUpdated="January 8, 2026">
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Refund Process</h2>
                <p className="text-purple-200/80 mb-4">
                    We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or not. If approved, you’ll be automatically refunded on your original payment method within 10 business days.
                </p>
                <p className="text-purple-200/80 mb-4">
                    Please remember it can take some time for your bank or credit card company to process and post the refund too.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Late or Missing Refunds</h2>
                <p className="text-purple-200/80 mb-4">
                    If you haven’t received a refund yet, first check your bank account again. Then contact your credit card company, it may take some time before your refund is officially posted.
                </p>
                <p className="text-purple-200/80 mb-4">
                    If you’ve done all of this and you still have not received your refund yet, please contact us at support@nevolutelabs.in.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Services & Consulting</h2>
                <p className="text-purple-200/80 mb-4">
                    Refunds for consulting services are handled on a case-by-case basis. Generally, fees for services already rendered are non-refundable. If you cancel a scheduled session with more than 24 hours notice, a full refund may be issued.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Sale Items</h2>
                <p className="text-purple-200/80 mb-4">
                    Only regular priced items may be refunded. Unfortunately, sale items cannot be refunded unless required by law.
                </p>
            </section>
        </PolicyLayout>
    );
}

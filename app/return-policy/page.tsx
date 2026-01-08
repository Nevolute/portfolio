"use client";

import PolicyLayout from "../components/PolicyLayout";

export default function ReturnPolicy() {
    return (
        <PolicyLayout title="Return Policy" lastUpdated="January 8, 2026">
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Return Eligibility</h2>
                <p className="text-purple-200/80 mb-4">
                    We want you to be completely satisfied with your purchase. If you are not successfully satisfied, you may return the item(s) within 30 days of receiving your order.
                </p>
                <p className="text-purple-200/80 mb-4">
                    To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You will also need the receipt or proof of purchase.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Return Process</h2>
                <p className="text-purple-200/80 mb-4">
                    To start a return, you can contact us at support@nevolutelabs.in. If your return is accepted, we will send you a return shipping label, as well as instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Damages and Issues</h2>
                <p className="text-purple-200/80 mb-4">
                    Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. Digital Products</h2>
                <p className="text-purple-200/80 mb-4">
                    Please note that due to the nature of digital products and services, they are generally not eligible for return once the service has been rendered or the digital product has been downloaded.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. Contact Us</h2>
                <p className="text-purple-200/80 mb-4">
                    For any return questions, please contact us at support@nevolutelabs.in.
                </p>
            </section>
        </PolicyLayout>
    );
}

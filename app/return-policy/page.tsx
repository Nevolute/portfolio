"use client";

import PolicyLayout from "../components/PolicyLayout";

export default function ReturnPolicy() {
    return (
        <PolicyLayout title="Return Policy" lastUpdated="January 8, 2026">
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Return Eligibility</h2>
                <p className="text-gray-600 mb-4">
                    Due to the nature of our products and services (digital goods, software, training, and consulting), returns are generally not applicable. However, we assess requests on a case-by-case basis.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Return Process</h2>
                <p className="text-gray-600 mb-4">
                    To initiate a return request, please contact our support team at support@nevolutelabs.in with your order details and reason for the return.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Damages and Issues</h2>
                <p className="text-gray-600 mb-4">
                    Please inspect your order upon reception and contact us immediately if the item is defective, damaged or if you receive the wrong item, so that we can evaluate the issue and make it right.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Digital Products</h2>
                <p className="text-gray-600 mb-4">
                    Digital products and software licenses are non-returnable once the license key has been activated or the software has been downloaded, unless there is a critical technical fault that we cannot resolve.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Contact Us</h2>
                <p className="text-gray-600 mb-4">
                    For more information about our return policy, if you have questions, or if you would like to make a complaint, please contact us by e-mail at support@nevolutelabs.in.
                </p>
            </section>
        </PolicyLayout>
    );
}

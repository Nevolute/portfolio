"use client";

import PolicyLayout from "../components/PolicyLayout";

export default function ShippingPolicy() {
    return (
        <PolicyLayout title="Shipping Policy" lastUpdated="January 8, 2026">
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Order Processing</h2>
                <p className="text-gray-600 mb-4">
                    All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped (if applicable).
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Digital Delivery</h2>
                <p className="text-gray-600 mb-4">
                    For digital products (software, course access), you will receive access credentials via email immediately upon successful payment. Please check your spam folder if you do not receive the email.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Domestic Shipping Rates</h2>
                <p className="text-gray-600 mb-4">
                    For physical goods (if any), shipping charges for your order will be calculated and displayed at checkout.
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                    <li>Standard Shipping: 3-5 business days</li>
                    <li>Express Shipping: 1-2 business days</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. International Shipping</h2>
                <p className="text-gray-600 mb-4">
                    We currently do not ship physical goods outside of India. Digital services are available globally.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. How do I check the status of my order?</h2>
                <p className="text-gray-600 mb-4">
                    When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.
                </p>
            </section>
        </PolicyLayout>
    );
}

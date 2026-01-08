"use client";

import PolicyLayout from "../components/PolicyLayout";

export default function ShippingPolicy() {
    return (
        <PolicyLayout title="Shipping Policy" lastUpdated="January 8, 2026">
            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">1. Order Processing</h2>
                <p className="text-purple-200/80 mb-4">
                    All orders are processed within 1 to 3 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">2. Digital Delivery</h2>
                <p className="text-purple-200/80 mb-4">
                    For digital products and services, access is typically granted immediately upon purchase or sent via email within 24 hours. If you do not receive access, please check your spam folder or contact support.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">3. Domestic Shipping Rates</h2>
                <p className="text-purple-200/80 mb-4">
                    Shipping charges for your order will be calculated and displayed at checkout. We offer standard and express shipping options.
                </p>
                <ul className="list-disc pl-6 text-purple-200/80 space-y-2">
                    <li>Standard Shipping: 5-7 business days</li>
                    <li>Express Shipping: 2-3 business days</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">4. International Shipping</h2>
                <p className="text-purple-200/80 mb-4">
                    We currently offer international shipping to select countries. Your order may be subject to import duties and taxes (including VAT), which are incurred once a shipment reaches your destination country. Nevolute Cloud Labs is not responsible for these charges if they are applied and are your responsibility as the customer.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-4">5. How do I check the status of my order?</h2>
                <p className="text-purple-200/80 mb-4">
                    When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.
                </p>
            </section>
        </PolicyLayout>
    );
}

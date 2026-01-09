"use client";

import Header from "./Header";
import Footer from "./Footer";

interface PolicyLayoutProps {
    children: React.ReactNode;
    title: string;
    lastUpdated?: string;
}

export default function PolicyLayout({ children, title, lastUpdated }: PolicyLayoutProps) {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                            {title}
                        </h1>
                        {lastUpdated && (
                            <p className="text-gray-500 font-medium">
                                Last Updated: {lastUpdated}
                            </p>
                        )}
                    </div>

                    <div className="prose prose-lg prose-gray max-w-none bg-white border border-gray-100 rounded-2xl p-8 sm:p-12 shadow-sm">
                        {children}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

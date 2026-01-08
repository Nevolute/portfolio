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
        <div className="min-h-screen bg-background relative selection:bg-purple-500/30">
            <Header />

            {/* Background blobs */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none -zk-10">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-800/20 rounded-full blur-3xl" />
            </div>

            <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12 text-center">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
                            {title}
                        </h1>
                        {lastUpdated && (
                            <p className="text-purple-200/60">
                                Last Updated: {lastUpdated}
                            </p>
                        )}
                    </div>

                    <div className="prose prose-invert prose-purple max-w-none bg-purple-950/20 border border-purple-800/20 rounded-2xl p-8 sm:p-12">
                        {children}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}

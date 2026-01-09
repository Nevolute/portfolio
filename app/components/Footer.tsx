"use client";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <div className="relative w-8 h-8">
              <Image
                src="/logo.svg"
                alt="Nevolute Labs Logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-gray-900">Nevolute Cloud Labs</span>
          </div>
          <p className="text-gray-600 mb-4 max-w-sm">
            Empowering businesses with enterprise-grade training, consulting, and innovative product solutions.
          </p>
          <div className="flex gap-4">
            {/* Social Links could go here */}
          </div>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            <li><a href="/#training" className="text-gray-600 hover:text-gold-600 transition-colors">Training</a></li>
            <li><a href="/#consulting" className="text-gray-600 hover:text-gold-600 transition-colors">Consulting</a></li>
            <li><a href="/#products" className="text-gray-600 hover:text-gold-600 transition-colors">Products</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
          <ul className="space-y-2">
            <li><a href="/T&C" className="text-gray-600 hover:text-gold-600 transition-colors">Terms & Conditions</a></li>
            <li><a href="/privacy-policy" className="text-gray-600 hover:text-gold-600 transition-colors">Privacy Policy</a></li>
            <li><a href="/return-policy" className="text-gray-600 hover:text-gold-600 transition-colors">Return Policy</a></li>
            <li><a href="/refund-policy" className="text-gray-600 hover:text-gold-600 transition-colors">Refund Policy</a></li>
            <li><a href="/shipping-policy" className="text-gray-600 hover:text-gold-600 transition-colors">Shipping Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-gray-900 font-semibold mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="text-gray-600">support@nevolutelabs.in</li>
            <li className="text-gray-600">+91 (555) 123-4567</li>
            <li className="text-gray-600">Bangalore, India</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Nevolute Cloud Labs. All rights reserved.
      </div>
    </footer>
  );
}

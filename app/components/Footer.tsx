"use client";

export default function Footer() {
  return (
    <footer className="bg-purple-950/50 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-purple flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-xl font-bold text-white">Nevolute Cloud Labs</span>
            </div>
            <p className="text-purple-200/60 max-w-md">
              Empowering businesses with cutting-edge training, consulting, and product development solutions. Your trusted partner in digital transformation.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="/#training" className="text-purple-200/60 hover:text-white transition-colors">Training</a></li>
              <li><a href="/#consulting" className="text-purple-200/60 hover:text-white transition-colors">Consulting</a></li>
              <li><a href="/#products" className="text-purple-200/60 hover:text-white transition-colors">Products</a></li>
              {/* <li><a href="/#demos" className="text-purple-200/60 hover:text-white transition-colors">Demos</a></li> */}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/T&C" className="text-purple-200/60 hover:text-white transition-colors">Terms & Conditions</a></li>
              <li><a href="/privacy-policy" className="text-purple-200/60 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/return-policy" className="text-purple-200/60 hover:text-white transition-colors">Return Policy</a></li>
              <li><a href="/refund-policy" className="text-purple-200/60 hover:text-white transition-colors">Refund Policy</a></li>
              <li><a href="/shipping-policy" className="text-purple-200/60 hover:text-white transition-colors">Shipping Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-purple-200/60">
              <li>support@nevolutelabs.in</li>
              <li>+91-7411682003</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/20 mt-8 pt-8 text-center text-purple-200/40">
          <p>&copy; {new Date().getFullYear()} Nevolute Cloud Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

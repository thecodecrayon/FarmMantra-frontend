import {
  FacebookIco,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
  InstagramIco,
  TwitterIco,
  WhatsappIco,
} from "../icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-white text-2xl font-bold">BaghpatBloom</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering rural artisans, preserving traditions, one handcrafted
              piece at a time.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="https://wa.me/9756154434"
                className="hover:text-white transition-colors"
              >
                <WhatsappIco className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <FacebookIco className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <InstagramIco className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <TwitterIco className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  All Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Diyas & Candles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Home Decor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Best Sellers
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Our Artisans
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Quality Guarantee
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Sustainability
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm">
                <MailIcon className="w-4 h-4 mt-1 shrink-0" />
                <span>support@baghpatbloom.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <PhoneIcon className="w-4 h-4 mt-1 shrink-0" />
                <span>+91 9756154434</span>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <MapPinIcon className="w-4 h-4 mt-1 shrink-0" />
                <span>Baghpat, Uttar Pradesh, India</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025-2026 BaghpatBloom. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Shipping Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

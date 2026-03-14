import { Mail, MessageCircle, Phone, X } from "lucide-react";

const InquiryPopup = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 relative animate-in fade-in zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={28} className="text-yellow-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Contact the Artisan
          </h3>
          <p className="text-gray-600">
            Reach out for questions, customizations, or bulk orders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <a
            href="tel:+919876543210"
            className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer text-center"
          >
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Phone size={22} className="text-green-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Phone</p>
              <p className="text-sm text-gray-600">+91 98765 43210</p>
            </div>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 bg-green-50 rounded-xl hover:bg-green-100 transition-colors cursor-pointer text-center relative border-2 border-green-200"
          >
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-xs bg-green-500 text-white px-3 py-1 rounded-full font-medium">
              Recommended
            </span>
            <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle size={22} className="text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">
                WhatsApp
              </p>
              <p className="text-sm text-gray-600">Chat directly</p>
            </div>
          </a>

          <a
            href="mailto:artisan@example.com"
            className="flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer text-center"
          >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail size={22} className="text-blue-600" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Email</p>
              <p className="text-sm text-gray-600">artisan@example.com</p>
            </div>
          </a>
        </div>

        <div className="bg-yellow-50 rounded-xl p-4 border border-yellow-200">
          <p className="text-sm text-gray-700 text-center">
            <span className="font-semibold">Response time:</span> Usually within
            2-4 hours during business hours (9 AM - 6 PM IST)
          </p>
        </div>
      </div>
    </div>
  );
};

export default InquiryPopup;

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
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl p-5 sm:p-8 relative animate-in fade-in slide-in-from-bottom sm:zoom-in duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} className="text-gray-500" />
        </button>

        {/* Drag handle for mobile */}
        <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto mb-4 sm:hidden" />

        <div className="text-center mb-5 sm:mb-8">
          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
            <MessageCircle
              size={22}
              className="text-yellow-600 sm:w-7 sm:h-7"
            />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">
            Contact the Artisan
          </h3>
          <p className="text-sm sm:text-base text-gray-600">
            Reach out for questions, customizations, or bulk orders
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
          <a
            href="tel:+919876543210"
            className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 active:scale-95 transition-all cursor-pointer text-center"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 rounded-full flex items-center justify-center">
              <Phone size={18} className="text-green-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">
                Phone
              </p>
              <p className="text-[10px] sm:text-sm text-gray-600 hidden sm:block">
                +91 98765 43210
              </p>
            </div>
          </a>

          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-6 bg-green-50 rounded-xl hover:bg-green-100 active:scale-95 transition-all cursor-pointer text-center relative border-2 border-green-200"
          >
            <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] sm:text-xs bg-green-500 text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-medium whitespace-nowrap">
              Recommended
            </span>
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle size={18} className="text-white" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">
                WhatsApp
              </p>
              <p className="text-[10px] sm:text-sm text-gray-600 hidden sm:block">
                Chat directly
              </p>
            </div>
          </a>

          <a
            href="mailto:artisan@example.com"
            className="flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-6 bg-gray-50 rounded-xl hover:bg-gray-100 active:scale-95 transition-all cursor-pointer text-center"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Mail size={18} className="text-blue-600" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-semibold text-gray-900 mb-0.5">
                Email
              </p>
              <p className="text-[10px] sm:text-sm text-gray-600 hidden sm:block">
                artisan@example.com
              </p>
            </div>
          </a>
        </div>

        <div className="bg-yellow-50 rounded-xl p-3 sm:p-4 border border-yellow-200">
          <p className="text-xs sm:text-sm text-gray-700 text-center">
            <span className="font-semibold">Response time:</span> Usually within
            2–4 hours during business hours (9 AM – 6 PM IST)
          </p>
        </div>
      </div>
    </div>
  );
};

export default InquiryPopup;

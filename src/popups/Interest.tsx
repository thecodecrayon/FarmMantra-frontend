import { Bell, CheckCircle, Send, X } from "lucide-react";
import { useState } from "react";
import useCreateInquiry from "../hooks/popups/useCreateInquiry";

const InterestPopup = ({
  isOpen,
  onClose,
  productName,
  productId,
}: {
  isOpen: boolean;
  onClose: () => void;
  productName: string;
  productId: string;
}) => {
  const { createNewInquiry } = useCreateInquiry();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    const payload = { ...formData, productId: Number(productId) };
    await createNewInquiry(payload);
  };

  const handleClose = () => {
    onClose();
    setIsSubmitted(false);
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end sm:items-center justify-center z-50 p-0 sm:p-4">
      <div className="bg-white rounded-t-2xl sm:rounded-2xl w-full sm:max-w-2xl relative animate-in fade-in slide-in-from-bottom sm:zoom-in duration-200 max-h-[92vh] sm:max-h-[90vh] overflow-y-auto">
        {/* Drag handle — mobile only */}
        <div className="sticky top-0 bg-white pt-3 pb-1 px-5 sm:hidden">
          <div className="w-10 h-1 bg-gray-200 rounded-full mx-auto" />
        </div>

        <div className="p-5 sm:p-8">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors z-10"
          >
            <X size={20} className="text-gray-500" />
          </button>

          {isSubmitted ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <CheckCircle size={36} className="text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                Interest Registered!
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 max-w-md mx-auto">
                We've notified the artisan about your interest. They'll reach
                out to you soon!
              </p>
              <button
                onClick={handleClose}
                className="bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 px-8 rounded-xl transition-colors w-full sm:w-auto"
              >
                Done
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-5 sm:mb-8">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Bell size={22} className="text-yellow-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                  I'm Interested!
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  Let the artisan know you're interested in{" "}
                  <span className="font-semibold text-gray-900">
                    {productName}
                  </span>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                {/* Name + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all text-sm sm:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all text-sm sm:text-base"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Email <span className="text-gray-400">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1.5 sm:mb-2">
                    Message <span className="text-gray-400">(Optional)</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    rows={3}
                    className="w-full px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-gray-200 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 outline-none transition-all resize-none text-sm sm:text-base"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-400 hover:bg-yellow-500 active:scale-95 text-gray-900 font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send size={18} />
                  Submit Interest
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default InterestPopup;

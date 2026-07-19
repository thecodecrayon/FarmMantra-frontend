import { useState } from "react";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft, Tag } from "lucide-react";
import { useNavigate } from "react-router-dom";
import useCart from "../context/useCart";
import type { CartItem } from "../types";

const MyCart = () => {
  const { cart, addMultipleToCart } = useCart();

  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    const items = cart.map((item: CartItem) =>
      item.id === id ? { ...item, quantity: newQuantity } : item,
    );

    addMultipleToCart(items);
  };

  const removeItem = (id: number) => {
    const items = cart.filter((item) => item.id !== id);
    addMultipleToCart(items);
  };

  const applyPromo = () => {
    if (promoCode.toUpperCase() === "DESI10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };

  const navigateToHome = () => {
    navigate("/");
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const discountAmount = (subtotal * discount) / 100;
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal - discountAmount + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 text-gray-900 transition-colors hover:text-gray-400 cursor-pointer"
              onClick={navigateToHome}
            >
              <ArrowLeft size={18} className="shrink-0" />
              <span className="font-medium text-sm sm:text-base">
                Continue Shopping
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-28 lg:pb-8">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5 sm:mb-2">
            Shopping Cart
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            {cart.length === 0 ? (
              <div className="bg-white rounded-2xl p-8 sm:p-12 text-center border border-gray-200">
                <ShoppingBag className="w-14 h-14 sm:w-16 sm:h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  Your cart is empty
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-6">
                  Add some beautiful handcrafted items to your cart
                </p>
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-xl transition-colors text-sm sm:text-base"
                  onClick={navigateToHome}
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-3.5 sm:p-6 border border-gray-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-3 sm:gap-6">
                    {/* Image */}
                    <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-gray-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                          <div className="min-w-0">
                            <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1 line-clamp-2">
                              {item.title}
                            </h3>
                            <p className="text-xs sm:text-sm text-gray-500">
                              {item.pieces} {item.unit}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors p-1.5 sm:p-2 shrink-0"
                            aria-label="Remove item"
                          >
                            <Trash2
                              size={16}
                              className="sm:w-[18px] sm:h-[18px]"
                            />
                          </button>
                        </div>
                        <p className="text-lg sm:text-2xl font-bold text-gray-900">
                          ₹{item.price}
                        </p>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mt-3 sm:mt-4">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-8 sm:w-12 text-center font-semibold text-sm sm:text-base">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <span className="text-xs sm:text-sm text-gray-500 ml-auto whitespace-nowrap">
                          Subtotal:{" "}
                          <span className="font-bold text-gray-900">
                            ₹{item.price * item.quantity}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200 lg:sticky lg:top-24">
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
                Order Summary
              </h2>

              {/* Promo Code */}
              <div className="mb-5 sm:mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Promo Code
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1 min-w-0">
                    <Tag
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Enter code"
                      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent text-sm sm:text-base"
                    />
                  </div>
                  <button
                    onClick={applyPromo}
                    className="px-3.5 sm:px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors text-sm sm:text-base shrink-0"
                  >
                    Apply
                  </button>
                </div>
                {discount > 0 && (
                  <p className="text-sm text-green-600 mt-2 font-medium">
                    ✓ {discount}% discount applied!
                  </p>
                )}
              </div>

              {/* Price Breakdown */}
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6 pb-5 sm:pb-6 border-b border-gray-200 text-sm sm:text-base">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount ({discount}%)</span>
                    <span className="font-semibold">-₹{discountAmount}</span>
                  </div>
                )}
                <div className="flex justify-between text-gray-700">
                  <span>Shipping</span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
                {subtotal < 500 && subtotal > 0 && (
                  <p className="text-xs text-gray-500">
                    Add ₹{500 - subtotal} more for free shipping
                  </p>
                )}
              </div>

              {/* Total */}
              <div className="flex justify-between items-center mb-5 sm:mb-6">
                <span className="text-base sm:text-lg font-bold text-gray-900">
                  Total
                </span>
                <span className="text-2xl sm:text-3xl font-bold text-gray-900">
                  ₹{total}
                </span>
              </div>

              {/* Checkout Button */}
              <button
                disabled={cart.length === 0}
                onClick={() => navigate("/checkout")}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-900 font-bold py-3.5 sm:py-4 rounded-xl transition-colors shadow-sm hover:shadow-md text-sm sm:text-base"
              >
                Proceed to Checkout
              </button>

              {/* Trust Badges */}
              <div className="mt-5 sm:mt-6 pt-5 sm:pt-6 border-t border-gray-200 space-y-2 text-xs sm:text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                  <span>100% Quality Inspected</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                  <span>Fair Trade Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full shrink-0"></div>
                  <span>Supporting Rural Artisans</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;

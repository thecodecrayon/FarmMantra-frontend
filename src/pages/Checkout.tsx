import { useState } from "react";
import {
  ArrowLeft,
  MapPin,
  Truck,
  CheckCircle2,
  Loader2,
  ShoppingBag,
  Banknote,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import useCart from "../context/useCart";
import { ENV } from "../constants";

// ── EmailJS config ──────────────────────────────────────────────
// 1. Create a free account at https://www.emailjs.com
// 2. Add an Email Service (Gmail etc.) → copy the Service ID below
// 3. Create an Email Template with these variables in the body:
//    {{order_id}} {{customer_name}} {{customer_email}} {{customer_phone}}
//    {{customer_address}} {{order_items}} {{order_total}} {{payment_method}}
// 4. Copy the Template ID and your Public Key (Account → API Keys) below

// ── Backend API ──────────────────────────────────────────────────
// Add API_BASE_URL to your ENV object in ../constants (e.g. reading
// import.meta.env.VITE_API_BASE_URL), the same way EMAILJS_* is defined there.
// Falls back to localhost:8000 if it isn't set, so this won't break if you
// haven't added it to constants.ts yet.
const API_BASE_URL = (ENV.API_BASE_URL as string) || "http://localhost:8000";

interface ShippingForm {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
}

const initialForm: ShippingForm = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
};

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, addMultipleToCart } = useCart();

  const [form, setForm] = useState<ShippingForm>(initialForm);
  const [errors, setErrors] = useState<Partial<ShippingForm>>({});
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleChange = (field: keyof ShippingForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const validate = (): boolean => {
    const newErrors: Partial<ShippingForm> = {};

    if (!form.fullName.trim()) newErrors.fullName = "Name is required";
    if (!/^\d{10}$/.test(form.phone.trim()))
      newErrors.phone = "Enter a valid 10-digit phone number";
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim()))
      newErrors.email = "Enter a valid email address";
    if (!form.address.trim()) newErrors.address = "Address is required";
    if (!form.city.trim()) newErrors.city = "City is required";
    if (!/^\d{6}$/.test(form.pincode.trim()))
      newErrors.pincode = "Enter a valid 6-digit pincode";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const placeOrder = async () => {
    if (!validate()) return;
    if (cart.length === 0) return;

    setIsPlacingOrder(true);

    const newOrderId = `ORD-${Date.now().toString().slice(-8)}`;

    const orderDetails = {
      orderId: newOrderId,
      placedAt: new Date().toISOString(),
      customer: {
        name: form.fullName.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        address: form.address.trim(),
        city: form.city.trim(),
        pincode: form.pincode.trim(),
      },
      items: cart.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
        subtotal: item.price * item.quantity,
      })),
      subtotal,
      shipping,
      total,
      paymentMethod: "COD",
      status: "pending",
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/v1/orders`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderDetails),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        throw new Error(errorBody?.msg || "Failed to save the order.");
      }

      // ── Email notification via EmailJS ────────────────────────
      await emailjs.send(
        ENV.EMAILJS_SERVICE_ID as string,
        ENV.EMAILJS_TEMPLATE_ID as string,
        {
          order_id: orderDetails.orderId,
          company_name: "Baghpat Bloom",
          customer_name: orderDetails.customer.name,
          customer_email: orderDetails.customer.email,
          customer_phone: orderDetails.customer.phone,
          customer_address: `${orderDetails.customer.address}, ${orderDetails.customer.city} - ${orderDetails.customer.pincode}`,
          order_items: orderDetails.items
            .map((i) => `${i.title} x${i.quantity} - ₹${i.subtotal}`)
            .join("\n"),
          order_total: `₹${orderDetails.total}`,
          payment_method: "Cash on Delivery",
        },
        ENV.EMAILJS_PUBLIC_KEY as string,
      );

      setOrderId(newOrderId);
      setOrderPlaced(true);
      addMultipleToCart([]); // clear the cart
    } catch (err) {
      console.error("Failed to place order:", err);
      alert("Something went wrong while placing your order. Please try again.");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  /* ── Success screen ── */
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Order Placed!
          </h2>
          <p className="text-gray-600 mb-1">
            Your order{" "}
            <span className="font-semibold text-gray-900">{orderId}</span> has
            been confirmed.
          </p>
          <p className="text-gray-600 mb-6">
            Pay ₹{total} on delivery. A confirmation email is on its way to you.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-colors"
          >
            <ArrowLeft size={18} /> Back to Shop
          </button>
        </div>
      </div>
    );
  }

  /* ── Empty cart guard ── */
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <ShoppingBag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-gray-600 mb-6">
            Add some items to your cart before checking out.
          </p>
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-colors"
          >
            <ArrowLeft size={18} /> Back to Shop
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <button
            className="flex items-center gap-2 text-gray-900 hover:text-gray-400 transition-colors"
            onClick={() => navigate("/cart")}
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back to Cart</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Shipping form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <MapPin size={20} className="text-gray-700" />
                <h2 className="text-xl font-bold text-gray-900">
                  Shipping Details
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={form.fullName}
                    onChange={(e) => handleChange("fullName", e.target.value)}
                    placeholder="Your full name"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  {errors.fullName && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="10-digit mobile number"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  {errors.phone && (
                    <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Address
                  </label>
                  <input
                    type="text"
                    value={form.address}
                    onChange={(e) => handleChange("address", e.target.value)}
                    placeholder="House no., street, locality"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  {errors.address && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.address}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    City
                  </label>
                  <input
                    type="text"
                    value={form.city}
                    onChange={(e) => handleChange("city", e.target.value)}
                    placeholder="City"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  {errors.city && (
                    <p className="text-xs text-red-500 mt-1">{errors.city}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Pincode
                  </label>
                  <input
                    type="text"
                    value={form.pincode}
                    onChange={(e) => handleChange("pincode", e.target.value)}
                    placeholder="6-digit pincode"
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent"
                  />
                  {errors.pincode && (
                    <p className="text-xs text-red-500 mt-1">
                      {errors.pincode}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Payment method */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Payment Method
              </h2>
              <div className="flex items-center gap-3 bg-yellow-50 border border-yellow-300 rounded-xl p-4">
                <Banknote size={22} className="text-yellow-700 shrink-0" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">
                    Cash on Delivery
                  </p>
                  <p className="text-xs text-gray-600">
                    Pay in cash when your order arrives at your doorstep.
                  </p>
                </div>
              </div>
            </div>

            {/* Order items */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Order Items ({cart.length})
              </h2>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4 items-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-gray-900 text-sm truncate">
                        {item.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity}
                      </p>
                    </div>
                    <p className="font-bold text-gray-900 text-sm">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 sticky top-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6 pb-6 border-b border-gray-200">
                <div className="flex justify-between text-gray-700">
                  <span>Subtotal</span>
                  <span className="font-semibold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-gray-700">
                  <span className="flex items-center gap-1.5">
                    <Truck size={14} /> Shipping
                  </span>
                  <span className="font-semibold">
                    {shipping === 0 ? (
                      <span className="text-green-600">Free</span>
                    ) : (
                      `₹${shipping}`
                    )}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-bold text-gray-900">Total</span>
                <span className="text-3xl font-bold text-gray-900">
                  ₹{total}
                </span>
              </div>

              <button
                onClick={placeOrder}
                disabled={isPlacingOrder}
                className="w-full bg-yellow-400 hover:bg-yellow-500 disabled:opacity-60 disabled:cursor-not-allowed text-gray-900 font-bold py-4 rounded-xl transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
              >
                {isPlacingOrder ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Placing Order...
                  </>
                ) : (
                  "Place Order (Pay on Delivery)"
                )}
              </button>

              <p className="text-xs text-gray-500 text-center mt-3">
                By placing this order you agree to pay ₹{total} in cash upon
                delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

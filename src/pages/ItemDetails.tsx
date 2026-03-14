import { useState } from "react";
import {
  ArrowLeft,
  Heart,
  Minus,
  Plus,
  Shield,
  Truck,
  RotateCcw,
  Tag,
  PackageX,
  Loader2,
  MessageCircle,
  Bell,
  MapPin,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchItemDetails from "../hooks/useFetchItemDetails";
import InterestPopup from "../popups/Interest";
import InquiryPopup from "../popups/Inquirey";

function formatToK(num: number) {
  if (num < 1000) return num.toString();
  const k = Math.floor(num / 1000);
  return `${k}K+`;
}

const ItemDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const { product, isLoading, error } = useFetchItemDetails(Number(params.id));
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [showInquiryPopup, setShowInquiryPopup] = useState(false);
  const [showInterestPopup, setShowInterestPopup] = useState(false);

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity < 1) return;
    setQuantity(newQuantity);
  };

  const navigateToHome = () => navigate("/");

  /* ── Loading ── */
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2
            size={48}
            className="animate-spin text-yellow-400 mx-auto mb-4"
          />
          <p className="text-gray-600 font-medium">
            Loading product details...
          </p>
        </div>
      </div>
    );
  }

  /* ── Error ── */
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <PackageX size={40} className="text-red-500" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">
            We couldn't load the product details. Please try again later.
          </p>
          <button
            onClick={navigateToHome}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-colors"
          >
            <ArrowLeft size={18} /> Back to Shop
          </button>
        </div>
      </div>
    );
  }

  /* ── Not found ── */
  if (product === null) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <PackageX size={40} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            Sorry, the product you're looking for doesn't exist or may have been
            removed.
          </p>
          <button
            onClick={navigateToHome}
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-6 rounded-xl transition-colors"
          >
            <ArrowLeft size={18} /> Back to Shop
          </button>
        </div>
      </div>
    );
  }

  const discountedPrice =
    product.price - (product.discountInPercent / 100) * product.price;

  return (
    <div className="min-h-screen bg-gray-50">
      <InquiryPopup
        isOpen={showInquiryPopup}
        onClose={() => setShowInquiryPopup(false)}
      />
      <InterestPopup
        isOpen={showInterestPopup}
        onClose={() => setShowInterestPopup(false)}
        productName={product.name}
        productId={product.id}
      />

      {/* ── Sticky top bar ── */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <button
            className="flex items-center gap-2 text-gray-900 hover:text-gray-400 transition-colors"
            onClick={navigateToHome}
          >
            <ArrowLeft size={18} />
            <span className="font-medium text-sm sm:text-base">
              Back to Shop
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* ── Image Gallery ── */}
          <div className="space-y-3 sm:space-y-4">
            {/* Main image */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 relative group">
              <div className="aspect-square sm:aspect-[4/3] lg:aspect-square">
                <img
                  src={selectedImage || product.images?.[0]}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Wishlist button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  size={18}
                  className={
                    isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
                  }
                />
              </button>

              {/* Discount badge */}
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-yellow-400 text-gray-900 font-bold px-2.5 py-1 rounded-full text-xs sm:text-sm">
                {product.discountInPercent}% OFF
              </div>
            </div>

            {/* Thumbnail strip */}
            <div className="grid grid-cols-4 sm:grid-cols-3 gap-2 sm:gap-4">
              {product.images?.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`rounded-xl overflow-hidden border-2 transition-all aspect-square ${
                    selectedImage === image
                      ? "border-yellow-400 ring-2 ring-yellow-200"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ── Product Info ── */}
          <div className="space-y-5 sm:space-y-6">
            {/* Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1.5 sm:mb-2">
                {product.name}
              </h1>
              <p className="text-base sm:text-lg text-gray-600">
                {product.subtitle}
              </p>
            </div>

            {/* Price card */}
            <div className="bg-gray-100 rounded-2xl p-4 sm:p-6">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl sm:text-4xl font-bold text-gray-900">
                  ₹{discountedPrice}
                </span>
                <span className="text-lg sm:text-xl text-gray-500 line-through">
                  ₹{product.price}
                </span>
                <span className="ml-auto text-sm font-semibold text-green-600 bg-green-50 px-2.5 py-1 rounded-full">
                  Save ₹{product.price - discountedPrice}
                </span>
              </div>
            </div>

            {/* Quantity + CTA */}
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium text-sm sm:text-base">
                  Quantity:
                </span>
                <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(quantity - 1)}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 sm:w-16 text-center font-bold text-base sm:text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(quantity + 1)}
                    className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={() => setShowInterestPopup(true)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3.5 sm:py-4 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Bell size={18} />
                  I'm Interested
                </button>
                <button
                  onClick={() => setShowInquiryPopup(true)}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl transition-all shadow-sm hover:shadow-md active:scale-95 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <MessageCircle size={18} />
                  <span className="hidden sm:inline">Inquiry</span>
                </button>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-4 sm:pt-6 border-t border-gray-200">
              {[
                {
                  icon: Truck,
                  title: "Free Shipping",
                  sub: "On orders over ₹500",
                },
                {
                  icon: RotateCcw,
                  title: "Easy Returns",
                  sub: "30-day guarantee",
                },
                { icon: Shield, title: "Quality Check", sub: "100% inspected" },
              ].map(({ icon: Icon, title, sub }) => (
                <div key={title} className="text-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-1.5 sm:mb-2">
                    <Icon className="text-gray-700" size={18} />
                  </div>
                  <p className="text-[10px] sm:text-xs font-medium text-gray-700 leading-tight">
                    {title}
                  </p>
                  <p className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                    {sub}
                  </p>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-4 sm:p-6 border border-gray-200">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                About this product
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4 text-sm sm:text-base">
                {product.description}
              </p>
              <h3 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">
                Key Features:
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {product.keyFeatures?.map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700 text-sm sm:text-base"
                  >
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Artisan Story card ── */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-4 sm:p-6 border border-yellow-200">
              {/* Artisan header */}
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                  <Tag className="text-gray-900" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-gray-900 text-base sm:text-lg mb-0.5 leading-tight">
                    Meet the Artisan: {product.Artisan?.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 flex items-center gap-1">
                    <MapPin size={12} className="shrink-0" />
                    {product.Artisan?.location}
                  </p>
                </div>
              </div>

              {/* Artisan image */}
              <div className="bg-white rounded-xl overflow-hidden mb-4 border border-yellow-200 aspect-video">
                <img
                  src={product.Artisan?.image}
                  alt="Artisan at work"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Artisan text */}
              <div className="space-y-2 mb-4">
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium italic">
                  "{product.Artisan?.tagline}"
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {product.Artisan?.description}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                {[
                  {
                    value: product.Artisan?.numberOfArtisans,
                    label: "Artisans",
                  },
                  {
                    value: `${product.Artisan?.yearsActive}+`,
                    label: "Years Active",
                  },
                  {
                    value: formatToK(product.Artisan?.productsSold),
                    label: "Products Sold",
                  },
                ].map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-white rounded-lg p-2.5 sm:p-3 text-center border border-yellow-200"
                  >
                    <p className="text-xl sm:text-2xl font-bold text-gray-900">
                      {value}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-600 leading-tight">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Impact points */}
              <div className="bg-white rounded-lg p-3 sm:p-4 mb-4 border border-yellow-200">
                <h4 className="font-bold text-gray-900 mb-2 text-xs sm:text-sm">
                  Your Purchase Impact:
                </h4>
                <ul className="space-y-1.5 sm:space-y-2">
                  {product.Artisan?.impactPoints?.map(
                    (feature: string, idx: number) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-gray-700"
                      >
                        <span className="text-green-600 mt-0.5 font-bold shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 border-t border-yellow-200">
                {product.Artisan?.badges?.map((badge: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-white text-[10px] sm:text-xs font-semibold text-gray-900 px-2.5 sm:px-3 py-1 rounded-full border border-yellow-300"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;

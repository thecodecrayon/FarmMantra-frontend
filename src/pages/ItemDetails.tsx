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

  const navigateToHome = () => {
    navigate("/");
  };

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
            <ArrowLeft size={18} />
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

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
            <ArrowLeft size={18} />
            Back to Shop
          </button>
        </div>
      </div>
    );
  }

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

      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              className="flex items-center gap-2 text-gray-900 transition-colors hover:text-gray-400"
              onClick={navigateToHome}
            >
              <ArrowLeft size={20} />
              <span className="font-medium">Back to Shop</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 aspect-square relative group">
              <img
                src={selectedImage || product.images?.[0]}
                alt={product?.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
              >
                <Heart
                  size={20}
                  className={
                    isWishlisted ? "fill-red-500 text-red-500" : "text-gray-400"
                  }
                />
              </button>
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full text-sm">
                {product.discountInPercent}% OFF
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
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

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 mb-4">{product.subtitle}</p>
            </div>

            {/* Price */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-4xl font-bold text-gray-900">
                  ₹
                  {product.price -
                    (product.discountInPercent / 100) * product.price}
                </span>
                <span className="text-xl text-gray-500 line-through">
                  ₹{product.price}
                </span>
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-gray-700 font-medium">Quantity:</span>
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(quantity - 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="w-16 text-center font-bold text-lg">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(quantity + 1)}
                    className="w-10 h-10 flex items-center justify-center hover:bg-white rounded-md transition-colors"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>

              {/* New Buttons: Inquiry & Interested */}
              <div className="flex gap-3">
                <button
                  onClick={() => setShowInterestPopup(true)}
                  className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-xl transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                >
                  <Bell size={20} />
                  I'm Interested
                </button>
                <button
                  onClick={() => setShowInquiryPopup(true)}
                  className="bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-6 rounded-xl transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  Inquiry
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Truck className="text-gray-700" size={20} />
                </div>
                <p className="text-xs font-medium text-gray-700">
                  Free Shipping
                </p>
                <p className="text-xs text-gray-500">On orders over ₹500</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <RotateCcw className="text-gray-700" size={20} />
                </div>
                <p className="text-xs font-medium text-gray-700">
                  Easy Returns
                </p>
                <p className="text-xs text-gray-500">30-day guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Shield className="text-gray-700" size={20} />
                </div>
                <p className="text-xs font-medium text-gray-700">
                  Quality Check
                </p>
                <p className="text-xs text-gray-500">100% inspected</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl p-6 border border-gray-200">
              <h2 className="text-xl font-bold text-gray-900 mb-3">
                About this product
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {product.description}
              </p>
              <h3 className="font-bold text-gray-900 mb-2">Key Features:</h3>
              <ul className="space-y-2">
                {product.keyFeatures?.map((feature: string, index: number) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Artisan Story */}
            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-6 border border-yellow-200">
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shrink-0">
                  <Tag className="text-gray-900" size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    Meet the Artisan: {product.Artisan?.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 flex items-center gap-1">
                    <span className="text-base">📍</span>{" "}
                    {product.Artisan?.location}
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl overflow-hidden mb-4 border border-yellow-200">
                <img
                  src={product.Artisan?.image}
                  alt="Artisan at work"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-3 mb-4">
                <p className="text-sm text-gray-700 leading-relaxed">
                  {product.Artisan?.tagline}
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {product.Artisan?.description}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-white rounded-lg p-3 text-center border border-yellow-200">
                  <p className="text-2xl font-bold text-gray-900">
                    {product.Artisan?.numberOfArtisans}
                  </p>
                  <p className="text-xs text-gray-600">Artisans</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-yellow-200">
                  <p className="text-2xl font-bold text-gray-900">
                    {product.Artisan?.yearsActive}+
                  </p>
                  <p className="text-xs text-gray-600">Years Active</p>
                </div>
                <div className="bg-white rounded-lg p-3 text-center border border-yellow-200">
                  <p className="text-2xl font-bold text-gray-900">
                    {formatToK(product.Artisan?.productsSold)}
                  </p>
                  <p className="text-xs text-gray-600">Products Sold</p>
                </div>
              </div>

              <div className="bg-white rounded-lg p-4 mb-4 border border-yellow-200">
                <h4 className="font-bold text-gray-900 mb-2 text-sm">
                  Your Purchase Impact:
                </h4>
                <ul className="space-y-2 text-xs text-gray-700">
                  {product.Artisan?.impactPoints?.map(
                    (feature: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-green-600 mt-0.5">✓</span>
                        <span>{feature}</span>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 pt-3 border-t border-yellow-200">
                {product.Artisan?.badges?.map((badge: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-white text-xs font-semibold text-gray-900 px-3 py-1 rounded-full border border-yellow-300"
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

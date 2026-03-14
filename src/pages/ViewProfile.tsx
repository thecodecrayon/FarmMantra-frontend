import React, { useState, useEffect } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  Hash,
  Edit3,
  ArrowLeft,
  Package,
  Shield,
  Copy,
  Check,
} from "lucide-react";

interface ProfileData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

const ViewProfile: React.FC = () => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  });

  useEffect(() => {
    // In real app, fetch from API
    const existingData = localStorage.getItem("userProfile");
    if (existingData) {
      setProfileData(JSON.parse(existingData));
    } else {
      // Demo data for preview
      setProfileData({
        firstName: "Priya",
        lastName: "Sharma",
        phone: "9876543210",
        email: "priya.sharma@email.com",
        address: "42, Sunrise Apartments, MG Road",
        city: "Mumbai",
        state: "Maharashtra",
        postalCode: "400001",
        country: "India",
      });
    }
  }, []);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleEditProfile = () => {
    // Navigate to edit profile page
    // In real app: navigate("/edit-profile")
    console.log("Navigate to edit profile");
  };

  const getFullAddress = () => {
    const parts = [
      profileData.address,
      profileData.city,
      profileData.state,
      profileData.postalCode,
      profileData.country,
    ].filter(Boolean);
    return parts.join(", ");
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <button className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-6 group">
            <ArrowLeft
              size={20}
              className="group-hover:-translate-x-1 transition-transform"
            />
            <span className="font-medium">Back to Shop</span>
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                My Profile
              </h1>
              <p className="text-gray-600">
                Your personal information and delivery address
              </p>
            </div>

            <button
              onClick={handleEditProfile}
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Edit3 size={18} />
              <span>Edit Profile</span>
            </button>
          </div>
        </div>

        {/* Main Profile Card */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          {/* Profile Header */}
          <div className="bg-yellow-400 px-8 py-8">
            <div className="flex items-center gap-5">
              <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                {profileData.firstName ? (
                  <span className="text-3xl font-bold text-gray-900">
                    {profileData.firstName[0]}
                    {profileData.lastName?.[0] || ""}
                  </span>
                ) : (
                  <User size={36} className="text-gray-400" />
                )}
              </div>
              <div className="text-gray-900">
                <h2 className="text-2xl font-bold">
                  {profileData.firstName && profileData.lastName
                    ? `${profileData.firstName} ${profileData.lastName}`
                    : "Your Name"}
                </h2>
                <p className="text-gray-800 flex items-center gap-2 mt-1">
                  <Shield size={16} />
                  <span>Verified Customer</span>
                </p>
              </div>
            </div>
          </div>

          {/* Profile Details */}
          <div className="p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User size={20} className="text-yellow-500" />
                Personal Information
              </h3>

              <div className="space-y-4">
                {/* Name */}
                <InfoRow
                  icon={<User size={18} />}
                  label="Full Name"
                  value={`${profileData.firstName} ${profileData.lastName}`}
                  onCopy={handleCopy}
                  copiedField={copiedField}
                  fieldKey="name"
                />

                {/* Phone */}
                <InfoRow
                  icon={<Phone size={18} />}
                  label="Phone Number"
                  value={profileData.phone ? `+91 ${profileData.phone}` : ""}
                  onCopy={handleCopy}
                  copiedField={copiedField}
                  fieldKey="phone"
                />

                {/* Email */}
                <InfoRow
                  icon={<Mail size={18} />}
                  label="Email Address"
                  value={profileData.email}
                  onCopy={handleCopy}
                  copiedField={copiedField}
                  fieldKey="email"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-100 my-6"></div>

            {/* Delivery Address */}
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package size={20} className="text-yellow-500" />
                Delivery Address
              </h3>

              <div className="space-y-4">
                {/* Street Address */}
                <InfoRow
                  icon={<MapPin size={18} />}
                  label="Street Address"
                  value={profileData.address}
                  onCopy={handleCopy}
                  copiedField={copiedField}
                  fieldKey="address"
                />

                {/* City & State */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoRow
                    icon={<Building2 size={18} />}
                    label="City"
                    value={profileData.city}
                    onCopy={handleCopy}
                    copiedField={copiedField}
                    fieldKey="city"
                    compact
                  />
                  <InfoRow
                    icon={<Building2 size={18} />}
                    label="State"
                    value={profileData.state}
                    onCopy={handleCopy}
                    copiedField={copiedField}
                    fieldKey="state"
                    compact
                  />
                </div>

                {/* Postal Code & Country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InfoRow
                    icon={<Hash size={18} />}
                    label="Postal Code"
                    value={profileData.postalCode}
                    onCopy={handleCopy}
                    copiedField={copiedField}
                    fieldKey="postalCode"
                    compact
                  />
                  <InfoRow
                    icon={<MapPin size={18} />}
                    label="Country"
                    value={profileData.country}
                    onCopy={handleCopy}
                    copiedField={copiedField}
                    fieldKey="country"
                    compact
                  />
                </div>
              </div>

              {/* Full Address Card */}
              <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">
                      Complete Delivery Address
                    </p>
                    <p className="text-gray-600">{getFullAddress()}</p>
                  </div>
                  <button
                    onClick={() => handleCopy(getFullAddress(), "fullAddress")}
                    className="flex-shrink-0 p-2 hover:bg-yellow-100 rounded-lg transition-colors"
                    title="Copy full address"
                  >
                    {copiedField === "fullAddress" ? (
                      <Check size={18} className="text-green-500" />
                    ) : (
                      <Copy size={18} className="text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Shield size={16} />
          <span>Your information is encrypted and secure</span>
        </div>
      </div>
    </div>
  );
};

// Info Row Component
interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  onCopy: (text: string, field: string) => void;
  copiedField: string | null;
  fieldKey: string;
  compact?: boolean;
}

const InfoRow: React.FC<InfoRowProps> = ({
  icon,
  label,
  value,
  onCopy,
  copiedField,
  fieldKey,
  compact,
}) => {
  if (!value) {
    return (
      <div className={compact ? "" : "flex items-center gap-4"}>
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
            <span className="text-gray-400">{icon}</span>
            {label}
          </p>
          <p className="text-gray-400 italic">Not provided</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`group ${compact ? "" : "flex items-center gap-4"}`}>
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-500 mb-1 flex items-center gap-2">
          <span className="text-gray-400">{icon}</span>
          {label}
        </p>
        <div className="flex items-center gap-2">
          <p className="text-gray-900 font-medium">{value}</p>
          <button
            onClick={() => onCopy(value, fieldKey)}
            className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-100 rounded transition-all"
            title="Copy to clipboard"
          >
            {copiedField === fieldKey ? (
              <Check size={14} className="text-green-500" />
            ) : (
              <Copy size={14} className="text-gray-400" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;

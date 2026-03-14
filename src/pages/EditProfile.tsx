import React, { useState, useEffect } from "react";
import {
  User,
  Phone,
  Mail,
  MapPin,
  Building2,
  Hash,
  Edit3,
  Check,
  X,
  Save,
  ArrowLeft,
  Package,
  Shield,
  Sparkles,
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

interface FieldConfig {
  key: keyof ProfileData;
  label: string;
  icon: React.ReactNode;
  placeholder: string;
  type?: string;
  required?: boolean;
}

const EditProfile: React.FC = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isNewUser, setIsNewUser] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof ProfileData, string>>
  >({});

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

  const [editData, setEditData] = useState<ProfileData>(profileData);

  // Simulate checking if user has filled profile
  useEffect(() => {
    // In real app, fetch from API
    const existingData = localStorage.getItem("userProfile");
    if (existingData) {
      const parsed = JSON.parse(existingData);
      setProfileData(parsed);
      setEditData(parsed);
      setIsNewUser(false);
    } else {
      setIsNewUser(true);
      setIsEditing(true);
    }
  }, []);

  const fieldConfigs: FieldConfig[] = [
    {
      key: "firstName",
      label: "First Name",
      icon: <User size={18} />,
      placeholder: "Enter your first name",
      required: true,
    },
    {
      key: "lastName",
      label: "Last Name",
      icon: <User size={18} />,
      placeholder: "Enter your last name",
      required: true,
    },
    {
      key: "phone",
      label: "Phone Number",
      icon: <Phone size={18} />,
      placeholder: "10-digit mobile number",
      type: "tel",
      required: true,
    },
    {
      key: "email",
      label: "Email Address",
      icon: <Mail size={18} />,
      placeholder: "your@email.com",
      type: "email",
      required: true,
    },
    {
      key: "address",
      label: "Street Address",
      icon: <MapPin size={18} />,
      placeholder: "House/Flat No., Street, Landmark",
      required: true,
    },
    {
      key: "city",
      label: "City",
      icon: <Building2 size={18} />,
      placeholder: "Enter your city",
      required: true,
    },
    {
      key: "state",
      label: "State",
      icon: <Building2 size={18} />,
      placeholder: "Enter your state",
      required: true,
    },
    {
      key: "postalCode",
      label: "Postal Code",
      icon: <Hash size={18} />,
      placeholder: "6-digit PIN code",
      required: true,
    },
    {
      key: "country",
      label: "Country",
      icon: <MapPin size={18} />,
      placeholder: "Enter your country",
      required: true,
    },
  ];

  const validateField = (key: keyof ProfileData, value: string): string => {
    if (!value.trim() && fieldConfigs.find((f) => f.key === key)?.required) {
      return "This field is required";
    }

    switch (key) {
      case "phone":
        if (value && !/^\d{10}$/.test(value.replace(/\D/g, ""))) {
          return "Please enter a valid 10-digit phone number";
        }
        break;
      case "email":
        if (value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address";
        }
        break;
      case "postalCode":
        if (value && !/^\d{5,6}$/.test(value.replace(/\D/g, ""))) {
          return "Please enter a valid postal code";
        }
        break;
    }
    return "";
  };

  const handleInputChange = (key: keyof ProfileData, value: string) => {
    let processedValue = value;

    if (key === "phone") {
      processedValue = value.replace(/\D/g, "").slice(0, 10);
    } else if (key === "postalCode") {
      processedValue = value.replace(/\D/g, "").slice(0, 6);
    }

    setEditData((prev) => ({ ...prev, [key]: processedValue }));

    // Clear error when user starts typing
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const handleSave = () => {
    // Validate all fields
    const newErrors: Partial<Record<keyof ProfileData, string>> = {};
    let hasErrors = false;

    fieldConfigs.forEach((field) => {
      const error = validateField(field.key, editData[field.key]);
      if (error) {
        newErrors[field.key] = error;
        hasErrors = true;
      }
    });

    if (hasErrors) {
      setErrors(newErrors);
      return;
    }

    // Save to localStorage (in real app, save to API)
    localStorage.setItem("userProfile", JSON.stringify(editData));
    setProfileData(editData);
    setIsEditing(false);
    setIsNewUser(false);
    setSaveSuccess(true);

    setTimeout(() => setSaveSuccess(false), 3000);
  };

  const handleCancel = () => {
    if (isNewUser && !profileData.firstName) {
      // Can't cancel if new user hasn't saved yet
      return;
    }
    setEditData(profileData);
    setErrors({});
    setIsEditing(false);
  };

  const getCompletionPercentage = (): number => {
    const filledFields = Object.values(profileData).filter((v) =>
      v.trim()
    ).length;
    return Math.round((filledFields / fieldConfigs.length) * 100);
  };

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Decorative background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 py-8">
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
                {isNewUser ? "Complete Your Profile" : "My Profile"}
              </h1>
              <p className="text-gray-600">
                {isNewUser
                  ? "Add your details for seamless delivery experience"
                  : "Manage your personal information and delivery address"}
              </p>
            </div>

            {!isNewUser && !isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-5 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                <Edit3 size={18} />
                <span>Edit Profile</span>
              </button>
            )}
          </div>
        </div>

        {/* Success Toast */}
        {saveSuccess && (
          <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-4 rounded-xl shadow-2xl flex items-center gap-3 animate-slide-in z-50">
            <div className="bg-white/20 rounded-full p-1">
              <Check size={18} />
            </div>
            <span className="font-medium">Profile saved successfully!</span>
          </div>
        )}

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

          {/* Form Section */}
          <div className="p-8">
            {/* Personal Information */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <User size={20} className="text-yellow-500" />
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {fieldConfigs.slice(0, 4).map((field) => (
                  <FieldItem
                    key={field.key}
                    field={field}
                    value={
                      isEditing ? editData[field.key] : profileData[field.key]
                    }
                    isEditing={isEditing}
                    error={errors[field.key]}
                    onChange={(value) => handleInputChange(field.key, value)}
                  />
                ))}
              </div>
            </div>

            {/* Delivery Address */}
            <div className="mb-8">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Package size={20} className="text-yellow-500" />
                Delivery Address
              </h3>
              <div className="space-y-4">
                {/* Full width address */}
                <FieldItem
                  field={fieldConfigs[4]}
                  value={isEditing ? editData.address : profileData.address}
                  isEditing={isEditing}
                  error={errors.address}
                  onChange={(value) => handleInputChange("address", value)}
                  fullWidth
                />

                {/* Grid for city, state, postal, country */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {fieldConfigs.slice(5).map((field) => (
                    <FieldItem
                      key={field.key}
                      field={field}
                      value={
                        isEditing ? editData[field.key] : profileData[field.key]
                      }
                      isEditing={isEditing}
                      error={errors[field.key]}
                      onChange={(value) => handleInputChange(field.key, value)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="flex gap-4 pt-4 border-t border-gray-100">
                {!isNewUser && (
                  <button
                    onClick={handleCancel}
                    className="flex-1 flex items-center justify-center gap-2 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-4 rounded-xl transition-all duration-300"
                  >
                    <X size={20} />
                    <span>Cancel</span>
                  </button>
                )}
                <button
                  onClick={handleSave}
                  className={`${
                    isNewUser ? "w-full" : "flex-1"
                  } flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl`}
                >
                  <Save size={20} />
                  <span>{isNewUser ? "Save & Continue" : "Save Changes"}</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Security Note */}
        <div className="mt-6 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Shield size={16} />
          <span>Your information is encrypted and secure</span>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

// Field Item Component
interface FieldItemProps {
  field: FieldConfig;
  value: string;
  isEditing: boolean;
  error?: string;
  onChange: (value: string) => void;
  fullWidth?: boolean;
}

const FieldItem: React.FC<FieldItemProps> = ({
  field,
  value,
  isEditing,
  error,
  onChange,
  fullWidth,
}) => {
  return (
    <div className={fullWidth ? "col-span-full" : ""}>
      <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
        <span className="text-gray-400">{field.icon}</span>
        {field.label}
        {field.required && <span className="text-red-400">*</span>}
      </label>

      {isEditing ? (
        <div>
          <input
            type={field.type || "text"}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            className={`w-full px-4 py-3 border-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent ${
              error
                ? "border-red-300 bg-red-50"
                : "border-gray-200 hover:border-gray-300"
            }`}
          />
          {error && (
            <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
              <X size={12} />
              {error}
            </p>
          )}
        </div>
      ) : (
        <div className="px-4 py-3 bg-gray-50 rounded-xl text-gray-700 min-h-[48px] flex items-center">
          {value || <span className="text-gray-400 italic">Not provided</span>}
        </div>
      )}
    </div>
  );
};

export default EditProfile;

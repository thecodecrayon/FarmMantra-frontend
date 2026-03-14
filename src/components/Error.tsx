import React from "react";
import { ArrowLeft, CloudOff } from "lucide-react";

interface ErrorProps {
  message?: string;
  onRetry?: () => void;
}

const Error: React.FC<ErrorProps> = ({
  message = "We're having a little trouble connecting right now.",
  onRetry,
}) => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-white to-gray-100 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 bg-amber-50 rounded-full flex items-center justify-center">
          <CloudOff className="w-8 h-8 text-amber-500" />
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">
          Taking a moment...
        </h3>
        <p className="text-gray-600 mb-6">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
          >
            <ArrowLeft size={18} />
            Go To Homepage
          </button>
        )}
      </div>
    </div>
  );
};

export default Error;

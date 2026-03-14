import { FacebookIcon, TwitterIcon, WhatsappIcon } from "../icons";

const FloatingSocials = () => {
  return (
    <div className="fixed flex top-50 flex-col items-center justify-center shadow-md px-2 py-4 rounded-xl z-10 bg-gray-200">
      {/* WhatsApp */}
      <a
        href="https://wa.me/9756154434" // your number here
        target="_blank"
        rel="noopener noreferrer"
        className="group relative border-b border-gray-400 pb-3"
      >
        <WhatsappIcon size={40} className="text-green-500" />
        <span
          className="absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                         bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition"
        >
          WhatsApp
        </span>
      </a>

      {/* Twitter */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative border-b border-gray-400 pb-3 pt-3"
      >
        <TwitterIcon size={40} className="text-black" />
        <span
          className="absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100
                         bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition"
        >
          Twitter
        </span>
      </a>

      {/* Facebook */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative pt-3"
      >
        <FacebookIcon size={40} className="text-blue-800" />
        <span
          className="absolute left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100
                         bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition"
        >
          Facebook
        </span>
      </a>
    </div>
  );
};

export default FloatingSocials;

import { FacebookIcon, TwitterIcon, WhatsappIcon } from "../icons";

const FloatingSocials = () => {
  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center shadow-md px-1.5 sm:px-2 py-3 sm:py-4 rounded-r-xl z-10 bg-gray-200">
      {/* WhatsApp */}
      <a
        href="https://wa.me/9756154434"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative border-b border-gray-400 pb-2.5 sm:pb-3"
      >
        <WhatsappIcon size={32} className="text-green-500 sm:w-10 sm:h-10" />
        <span
          className="absolute left-10 sm:left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 
                       bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition whitespace-nowrap"
        >
          WhatsApp
        </span>
      </a>

      {/* Twitter */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative border-b border-gray-400 pb-2.5 sm:pb-3 pt-2.5 sm:pt-3"
      >
        <TwitterIcon size={32} className="text-black sm:w-10 sm:h-10" />
        <span
          className="absolute left-10 sm:left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100
                       bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition whitespace-nowrap"
        >
          Twitter
        </span>
      </a>

      {/* Facebook */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative pt-2.5 sm:pt-3"
      >
        <FacebookIcon size={32} className="text-blue-800 sm:w-10 sm:h-10" />
        <span
          className="absolute left-10 sm:left-12 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100
                       bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-lg transition whitespace-nowrap"
        >
          Facebook
        </span>
      </a>
    </div>
  );
};

export default FloatingSocials;

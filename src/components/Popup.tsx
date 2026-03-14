import { useEffect, useState } from "react";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    const checkPopupStatus = () => {
      const lastShown = localStorage.getItem("popupLastShown");
      const today = new Date().toDateString();
      if (lastShown !== today) {
        const showTimer = setTimeout(() => {
          setIsVisible(true);
          localStorage.setItem("popupLastShown", today);
        }, 500);
        return () => clearTimeout(showTimer);
      }
    };
    checkPopupStatus();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const countdownInterval = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(countdownInterval);
          setIsVisible(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(countdownInterval);
  }, [isVisible]);

  const handleClose = () => setIsVisible(false);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/50 backdrop-blur-sm">
      {/* ── MOBILE: bottom sheet ── */}
      <div className="md:hidden w-full bg-white rounded-t-3xl shadow-2xl overflow-hidden animate-slideUp">
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1">
          <div className="w-10 h-1 bg-gray-200 rounded-full" />
        </div>

        {/* Close */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-all z-10"
        >
          <svg
            className="w-3.5 h-3.5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="px-6 pt-2 pb-8 space-y-5">
          {/* Top row: image + identity */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
              <img
                src="https://res.cloudinary.com/dbrffqvic/image/upload/v1770724531/hd-pic-DM_jgrd0i.jpg"
                alt="District Magistrate"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="inline-flex items-center gap-1.5 bg-amber-50 border border-amber-200 text-amber-800 px-2.5 py-1 rounded-md text-[10px] font-semibold mb-1.5">
                <svg
                  className="w-3 h-3 shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                Government Initiative
              </div>
              <p className="text-xs font-bold text-slate-900 leading-tight">
                Smt. Asmita Lal
              </p>
              <p className="text-[11px] text-slate-500">
                District Magistrate, Baghpat
              </p>
            </div>
          </div>

          {/* Headline */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 leading-snug mb-1.5">
              Empowering Rural Artisans
              <span className="block text-gray-500 font-medium text-base">
                & Traditional Craftspeople
              </span>
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Handcrafted products from local artisans, directly to your door.
              Supporting rural livelihoods.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex gap-2">
            {["Local Artisans", "Handcrafted", "Authentic"].map((label) => (
              <div
                key={label}
                className="flex-1 text-center bg-slate-50 border border-slate-100 rounded-xl py-2.5 px-1"
              >
                <p className="text-[11px] font-semibold text-slate-700">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleClose}
            className="w-full bg-slate-800 text-white font-semibold py-3.5 rounded-xl hover:bg-slate-900 active:scale-95 transition-all shadow-md text-sm"
          >
            Explore Products
          </button>

          {/* Countdown */}
          <div className="space-y-1.5">
            <p className="text-[11px] text-gray-400 text-center">
              Closes in {countdown} {countdown === 1 ? "second" : "seconds"}
            </p>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-slate-700 transition-all duration-1000 ease-linear rounded-full"
                style={{ width: `${(countdown / 20) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── DESKTOP: centered modal (original layout) ── */}
      <div className="hidden md:block relative bg-white rounded-xl shadow-2xl w-full max-w-4xl overflow-hidden mx-4 animate-slideUp">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full transition-all"
        >
          <svg
            className="w-4 h-4 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="flex">
          {/* Left image */}
          <div className="relative w-2/5 bg-gradient-to-br from-slate-100 to-slate-200">
            <div className="absolute inset-0 flex items-center justify-center p-6">
              <img
                src="https://res.cloudinary.com/dbrffqvic/image/upload/v1770724531/hd-pic-DM_jgrd0i.jpg"
                alt="District Magistrate Initiative"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
          </div>

          {/* Right content */}
          <div className="w-3/5 p-10 flex flex-col justify-center bg-white">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 px-3 py-1.5 rounded-md text-xs font-medium mb-5 self-start">
              <svg
                className="w-3.5 h-3.5"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              Government Initiative
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-3 leading-tight">
              Empowering Rural Artisans
              <br />
              <span className="text-gray-700">& Traditional Craftspeople</span>
            </h2>

            <p className="text-gray-600 text-base mb-6 leading-relaxed">
              Connecting authentic handcrafted products from local artisans
              directly to customers. Supporting rural livelihoods and preserving
              traditional craftsmanship.
            </p>

            <div className="border-l-4 border-slate-700 bg-slate-50 rounded-r-lg pl-5 pr-5 py-4 mb-6">
              <p className="text-xs text-slate-600 font-semibold mb-1 uppercase tracking-wide">
                An Initiative By
              </p>
              <p className="text-lg font-bold text-slate-900">
                Smt. Asmita Lal
              </p>
              <p className="text-sm text-slate-600">
                District Magistrate, Baghpat
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 mb-6">
              {[
                {
                  label: "Local Artisans",
                  path: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
                },
                {
                  label: "Handcrafted",
                  path: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
                },
                {
                  label: "Authentic",
                  path: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
                },
              ].map(({ label, path }) => (
                <div
                  key={label}
                  className="text-center p-3 bg-gray-50 rounded-lg"
                >
                  <div className="w-10 h-10 bg-slate-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <svg
                      className="w-5 h-5 text-slate-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={path}
                      />
                    </svg>
                  </div>
                  <p className="text-xs font-semibold text-gray-700">{label}</p>
                </div>
              ))}
            </div>

            <button
              onClick={handleClose}
              className="w-full bg-slate-800 text-white font-semibold py-3.5 rounded-lg hover:bg-slate-900 transition-all shadow-md"
            >
              Explore Products
            </button>

            <div className="flex items-center justify-center mt-3">
              <p className="text-xs text-gray-400">
                Closes automatically in {countdown}{" "}
                {countdown === 1 ? "second" : "seconds"}
              </p>
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200">
          <div
            className="h-full bg-slate-700 transition-all duration-1000 ease-linear"
            style={{ width: `${(countdown / 20) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default Popup;

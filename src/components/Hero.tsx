const Hero = () => {
  return (
    <div className="min-h-[320px] md:h-120 bg-linear-to-b from-white via-white to-gray-100 flex flex-col md:flex-row">
      {/* Text Side — full width on mobile, half on desktop */}
      <div className="w-full md:flex-1 px-6 sm:px-10 md:pl-25 pt-14 pb-10 md:pt-0 md:pb-0 flex items-center justify-start">
        <div className="flex flex-col items-start justify-center gap-3 md:gap-4">
          <p className="text-base sm:text-lg md:text-[24px] font-medium text-gray-600">
            #Handcrafted with Heart
          </p>
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="font-bold text-3xl sm:text-4xl md:text-6xl tracking-[-1px]">
              Woven by Hands,
            </h3>
            <h3 className="font-bold text-3xl sm:text-4xl md:text-6xl tracking-[-1px]">
              Rooted in Tradition
            </h3>
          </div>
          <p className="text-base sm:text-lg md:text-[24px] font-medium text-gray-600">
            Celebrating India's Rural Artistry
          </p>
        </div>
      </div>

      {/* Image Side — hidden on mobile, visible on md+ */}
      <div className="hidden md:block md:flex-1 relative overflow-hidden">
        <img
          src="https://res.cloudinary.com/dqt5zwhrh/image/upload/v1784476052/Gemini_Generated_Image_il448uil448uil44_wx6agw.png"
          className="w-64 h-64 rounded-2xl shadow-xl absolute top-34 right-32 rotate-4 z-20"
        />
        <img
          src="https://res.cloudinary.com/dqt5zwhrh/image/upload/v1784476039/Gemini_Generated_Image_bcl0c0bcl0c0bcl0_xs0bfp.png"
          className="w-56 h-56 rounded-2xl shadow-2xl absolute top-10 right-76 -rotate-5 z-30"
        />
        <img
          src="https://res.cloudinary.com/dqt5zwhrh/image/upload/v1784476061/Gemini_Generated_Image_umh1q4umh1q4umh1_gesgok.png"
          className="w-56 h-56 rounded-2xl shadow-xl absolute bottom-14 right-90 rotate-3 z-10"
        />
      </div>
    </div>
  );
};

export default Hero;

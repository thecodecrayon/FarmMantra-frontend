const Hero = () => {
  return (
    <div className="h-120 bg-linear-to-b from-white via-white to-gray-100 flex">
      <div className="flex-1 pl-25 flex items-center justify-start">
        <div className="flex flex-col items-start justify-center gap-4">
          <p className="text-[24px] font-medium text-gray-600">
            #Big Mahotsav Sale
          </p>
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-6xl tracking-[-1px]">
              Limited Time Offer!
            </h3>
            <h3 className="font-bold text-6xl tracking-[-1px]">
              Up to <span className="italic">50%</span> OFF!
            </h3>
          </div>
          <p className="text-[24px] font-medium text-gray-600">
            Decorate Your Home Everyday
          </p>
        </div>
      </div>

      <div className="flex-1 relative">
        <img
          src="https://chitrashila.com/cdn/shop/files/20250703_1406_Antique_Copper_Diyas_remix_01jz7pt51kepr92xkq3mkqbvfs_1.png?v=1760295921&width=2048"
          className="w-64 h-64 rounded-2xl shadow-xl absolute top-34 right-28 rotate-1 z-20"
        />

        <img
          src="https://m.media-amazon.com/images/I/61wAyNU8oZL._AC_UF894,1000_QL80_.jpg"
          className="w-56 h-56 rounded-2xl shadow-2xl absolute top-10 right-56 -rotate-5 z-30"
        />

        <img
          src="https://imgcdn.floweraura.com/handmade-jazzy-terracotta-diyas-9834977gf-A_0.jpg"
          className="w-56 h-56 rounded-2xl shadow-xl absolute bottom-12 right-80 rotate-3 z-10"
        />
      </div>
    </div>
  );
};

export default Hero;

import { Sparkles, HandHeart, Flame, Sprout, Heart, Home } from "lucide-react";

export default function TextSection() {
  const impactCards = [
    {
      icon: HandHeart,
      gradient: "from-orange-400 to-rose-400",
      title: "Your Purchase = Someone's Monthly Income",
      description:
        "Direct support to rural artisans who earn fair wages. No middlemen. No exploitation. Just honest work meeting genuine appreciation. When you buy handloom, you're not just getting fabric, you're weaving dignity into someone's life.",
    },
    {
      icon: Sparkles,
      gradient: "from-rose-400 to-pink-400",
      title: "Authenticity You Can Feel",
      description:
        "No machines. No factories. Just skilled hands, patient hearts, and timeless techniques. The slight imperfections? That's the signature of human touch. That's what makes it real. That's what makes it yours.",
    },
    {
      icon: Flame,
      gradient: "from-amber-400 to-orange-400",
      title: "Keeping Ancient Flames Burning",
      description:
        "Each diya shaped by ancestral knowledge. Handloom patterns passed down generations. Agarbattis with centuries-old fragrance recipes. These aren't products, they're living traditions that refuse to fade into the noise of mass production.",
    },
    {
      icon: Sprout,
      gradient: "from-green-400 to-emerald-400",
      title: "From Soil to Soul",
      description:
        "Fresh vegetables from farmers who know every inch of their land. Organic groceries grown without chemicals, picked at dawn. When you choose farm-fresh, you're choosing health for your family and hope for farming communities.",
    },
    {
      icon: Heart,
      gradient: "from-pink-400 to-rose-400",
      title: "Every Purchase Plants Seeds",
      description:
        "A widow in Bihar now runs her own incense business. A young weaver bought a loom instead of leaving his village. Three farming families sent daughters to college. Your cart isn't just items, it's dreams taking root.",
    },
    {
      icon: Home,
      gradient: "from-violet-400 to-purple-400",
      title: "Quality That Honors Both Ends",
      description:
        "Fair prices for makers. Fair value for you. Handpicked items that pass our quality promise. From the artisan's hands to your home, every step treated with care, respect, and gratitude.",
    },
  ];

  return (
    <section className="relative py-15 overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute inset-0 bg-gray-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(251,146,60,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(251,113,133,0.1),transparent_50%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Emotional Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-orange-100">
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-900">
              Why Choose Us?
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            More Than Just
            <span className="block text-yellow-500">Shopping</span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            You're helping Radha, a mother of two, send her children to school.
            You're keeping 400-year-old weaving traditions alive. You're
            creating hope.
          </p>
        </div>

        {/* Impact Cards - 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {impactCards.map((card, index) => {
            // const Icon = card.icon;
            return (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-orange-100/50 hover:border-orange-200 transition-all duration-500 hover:shadow-2xl hover:shadow-orange-100/50 flex flex-col"
              >
                {/* <div className="shrink-0 mb-6">
                  <div
                    className={`w-16 h-16 bg-linear-to-br ${card.gradient} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div> */}
                <p className="font-bold text-5xl py-6 bg-linear-to-r from-orange-500 to-red-600 text-transparent bg-clip-text">
                  {index + 1}.
                </p>

                <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {card.title}
                </h3>

                <p className="text-gray-600 leading-relaxed flex-1 italic">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Emotional Close */}
        <div className="text-center mt-16">
          <div className="inline-block px-8 pt-8 md:px-8 md:pt-8 text-gray-800 max-w-3xl">
            <p className="text-2xl md:text-3xl font-bold mb">
              "When you choose us, we all rise together."
            </p>
            <p className="text-gray-800 text-lg">
              — From every artisan, farmer, and creator we work with
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

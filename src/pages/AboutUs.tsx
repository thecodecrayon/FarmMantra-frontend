import {
  Heart,
  Shield,
  Sparkles,
  Users,
  Award,
  CheckCircle,
  MapPin,
} from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* ABOUT US HERO SECTION; */}
      <section className="relative px-6 py-20 bg-linear-to-br from-orange-50 to-amber-50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
              Empowering Rural Artisans
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
              Handcrafted with Heart
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Supporting farmers and village artisans who craft beautiful
              products alongside their daily work, preserving traditions and
              earning dignified livelihoods.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-orange-200 to-amber-200 shadow-lg">
              <img
                src="https://www.tataneu.com/pages/travel/_next/image?url=https%3A%2F%2Fd1msew97rp2nin.cloudfront.net%2Fprodin%2Ftntravel%2Fblogimages%2FRanthambore%20Image%205-25204f55-68c8-4835-ba73-da2b8c438236.webp&w=3840&q=75"
                alt="artisans creating things"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-square rounded-2xl overflow-hidden bg-linear-to-br from-amber-200 to-yellow-200 shadow-lg mt-8">
              <img
                src="https://media.istockphoto.com/id/1297412243/photo/a-female-artisan-busy-at-work-inside-saras-mela-fairground-held-at-newtown-kolkata.jpg?s=612x612&w=0&k=20&c=M6jE7E61ZzNSTMPU95EF06g7pXUvW0TBcbwMZGwoalA="
                alt="artisans creating things"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STATISTICS BAR; */}
      <section className="px-6 py-12 bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold mb-1">500+</div>
            <div className="text-gray-400 text-md">Village Artisans</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">50+</div>
            <div className="text-gray-400 text-md">Rural Communities</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">100%</div>
            <div className="text-gray-400 text-md">Handcrafted</div>
          </div>
          <div>
            <div className="text-4xl font-bold mb-1">Fair</div>
            <div className="text-gray-400 text-md">Trade Pricing</div>
          </div>
        </div>
      </section>

      {/* OUT MISSION; */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Mission
            </h2>
            <div className="w-20 h-1 bg-orange-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-linear-to-br from-orange-50 to-amber-50 rounded-2xl p-8 border border-orange-100">
              <Heart className="w-10 h-10 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Support Livelihoods
              </h3>
              <p className="text-gray-700">
                Direct income for rural families. Artisans earn fair wages for
                their craftsmanship.
              </p>
            </div>
            <div className="bg-linear-to-br from-amber-50 to-yellow-50 rounded-2xl p-8 border border-amber-100">
              <Sparkles className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Preserve Tradition
              </h3>
              <p className="text-gray-700">
                Ancient crafting techniques kept alive through meaningful work
                and recognition.
              </p>
            </div>
            <div className="bg-linear-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 border border-yellow-100">
              <Users className="w-10 h-10 text-yellow-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Build Community
              </h3>
              <p className="text-gray-700">
                Strengthening villages by keeping families together and
                traditions thriving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* QUALITY ASSURANCE VISUAL; */}
      <section className="px-6 py-20 bg-gray-800 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8 items-center">
            <div className="md:col-span-2 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
                <Shield className="w-5 h-5" />
                <span className="text-sm font-medium">Quality Guaranteed</span>
              </div>
              <h2 className="text-4xl font-bold">
                Certified Quality Inspection
              </h2>
              <p className="text-gray-300 text-lg">
                Every product inspected by our certified quality inspector
                before reaching you.
              </p>
            </div>
            <div className="md:col-span-3 grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                <div className="font-semibold mb-1">Craftsmanship</div>
                <div className="text-sm text-gray-400">
                  Skill & detail verified
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                <div className="font-semibold mb-1">Authenticity</div>
                <div className="text-sm text-gray-400">
                  100% handmade confirmed
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                <div className="font-semibold mb-1">Quality Standards</div>
                <div className="text-sm text-gray-400">
                  Rigorous checks passed
                </div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <CheckCircle className="w-8 h-8 text-green-400 mb-3" />
                <div className="font-semibold mb-1">Fair Trade</div>
                <div className="text-sm text-gray-400">
                  Artisan compensation verified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS - IN BRIEF; */}
      <section className="px-6 py-20 bg-linear-to-b from-orange-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              From Village to Your Home
            </h2>
            <p className="text-xl text-gray-600">
              A journey of craftsmanship and care
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Handcrafted",
                desc: "Artisans create each piece with traditional techniques",
              },
              {
                step: "02",
                title: "Inspected",
                desc: "Quality inspector verifies authenticity and standards",
              },
              {
                step: "03",
                title: "Fair Trade",
                desc: "Artisans receive fair compensation for their work",
              },
              {
                step: "04",
                title: "Delivered",
                desc: "Premium products reach your doorstep with love",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100">
                  <div className="text-orange-500 text-5xl font-bold mb-3 opacity-20">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-orange-200"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUT IMPACT STORY - A SMALL BRIEF; */}
      <section className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl bg-linear-to-br from-amber-200 overflow-hidden to-orange-200 aspect-video shadow-xl">
            <img
              src="https://media.istockphoto.com/id/1268056796/photo/indian-woman-painting-vases-in-her-workshop-rajasthan-india.jpg?s=612x612&w=0&k=20&c=C9XrgcUOhco9B3sDy8VoAhzSdDRn4fdeToIYZCNbLdo="
              alt="cover-image-artisans-smiling"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="space-y-6">
            <Award className="w-12 h-12 text-orange-600" />
            <h2 className="text-4xl font-bold text-gray-900">
              Real Impact, Real Lives
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Every purchase helps a farmer's wife supplement her family income.
              A young artisan stay in their village with dignity. A grandmother
              pass down skills to the next generation.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This isn't charity—it's partnership. It's honoring skill,
              preserving culture, and building sustainable futures for rural
              communities.
            </p>
            <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors shadow-lg">
              Shop Our Collection
            </button>
          </div>
        </div>
      </section>

      {/* WHERE ARE WE SITUATED - MAP + LOCATION */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <MapPin className="w-12 h-12 text-orange-600 mx-auto mb-4" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Visit Us</h2>
            <p className="text-xl text-gray-600">
              Baghpat, Uttar Pradesh, India
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=28.947975400000008,77.22270839999999&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* TRUST BADGES; */}
      <section className="px-6 py-12 bg-gray-50 border-y border-gray-200">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <Shield className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <div className="font-semibold text-gray-900 text-sm">
              Quality Certified
            </div>
          </div>
          <div>
            <Heart className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <div className="font-semibold text-gray-900 text-sm">
              Fair Trade
            </div>
          </div>
          <div>
            <Award className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <div className="font-semibold text-gray-900 text-sm">
              100% Authentic
            </div>
          </div>
          <div>
            <Users className="w-8 h-8 text-gray-600 mx-auto mb-2" />
            <div className="font-semibold text-gray-900 text-sm">
              Community First
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

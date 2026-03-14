import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Home,
  Grid2X2,
  ShoppingBag,
  Info,
  Flower,
} from "lucide-react";

const navLinks = [
  { to: "/", label: "Home", icon: Home },
  { to: "/categories", label: "Categories", icon: Grid2X2 },
  { to: "/list-all", label: "All Products", icon: ShoppingBag },
  { to: "/about-us", label: "About Us", icon: Info },
];

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const navigateToHome = () => {
    navigate("/");
    setMenuOpen(false);
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 bg-white shadow-xs z-40">
        {/* TOP NAV BAR — desktop only */}
        <nav className="hidden md:flex items-center justify-between px-8 lg:px-25 py-2 border-b border-gray-300 text-gray-400 font-medium">
          <h2 className="text-[12px] tracking-wide"></h2>
          <ul className="flex">
            {navLinks.map(({ to, label }) => (
              <li
                key={to}
                className="mr-4 last:mr-0 last:pr-5 cursor-pointer hover:text-black"
              >
                <NavLink
                  to={to}
                  className={({ isActive }) =>
                    isActive ? "text-black font-semibold" : ""
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* MAIN HEADER ROW */}
        <div className="flex items-center justify-between px-4 sm:px-8 lg:px-25 py-3 md:py-4 border-b border-gray-300">
          <h2
            className="app-icon text-2xl sm:text-3xl text-gray-800 font-bold tracking-[-2px] cursor-pointer"
            onClick={navigateToHome}
          >
            BaghpatBloom
          </h2>

          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* BACKDROP */}
      <div
        className={`fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* SIDEBAR DRAWER */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 z-50 bg-white flex flex-col shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
              <Flower size={15} className="text-orange-600" />
            </div>
            <span className="font-bold text-gray-800 tracking-tight text-base">
              BaghpatBloom
            </span>
          </div>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 px-4 py-6 flex flex-col gap-1 overflow-y-auto">
          {navLinks.map(({ to, label, icon: Icon }, i) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: menuOpen ? `${i * 55}ms` : "0ms" }}
              className={({ isActive }) =>
                `flex items-center gap-4 px-4 py-3.5 rounded-xl font-medium text-base transition-all duration-200
                ${
                  isActive
                    ? "bg-orange-50 text-orange-700 border border-orange-100"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                }
                ${menuOpen ? "sidebar-link-enter" : "opacity-0"}`
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isActive ? "bg-orange-100" : "bg-gray-100"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={isActive ? "text-orange-600" : "text-gray-500"}
                    />
                  </div>
                  <span>{label}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 rounded-full bg-orange-500" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Divider + footer */}
        <div className="px-6 py-5 border-t border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-400 text-center leading-relaxed">
            Handcrafted with ❤️ by rural artisans
            <br />
            Baghpat, Uttar Pradesh
          </p>
        </div>
      </aside>

      <style>{`
        @keyframes sidebarLinkEnter {
          from { opacity: 0; transform: translateX(12px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .sidebar-link-enter {
          animation: sidebarLinkEnter 0.22s ease-out both;
        }
      `}</style>
    </>
  );
};

export default Header;

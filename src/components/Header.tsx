import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navigateToHome = () => {
    navigate("/");
    setMenuOpen(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/categories", label: "Categories" },
    { to: "/list-all", label: "All Products" },
    { to: "/about-us", label: "About Us" },
  ];

  return (
    <header className="absolute top-0 left-0 right-0 bg-white shadow-xs z-40">
      {/* TOP NAV BAR — hidden on mobile */}
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

        {/* Hamburger — visible on mobile only */}
        <button
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 shadow-md">
          <ul className="flex flex-col px-4 py-2">
            {navLinks.map(({ to, label }) => (
              <li key={to} className="border-b border-gray-100 last:border-0">
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 text-base font-medium transition-colors ${
                      isActive ? "text-black" : "text-gray-500 hover:text-black"
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

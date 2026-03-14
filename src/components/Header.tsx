import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  // const itemsInCart = cart.length;
  // const navigateToCart = () => {
  //   navigate("/cart");
  // };

  // const navigateToSignup = () => {
  //   navigate("/signup");
  // };

  // const navigateToLogin = () => {
  //   navigate("/login");
  // };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <header className="absolute top-0 left-0 right-0 bg-white shadow-xs">
      <nav className="flex items-center justify-between px-25 py-2 border-b border-gray-300  text-gray-400 font-medium">
        <h2 className="text-[12px] tracking-wide"></h2>
        <ul className="flex">
          <li className="mr-4 cursor-pointer hover:text-black">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="mr-4 cursor-pointer hover:text-black">
            <NavLink to="/categories">Categories</NavLink>
          </li>
          <li className=" pr-5 cursor-pointer hover:text-black">
            <NavLink to="/list-all">All Products</NavLink>
          </li>
          {/* <li className=" pr-5 cursor-pointer hover:text-black">
            <NavLink to="/cart">MyCart</NavLink>
          </li> */}
          <li className=" pr-5 cursor-pointer hover:text-black">
            <NavLink to="/about-us">About Us</NavLink>
          </li>
          {/* <li className="flex text-black">
            <p
              className="border-r border-gray-300 px-5 cursor-pointer"
              onClick={navigateToSignup}
            >
              Sign Up
            </p>
            <p className="px-5 cursor-pointer" onClick={navigateToLogin}>
              Login
            </p>
          </li> */}
        </ul>
      </nav>

      <div className="flex items-center justify-between px-25 py-4 border-b border-gray-300">
        <h2
          className="app-icon text-3xl text-gray-800 font-bold tracking-[-2px] cursor-pointer"
          onClick={navigateToHome}
        >
          BaghpatBloom
        </h2>
        {/* <div className="flex gap-5">
          <div className="relative" onClick={navigateToCart}>
            <HandBagIcon size={25} />
            <div className="w-4 h-4 absolute top-0 -right-1 bg-yellow-400 text-black rounded-[50%] text-[10px] font-bold flex items-center justify-center">
              {itemsInCart}
            </div>
          </div>
          <BellIcon size={25} />
        </div> */}
      </div>
    </header>
  );
};

export default Header;

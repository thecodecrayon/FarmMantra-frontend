import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Categories, Home, MyCart } from "./pages";
import Layout from "./Layouts";
import CategoryListing from "./pages/CategoryListing";
import AboutUs from "./pages/AboutUs";
import ItemDetails from "./pages/ItemDetails";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CartProvider from "./context/CartProvider";
import EditProfile from "./pages/EditProfile";
import ViewProfile from "./pages/ViewProfile";
import AllProducts from "./pages/AllProducts";

const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<MyCart />} />
            <Route path="/profile/edit" element={<EditProfile />} />
            <Route path="/profile/view" element={<ViewProfile />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/list-all" element={<AllProducts />} />
            <Route path="/item/:id" element={<ItemDetails />} />
            <Route path="/categories" element={<Categories />} />
            <Route path="/categories/:id" element={<CategoryListing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;

import { Outlet } from "react-router-dom";
import { Footer, Header } from "../components";

const Layout = () => {
  return (
    <div className="min-h-screen w-full flex flex-col relative">
      <Header />
      <main className="flex-1 pt-27">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

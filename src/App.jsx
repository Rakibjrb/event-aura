import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "./Layout/Navbar/Nav";
import Footer from "./Layout/Footer/Footer";
import { useEffect } from "react";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = `EVENT AURA | ${
      location.pathname === "/"
        ? "Home".toUpperCase()
        : location.pathname.slice(1).toUpperCase()
    }`;
  }, [location.pathname]);

  return (
    <div>
      <Nav />
      <Outlet></Outlet>
      <Footer />
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default App;

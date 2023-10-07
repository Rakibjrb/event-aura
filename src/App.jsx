import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Nav from "./Layout/Navbar/Nav";
import Footer from "./Layout/Footer/Footer";

const App = () => {
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

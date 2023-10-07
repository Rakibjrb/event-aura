import { Outlet } from "react-router-dom";
import Nav from "./Layout/Navbar/Nav";
import Footer from "./Layout/Footer/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default App;

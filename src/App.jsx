import { Outlet } from "react-router-dom";
import Nav from "./Layout/Navbar/Nav";

const App = () => {
  return (
    <div>
      <Nav />
      <Outlet></Outlet>
    </div>
  );
};

export default App;

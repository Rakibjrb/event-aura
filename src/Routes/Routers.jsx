import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home/Home";
import Services from "../Components/Services/Services";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default routers;

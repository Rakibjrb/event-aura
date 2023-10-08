import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Layout/Home/Home";
import Services from "../Components/Services/Services";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import ServiceDetails from "../Components/ServiceDetails/ServiceDetails";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../Pages/LoginAndSignUp/Switcher";
import Gellary from "../Pages/WeddingGellary/Gellary";

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
      {
        path: "/user-login",
        element: <Login />,
      },
      {
        path: "/service-details/:id",
        element: (
          <ProtectedRoute>
            <ServiceDetails />
          </ProtectedRoute>
        ),
        loader: () => fetch("../services.json"),
      },
      {
        path: "/weddings-gellary",
        element: (
          <ProtectedRoute>
            <Gellary />
          </ProtectedRoute>
        ),
        loader: () => fetch("../gellary.json"),
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
export default routers;

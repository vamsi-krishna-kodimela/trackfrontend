import { createBrowserRouter } from "react-router-dom";
import Customer from "../pages/customer/Customer";
import DeliveryAgent from "../pages/delivery-agent/DeliveryAgent";
import Home from "../pages/home/Home";
import Login from "../pages/home/components/Login";
import SignUp from "../pages/home/components/Signup";
import PageNotFound from "../pages/page-not-found/PageNotFound";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { path: "/", Component: Login },
      { path: "/register", Component: SignUp },
    ],
  },
  {
    path: "/delivery-agent",
    Component: DeliveryAgent,
  },
  {
    path: "/customer",
    Component: Customer,
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);

export default AppRoutes;

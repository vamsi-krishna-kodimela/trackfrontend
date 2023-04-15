import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import Login from "../pages/home/components/Login";
import SignUp from "../pages/home/components/Signup";
import PageNotFound from "../pages/page-not-found/PageNotFound";
import Dashboard from "../pages/dashboard/Dashboard";
import CustomerDashboard from "../pages/dashboard/components/customer-dashboard/CustomerDashboard";
import AgentDashboard from "../pages/dashboard/components/agent-dashboard/AgentDashboard";

const AppRoutes = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      { path: "/", Component: Login },
      { path: "register", Component: SignUp },
    ],
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      { path: "customer", Component: CustomerDashboard },
      { path: "agent", Component: AgentDashboard },
      {
        path: "*",
        Component: PageNotFound,
      },
    ],
  },
  {
    path: "*",
    Component: PageNotFound,
  },
]);

export default AppRoutes;

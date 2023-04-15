import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import DeliveryAgent from "./pages/delivery-agent/DeliveryAgent";
import Customer from "./pages/customer/Customer";
import PageNotFound from "./pages/page-not-found/PageNotFound";
import Login from "./pages/home/components/Login";
import SignUp from "./pages/home/components/Signup";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", Component: Login },
      { path: "/register", Component: SignUp },
    ],
  },
  {
    path: "/delivery-agent",
    element: <DeliveryAgent />,
  },
  {
    path: "/customer",
    element: <Customer />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;

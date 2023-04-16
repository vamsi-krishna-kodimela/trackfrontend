import { RouterProvider } from "react-router-dom";
import AppRoutes from "./config/app-routes";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <RouterProvider router={AppRoutes} />
      <Toaster position="top-right" />
    </>
  );
}

export default App;

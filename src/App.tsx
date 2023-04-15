import { RouterProvider } from "react-router-dom";
import AppRoutes from "./config/app-routes";

function App() {
  return (
    <>
      <RouterProvider router={AppRoutes} />
    </>
  );
}

export default App;

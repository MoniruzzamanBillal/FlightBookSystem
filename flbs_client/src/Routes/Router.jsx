import { createBrowserRouter } from "react-router-dom";
import RootPage from "./RootPage";
import Home from "../Pages/Home";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <p>About </p>,
      },
    ],
  },
]);

export default Routes;

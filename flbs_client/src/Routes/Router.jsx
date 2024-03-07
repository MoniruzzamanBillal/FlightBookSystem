import { createBrowserRouter } from "react-router-dom";
import RootPage from "./RootPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";

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
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default Routes;

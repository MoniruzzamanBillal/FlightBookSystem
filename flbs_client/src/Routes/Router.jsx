import { createBrowserRouter } from "react-router-dom";
import RootPage from "./RootPage";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import SearchResult from "../Pages/SearchResult";
import BookFlight from "../Pages/BookFlight";
import Test from "../Pages/Test";

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
        path: "/searchresult",
        element: <SearchResult />,
      },
      {
        path: "/book",
        element: <BookFlight />,
      },
      {
        path: "/about",
        element: <p>About </p>,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },

      {
        path: "/test",
        element: <Test />,
      },
    ],
  },
]);

export default Routes;

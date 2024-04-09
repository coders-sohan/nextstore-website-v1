import { createBrowserRouter } from "react-router-dom";
// main layouts
import MainLayouts from "../layouts/MainLayouts";
// all pages
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import ProductDetails from "../pages/ProductDetails/ProductDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/product/:slug",
        element: <ProductDetails />,
      },
      {
        path: "*",
        element: <div>404 error</div>,
      },
    ],
  },
]);

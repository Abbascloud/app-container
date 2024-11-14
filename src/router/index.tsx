import { createBrowserRouter } from "react-router-dom";
import { ShopPage, AboutPage } from "@/pages";
import { Layout } from "@/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <h1>Home</h1>,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
    ],
  },
]);

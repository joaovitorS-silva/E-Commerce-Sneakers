import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import BestSellers from "./pages/BestSellers.jsx";

const rota = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "best", element: <BestSellers /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rota}></RouterProvider>
  </StrictMode>,
);

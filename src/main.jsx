import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./componentes/Layout.jsx"
import Home from "./componentes/Home.jsx"
import CardProduto from "./componentes/cardProduto.jsx";

const rota = createBrowserRouter([

  {
    path: "/",
    element: <Layout/>,
    children: [
      {index: true, element: <Home/>},
      {path: "best", element: <CardProduto/>}
    ]
  }
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rota}></RouterProvider>
  </StrictMode>,
);

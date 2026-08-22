import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./pages/Layout.jsx";
import Home from "./pages/Home.jsx";
import BestSellers from "./pages/BestSellers.jsx";
import Carrinho from "./pages/Carrinho.jsx";
import CardCarrinho from "./componentes/CardCarrinho.jsx";
import { CarrinhoProvider } from "../context/CarrinhoContext.jsx";

const rota = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "best", element: <BestSellers /> },
      { path: "carrinho", element: <Carrinho /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CarrinhoProvider>
      <RouterProvider router={rota}></RouterProvider>
    </CarrinhoProvider>
  </StrictMode>,
);

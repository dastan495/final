import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ProductContextProvider from "./contexts/ProductContext";
import "./components/Footer/Footer.css";
import AuthContextProvider from "./contexts/AuthContext";
import CartContextProvider from "./contexts/CartContext";
import NavabarContexts from "./contexts/NavbarContext";
// import WishlistContextProvider from "../contexts/WishListContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    {/* <WishlistContextProvider> */}
    <CartContextProvider>
      <ProductContextProvider>
        <AuthContextProvider>
          {/* <NavabarContexts> */}
          <App />
          {/* </NavabarContexts> */}
        </AuthContextProvider>
      </ProductContextProvider>
    </CartContextProvider>
    {/* </WishlistContextProvider> */}
  </BrowserRouter>
);

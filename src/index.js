import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import ProductContext from "./contexts/ProductContext";
import CartProvider from "./contexts/CartContext";
import  WishProvider from "./contexts/WishContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
    <CartProvider>
      <WishProvider>

      <ProductContext>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductContext>
      </WishProvider>
    </CartProvider>
 
);

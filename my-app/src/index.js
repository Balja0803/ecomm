import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import App from "./App";
import ProductContext from "./layout/ProductContext";
import UserContext from "./layout/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <UserContext>
      <ProductContext>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductContext>
    </UserContext>
  </BrowserRouter>
);

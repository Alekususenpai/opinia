import React from "react";
import ReactDOM from "react-dom/client";
import { ProdReqProvider } from "../src/context/ProdReqContext";
import { UserProvider } from "../src/context/UserContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <ProdReqProvider>
        <App />
      </ProdReqProvider>
    </UserProvider>
  </React.StrictMode>
);

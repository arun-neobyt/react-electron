import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { DepositProvider } from "./context/DepositContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <DepositProvider>
      <App />
    </DepositProvider>
);

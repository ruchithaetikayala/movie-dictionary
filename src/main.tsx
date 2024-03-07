import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MovieProvider } from "./ProviderContext.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MovieProvider>
      <App />
    </MovieProvider>
  </React.StrictMode>
);

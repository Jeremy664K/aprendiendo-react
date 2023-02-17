import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import FiltersProviders from "./context/filters";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <FiltersProviders>
        <App />
    </FiltersProviders>
);

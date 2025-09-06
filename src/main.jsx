import './i18n';
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { initGTM } from "./utils/initGTM.js";
import { HelmetProvider } from 'react-helmet-async';

initGTM();
const helmetContext = {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider context={helmetContext}>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

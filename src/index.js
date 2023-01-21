import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { AnimatePresence } from "framer-motion";
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnimatePresence>
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    </AnimatePresence>
  </React.StrictMode>
);

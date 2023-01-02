import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Expenses from "./routes/expenses";
import Invoices from "./routes/invoices";
import Game from "./routes/game";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="expenses" element={<Expenses />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="expenses/game" element={<Game />} />
      <Route path="*" element={<p>there is nothing in this page</p>} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

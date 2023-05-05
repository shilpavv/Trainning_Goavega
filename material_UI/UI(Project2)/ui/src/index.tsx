import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./Pages/Authentication";
import Database from "./Pages/Database";
import Functions from "./Pages/Function";
import Hosting from "./Pages/Hosting";
import MachineLearning from "./Pages/MachineLearning";
import Storage from "./Pages/Storage";
import { ThemeProvider } from "@mui/material/styles";
import { dashboardTheme } from "./Component/DashBoardTheme";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={dashboardTheme}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="authentication" element={<Authentication />} />
          <Route path="database" element={<Database />} />
          <Route path="functions" element={<Functions />} />
          <Route path="hosting" element={<Hosting />} />
          <Route path="machine-learning" element={<MachineLearning />} />
          <Route path="storage" element={<Storage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>,
  </React.StrictMode>
);

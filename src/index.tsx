import React from "react";
import ReactDOM from "react-dom/client";

import { App } from "./app/App";
import { GlobalStyle } from "./styles/GlobalStyle.styled";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);

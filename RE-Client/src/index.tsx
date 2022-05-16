import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import StyleProvider from "./Providers/StyleProvider";
import StateProvider from "./Providers/StateProvider";
import ServerProvider from "./Providers/ServerProvider";
import { BrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <StateProvider>
      <BrowserRouter>
        <ServerProvider>
          <SnackbarProvider maxSnack={4}>
            <StyleProvider>
              <App />
            </StyleProvider>
          </SnackbarProvider>
        </ServerProvider>
      </BrowserRouter>
    </StateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import './index.css'
import App from "./App.jsx";
import { EmployeeProvider } from "./context/EmployeeContext.jsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";

createRoot(document.getElementById("root")).render(
  // now every component can access the context
  <Provider store={store}>
    <App />
  </Provider>,
);

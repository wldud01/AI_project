import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(<App />);
// 가장 기본적으로 app.tsx index.html, index.tsx가 필요하다
reportWebVitals();

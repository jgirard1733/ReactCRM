import React from "react";
import { App } from './app.jsx'
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
  

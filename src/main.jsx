import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="812378483244-l29albei6g4jcnnsd4fof1l6mjiv2c9l.apps.googleusercontent.com">
 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GoogleOAuthProvider>
    ;
  </StrictMode>
);

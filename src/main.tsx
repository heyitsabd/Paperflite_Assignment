import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { CollectionPopupProvider } from "./CollectionPopupContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CollectionPopupProvider>
      <App />
    </CollectionPopupProvider>
  </StrictMode>
);

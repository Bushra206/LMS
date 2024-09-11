import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import SchoolArrayProvider from "./assets/components/context/SchoolArrayProvider.jsx";
import SubjectsArrayProvider from "./assets/components/context/SubjectsArrayProvider.jsx";
import AlertTextProvider from "./assets/components/context/AlertTextProvider.jsx";
import Details from "./assets/components/context/dataContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SchoolArrayProvider>
      <SubjectsArrayProvider>
        <AlertTextProvider>
          <Details>
            <App />
          </Details>
        </AlertTextProvider>
      </SubjectsArrayProvider>
    </SchoolArrayProvider>
  </StrictMode>
);

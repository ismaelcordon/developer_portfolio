import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import "./i18n.tsx";
import App from "./App";

export default function Root() {
    return (
        <StrictMode>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StrictMode>
    );
}

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ContextProvider } from "./contexts/ContextProvider.js";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</StrictMode>
);

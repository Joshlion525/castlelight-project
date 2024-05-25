import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterFormScreen from "./pages/RegisterFormScreen.jsx";
import Eligble from "./pages/EligbleScreen.jsx";
import NotEligible from "./pages/NotEligible.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/register",
		element: <RegisterFormScreen />,
	},
	{
		path: "/eligible",
		element: <Eligble />,
	},
	{
		path: "/noteligible",
		element: <NotEligible />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

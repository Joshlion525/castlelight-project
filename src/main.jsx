import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterFormScreen from "./pages/RegisterFormScreen.jsx";
import Eligble from "./pages/EligbleScreen.jsx";
import NotEligible from "./pages/NotEligible.jsx";
import Home from "./pages/Home.jsx";
import Notlegal from "./pages/Notlegal.jsx";
import Participate from "./pages/Participate.jsx";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "/home",
		element: <Home />,
	},
	{
		path: "/notlegal",
		element: <Notlegal />,
	},
	{
		path: "/participate",
		element: <Participate />,
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

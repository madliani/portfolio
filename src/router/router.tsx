import { createBrowserRouter, RouteObject } from "react-router-dom";

import ErrorPage from "../pages/404";
import About from "../pages/about";
import Home from "../pages/home";
import Portfolio from "../pages/portfolio";

const ROUTES: RouteObject[] = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/404",
        element: <ErrorPage />
    },
    {
        path: "/about",
        element: <About />
    },
    {
        path: "/portfolio",
        element: <Portfolio />
    }
];

export const router = createBrowserRouter(ROUTES);

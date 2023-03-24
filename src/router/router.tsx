import { RouteObject } from "react-router";
import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../pages/404";
import Contact from "../pages/contact";
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
        element: <Contact />
    },
    {
        path: "/contact",
        element: <Contact />
    },
    {
        path: "/portfolio",
        element: <Portfolio />
    }
];

export const router = createBrowserRouter(ROUTES);

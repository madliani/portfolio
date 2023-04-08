import { createBrowserRouter, RouteObject } from "react-router-dom";

import { About } from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { Portfolio } from "../pages/Portfolio";

const routes: RouteObject[] = [
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

export const router = createBrowserRouter(routes);

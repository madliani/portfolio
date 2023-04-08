import { createBrowserRouter, RouteObject } from "react-router-dom";
import { About } from "../pages/About";
import { ErrorPage } from "../pages/ErrorPage";
import { Home } from "../pages/Home";
import { Portfolio } from "../pages/Portfolio";

const routes: RouteObject[] = [
    {
        element: <Home />,
        path: "/"
    },
    {
        element: <ErrorPage />,
        path: "/404"
    },
    {
        element: <About />,
        path: "/about"
    },
    {
        element: <Portfolio />,
        path: "/portfolio"
    }
];

export const router = createBrowserRouter(routes);

import { RouterProvider } from "react-router";

import { router } from "../router/router";

export const App = function () {
    return <RouterProvider router={router} />;
};

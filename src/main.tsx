import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
    {
        Component: App,
        children: [
            {
                path: "/",
                element: <div>Home</div>,
            },
        ],
    },
]);

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <RouterProvider router={router} />,
    </StrictMode>
);

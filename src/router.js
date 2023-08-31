import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import Contacts from "./Components/Contacts/Contacts";
import Projects from "./Components/Projects/Projects";
import AboutMe from "./Components/AboutMe/AboutMe";
import Root from "./Components/Root";
import ErrorPage from "./errors/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <AboutMe />,
            },
            {
                path: "/contacts",
                element: <Contacts />,
            },
            {
                path: "/projects",
                element: <Projects />,
            },
        ],
    },
]);

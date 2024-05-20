import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate} from "react-router-dom";
import NavBar from "./routes/NavBar";
import HomePage from "./routes/HomePage";
import ProjectsPage  from "./routes/ProjectsPage";
import AboutPage from "./routes/AboutPage";
import ErrorPage from "./routes/ErrorPage";
import './master-style.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        errorElement: <ErrorPage />,
        children: [
            // Setting home as the default page -- although 
            // the Navbar is still the backbone of the page
            {
                index: true,
                element: <Navigate to="/home" replace />
            },
            {
                path: "/home",
                element: <HomePage />,
            },
            {
                path: "/projects",
                element: <ProjectsPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
        ]
    },
    
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);

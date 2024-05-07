import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Pages/Home.jsx'
import './index.css'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Pages/ErrorPage.jsx";
import ExploreJakarta from "./Pages/ExploreJakarta.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage />,
    },
    {
        path: "/jelajahi",
        element: <ExploreJakarta />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router}/>
    </React.StrictMode>,
)

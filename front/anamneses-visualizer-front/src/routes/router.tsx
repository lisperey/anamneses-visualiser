import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProtectedRoute from "../protected";
import Inactivity from "../inactivity";
import Dashboard from "../pages/Dashboard";


  
export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute element={<Inactivity element={<Root />}/>} />,
        children: [
           
            {
                path: "/",
                element: <Home />,
               
            },
            {
                path: "dashboard",
                element: <Dashboard />,
               
            },
            
        ],

    },
    {
        path: "/login",
        element: <Login />,

    },

]);
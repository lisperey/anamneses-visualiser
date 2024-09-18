import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Home from "../pages/Home";
import ProtectedRoute from "../protected";
import Inactivity from "../inactivity";


  
export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute element={<Inactivity element={<Root />}/>} />,
        children: [
           
            {
                path: "/home",
                element: <Home />,
               
            },
            
        ],

    },
    {
        path: "/login",
        element: <Login />,

    },

]);
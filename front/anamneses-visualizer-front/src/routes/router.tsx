import { createBrowserRouter, useNavigate } from "react-router-dom";
import Root from "../pages/Root";
import Login from "../pages/Login";
import Home from "../pages/Home";
import { useEffect } from "react";
import { useAuth } from '../providers/AuthContext';

  
  const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
    const { username } = useAuth();
    const navigate = useNavigate();
  
    useEffect(() => {
      if (username) {
        navigate("/login"); 
      }
    }, []);
  
    return element;
  };

export const router = createBrowserRouter([
    {
        path: "/",
        element: <ProtectedRoute element={<Root />} />,
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
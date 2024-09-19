import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";
import { CircularProgress } from "@mui/material";

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
    const { token } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true); 
    useEffect(() => {
      if (!token || token === '') {
        navigate("/login");
        return; 
      }
      setIsLoading(false)
    }, [navigate, token]);

    if (isLoading) {
      return (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "80vh",
          }}
        >
          <CircularProgress size={65} />
        </div>
      )
    }
    return element;
  };

  export default ProtectedRoute;
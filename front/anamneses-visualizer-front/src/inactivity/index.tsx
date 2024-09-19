import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthContext";

const Inactivity = ({ element }: { element: JSX.Element })  => {
  const { setToken } = useAuth(); 
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken('');
    navigate('/login');
    localStorage.removeItem('closing');
  };
  function handleBeforeUnload() {
    if (sessionStorage.getItem('isClosing') === 'true') {
      handleLogout()
    }
  }
  
  function markAsClosing() {
    sessionStorage.setItem('isClosing', 'true');
  }
  window.addEventListener('beforeunload', handleBeforeUnload);
  window.addEventListener('unload', markAsClosing);
  window.addEventListener('load', () => {
    sessionStorage.removeItem('isClosing');
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    const resetTimer = () => {
      if (timeoutId) {
        clearTimeout(timeoutId); 
      }
      timeoutId = setTimeout(() => {
        handleLogout();
      }, 300000);
    };

    window.addEventListener('mousemove', resetTimer);
    window.addEventListener('keydown', resetTimer);
    window.addEventListener('scroll', resetTimer);
    resetTimer();
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('mousemove', resetTimer);
      window.removeEventListener('keydown', resetTimer);
      window.removeEventListener('scroll', resetTimer);
    };
  }, [navigate, setToken]);

  return element;
};

export default Inactivity;
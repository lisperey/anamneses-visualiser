import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  token: '',
  setToken: (token) => {},
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(() =>{
    return localStorage.getItem('token')??'';
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

export const useAuth = () => useContext(AuthContext);
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
  token: '',
  setToken: (token) => { },
});

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    return sessionStorage.getItem('token') ?? '';
  });

  useEffect(() => {
    if (token) {
      sessionStorage.setItem('token', token);
    } else {
      sessionStorage.removeItem('token');
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
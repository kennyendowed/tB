import { AuthContext } from "./auth.context";
import { useState,useEffect } from 'react';
import AuthService from "../../services/auth.service";

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();  
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    setCurrentUser(false);
  }
  return (
    <AuthContext.Provider
      value={{
        currentUser,logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

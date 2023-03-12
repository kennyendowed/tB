import { AuthContext } from "./auth.context";
import { useState,useEffect } from 'react';
import AuthService from "../../services/auth.service";

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [hamburger, settoggle] = useState(false);
  useEffect(() => {
    const user = AuthService.getCurrentUser();  
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logout = () => {
    setCurrentUser(false);
  }

  async function ToggleNavbar() {
    if (hamburger) {
        settoggle(false)
  
     } else {
        settoggle(true)
          }
       }
  return (
    <AuthContext.Provider
      value={{
        currentUser,logout,ToggleNavbar,hamburger
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

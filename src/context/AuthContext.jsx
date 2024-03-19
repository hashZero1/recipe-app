import { useState, createContext, useEffect } from "react";
import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../Firebase/Firebase.config";
//Context to track the user sign in or sign out

// actual value/fn you want to access
// current user check the existing user obj or null (bcoz empty obj evaluate as true)
// and empty function(setCurrentUser) which return null
export const AuthContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//user provider is the component
//this function allow us to access the user value inside the useState
//which we can call and get the value any component
export const AuthProvider = ({ children }) => {
  //to store user state with initial value is null
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  //to monitor the user signed in or out
  useEffect(() => {
    const unsubscibe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });
    return unsubscibe;
  }, []);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

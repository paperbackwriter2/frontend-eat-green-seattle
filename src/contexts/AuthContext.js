import React, { useEffect, useState, createContext, useContext } from "react";
import { auth } from "../firebase-config";

const AuthContext = createContext(null)

export function useAuth() {
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const [pending, setPending] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(user =>{
            // console.log('Successfully tracked!')
            console.log(`tracking ${user}`)
            if(user){
                console.log(user.email)
                setCurrentUser(user.email)
            } else {
                setCurrentUser(null)
            }
            // console.log(user.email)
        })
    }, [])
    
// WORKS BUT RELOADS A MILLION TIMES:
    // auth.onAuthStateChanged(user =>{
    //     // console.log('Successfully tracked!')
    //     console.log(`tracking ${user}`)
    //     if(user){
    //         console.log(user.email)
    //         setCurrentUser(user.email)
    //     } else {
    //         setCurrentUser(null)
    //     }
    //     // console.log(user.email)
    // })


    //   if(pending){
    //     return <>Loading...</>
    //   }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
      <h1>Current user is: {currentUser}</h1>
    </AuthContext.Provider>
  );
};
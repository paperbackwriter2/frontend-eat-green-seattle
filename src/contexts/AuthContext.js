import { getAdditionalUserInfo } from "@firebase/auth";
import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
import { auth } from "../firebase-config";

const baseURL = 'http://localhost:5000/get-profile'
// const baseURL = 'http://localhost:5000/hi'

const AuthContext = createContext(null)

export function useAuth() {
    return useContext(AuthContext)
}

const getProfile = (userEmail) => {
    try {
        const userData = axios.post(baseURL, {email: userEmail})
        // return axios.post(baseURL, {email: userEmail})
        return userData
    } catch (err) {
        console.log(err)
    }
}



const logProfile = async (userEmail) => {
    console.log('Inside logProfile()')
    const userInfo = getProfile(userEmail)
        .then(response => {
            if (response.data) {
                console.log(response.data)
            } else {
                console.log('there was no response')
            }
        })
        .catch(err => {
            console.log(err)
        })

}

// logProfile('karamo@fab.com')


// THIS SEQUENCE WORKS
// const sayHi = () => {
//     try {
//         return axios.post(baseURL)
//     } catch (err) {
//         console.log(err)
//     }
// }

// // sayHi();

// const logHi = async () => {
//     console.log('Inside logHi()')
//     const message = sayHi()
//         .then(response => {
//             if (response.data) {
//                 console.log(response.data)
//             } else {
//                 console.log('there was no response')
//             }
//         })
//         .catch(err => {
//             console.log(err)
//         })
// }

// logHi();


export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const [userProfile, setUserProfile] = useState(null);
    // const [pending, setPending] = useState(true);


    // I think I need to make a call to axios onAuthStateChanged to get all
    // info from the MongoDB database

    // useEffect(() => {
    //     const unsubscribe = auth.onAuthStateChanged(user =>{
    //         // console.log('Successfully tracked!')
    //         console.log(`tracking ${user.email}`)
    //         if(user){
    //             // console.log(user.email)
    //             // setCurrentUser(user.email)
    //             // console.log(`in auth: ${user.uid}`)
    //             setCurrentUser({
    //                 email: user.email,
    //                 uid: user.uid
    //             })

    //             // this info is not coming back in time
    //             const userData = getProfile(user.email)
    //             setUserProfile(userData)
    //             console.log(`print userProfile ${userProfile}`)

    //             // const profile = (userEmail) => {
    //             //     axios
    //             //         .get(baseURL, {email: userEmail})
    //             //         .then(console.log(`userEmail is: ${userEmail}`))
    //             //         .then((response) => 
    //             //             console.log('axios success!', response.data.first_name)
    //             //         )
    //             // }
                
    //             // profile(user.email)
    //             // getAdditionalUserInfo(user.email)
    //         } else {
    //             setCurrentUser(null)
    //         }
    //         // console.log(user.email)
    //     })
    //     return unsubscribe
    // }, [])

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(
            async (user) => {
                try {
                    const userData = await getProfile(user.email);
                    console.log(`this is my userData ${userData.data}`)
                    console.log(userData.data)
                    console.log(`inside user`)
                    // console.log(userData.first_name)
                    // setCurrentUser(userData.email)
                    const userProfile = userData.data;
                    setCurrentUser({
                    email: userProfile.email,
                    uid: userProfile.firebase_id,
                    first_name: userProfile.first_name,
                    last_name: userProfile.last_name,
                    created_at: userProfile.created_at
                    })
                } catch (error) {
                    console.log(error)
                }
            }
        )
        return unsubscribe
        }, []);
            
    //         user =>{
    //         // console.log('Successfully tracked!')
    //         console.log(`tracking ${user.email}`)
    //         if(user){
    //             // console.log(user.email)
    //             // setCurrentUser(user.email)
    //             // console.log(`in auth: ${user.uid}`)
    //             setCurrentUser({
    //                 email: user.email,
    //                 uid: user.uid
    //             })

    //             // this info is not coming back in time
    //             const userData = getProfile(user.email)
    //             setUserProfile(userData)
    //             console.log(`print userProfile ${userProfile}`)

    //             // const profile = (userEmail) => {
    //             //     axios
    //             //         .get(baseURL, {email: userEmail})
    //             //         .then(console.log(`userEmail is: ${userEmail}`))
    //             //         .then((response) => 
    //             //             console.log('axios success!', response.data.first_name)
    //             //         )
    //             // }
                
    //             // profile(user.email)
    //             // getAdditionalUserInfo(user.email)
    //         } else {
    //             setCurrentUser(null)
    //         }
    //         // console.log(user.email)
    //     })
    //     return unsubscribe
    // }, [])

    
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
        currentUser,
        setCurrentUser
      }}
    >
      {children}
      {/* <h1>Current user is: {currentUser.email}</h1> */}
    </AuthContext.Provider>
  );
};
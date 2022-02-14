import React, { useContext, useState } from 'react';
import { Link, Outlet} from 'react-router-dom';
import { UserContext } from '../../UserContext';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase-config';
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext';
import { nullLiteral } from '@babel/types';
import './Navbar.css'

const Navbar = () => {
  // const {user, setUser} = useAuth();
  // const [isLoading, setIsLoading] = useState(true)
  const {currentUser, setCurrentUser} = useAuth()
  // const isFarm = currentUser.isFarm;
  // const [user, setUser] = useState();
  // setUser(currentUser);
  

  let navigate = useNavigate();
  console.log(currentUser)
  console.log(currentUser.is_farm)
  
  // console.log(isFarm)
  // console.log(`user ${user}`)

  // useEffect(() => {
  // //   const {currentUser, setCurrentUser} = useAuth()
  // // const [user, setUser] = useState();
  //   setUser(currentUser)
  //   setIsLoading(false)
  
  //   // return () => {
  //   //   second
  //   // }
  // }, [])
  
  // {
  //   currentUser.is_farm?
  //   console.log('True')
  //   : console.log('False')
  // }
  // console.log(currentUser.is_farm)
  // function logOut = () => {
  //   return signOut(auth)
  // })
  async function logOut(e) {
    // e.preventDefault()
    // console.log(formData.email, formData.password)'
    try {
      await signOut(auth)
      navigate('/')
      setCurrentUser({first_name: null})
    } catch(error) {
      console.log(error)
    }
    // signOut(auth)
    //    .then((userCredential) => {
    //        // Signed in
    //       //  const user = userCredential.user;
    //       //  console.log(user)
    //       //  console.log(user.uid)
    //       // setUser(null)
    //       console.log('You are logged out!')
    //       // setCurrentUser(null)
          
    //       //  setUser(user.email)
    //       console.log('do we get to the end of logging out?')
    //       navigate('/')
    //    })
    //    .catch((error) => {
    //        const errorCode = error.code;
    //        const errorMessage = error.message;
    //    })
}

    return (
        <div style={{ display: "flex" }}>
          <nav
            style={{
              borderRight: "solid 1px",
              padding: "1rem"
            }}
          >
              <p>Eat Green Seattle</p>

              {currentUser.email
                ? 
                <div>
                  <p>Am I a farmer? {currentUser.is_farm.toString()}</p>
                  <p>Logged in as {currentUser.email}!</p>
                  {/* <Link
                    style={{ display: "block", margin: '1rem 0'}}
                    to='customer-dashboard'
                  >
                    My Dashboard
                  </Link> */}
                  {/* <Link
                  style={{ display: "block", margin: '1rem 0'}}
                  to='/create-csa'
                  > Manage my CSA</Link>   */}
                </div>
                : <Link 
                    style={{ display: "block", margin: '1rem 0'}}
                    to='/'
                  >
                    Home 
                  </Link>
              }


              {/* THESE ARE WORKING */}
              {!currentUser.is_farm && currentUser.zipcode?
                <Link
                style={{ display: "block", margin: '1rem 0'}}
                to='customer-dashboard'
                >
                My Dashboard
                </Link>
                : null}

              {currentUser.is_farm?
                <Link
                style={{ display: "block", margin: '1rem 0'}}
                to='farm-dashboard'
                >
                My Dashboard
                </Link>
                : null}

              {currentUser.is_farm?
                <Link
                style={{ display: "block", margin: '1rem 0'}}
                to='/create-csa'
                > Register a CSA</Link>  
                : <></>
              }

{currentUser.is_farm?
                <Link
                style={{ display: "block", margin: '1rem 0'}}
                to='#'
                > Farmer Resources</Link>  
                : <></>
              }







              
              {/* {currentUser.is_farm?
                <Link
                style={{ display: "block", margin: '1rem 0'}}
                to='/create-csa'
                > Register a CSA</Link>  
                : <></>
              } */}

              {/* <Link 
                style={{ display: "block", margin: '1rem 0'}}
                to='/'
              >
                 Home 
              </Link> */}
              <Link 
                style={{ display: "block", margin: '1rem 0'}}
                to='/browse'
              >
                 Browse CSAs 
              </Link>
              <Link 
                style={{ display: "block", margin: '1rem 0'}}
                to='/about'
              >
                 About Us
              </Link>
              {currentUser.email
              ? <button onClick={logOut}>Log out</button>
              : null
              }

              {/* <Link 
                style={{ display: "block", margin: '1rem 0'}}
                to='/'
              >
                 Log In
              </Link> */}

          </nav>
          {/* <Outlet /> */}
        </div>
      );
}

export default Navbar;
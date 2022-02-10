import React, { useContext } from 'react';
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
  const {currentUser, setCurrentUser} = useAuth()

  let navigate = useNavigate();
  console.log(currentUser)
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
      setCurrentUser(null)
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

              {currentUser
                ? 
                <div>
                  <p>Am I a farmer? {currentUser.is_farm}</p>
                  <p>Logged in as {currentUser.email}!</p>
                  <Link
                    style={{ display: "block", margin: '1rem 0'}}
                    to='customer-dashboard'
                  >
                    My Dashboard
                  </Link>
                  <Link
                  style={{ display: "block", margin: '1rem 0'}}
                  to='/create-csa'
                  > Manage my CSA</Link>  
                </div>
                : <Link 
                    style={{ display: "block", margin: '1rem 0'}}
                    to='/'
                  >
                    Home 
                  </Link>
              }
              {/* {currentUser.is_farm?
                <Link
                style={{ display: "block", margin: '1rem 0'}}
                to='/create-csa'
                > Manage my CSA</Link>  
                : null
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
              {currentUser
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
import React from 'react';
import { Link, Outlet} from 'react-router-dom';

const Navbar = () => {
    // return (
    //     <ul>
    //         <li>
    //             <a href="#">Home</a>
    //             <a href="#">Create an Account</a>
    //         </li>
    //     </ul>
    // )
    return (
        <div style={{ display: "flex" }}>
          <nav
            style={{
              borderRight: "solid 1px",
              padding: "1rem"
            }}
          >
              <p>Eat Green Seattle</p>
              <Link 
                style={{ display: "block", margin: '1rem 0'}}
                to='/'
              >
                 Home 
              </Link>
              <Link 
                style={{ display: "block", margin: '1rem 0'}}
                to='/login'
              >
                 Log In
              </Link>
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
              <Link 
                style={{ display: "block", margin: '1rem 0'}}
                to='/create-account'
              >
                 Create an account
              </Link>

          </nav>
          {/* <Outlet /> */}
        </div>
      );
}

export default Navbar;
import React from 'react';
import { Link, Outlet} from 'react-router-dom';

const Navbar = () => {

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
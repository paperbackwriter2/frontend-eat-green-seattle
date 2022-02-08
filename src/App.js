import { Outlet, Link } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { UserContext } from './UserContext';
import { useState, useEffect } from 'react';

import './App.css';
import Navbar from './components/Navbar/Navbar'
import Login from './components/Login/Login'
import Homepage from './components/Homepage/Homepage'
import Browse from './components/Browse/Browse'
import About from './components/About/About'
import CreateAccount from './components/CreateAccount/CreateAccount';
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard';
import CreateFarm from './components/CreateFarm/CreateFarm'
import FarmDashboard from './components/FarmDashboard/FarmDashboard'
import { app } from './firebase-config';
import { AuthProvider } from './contexts/AuthContext'

function App() {
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   app.auth().onAuthStateChanged(setUser);
  // }, []);

  return (
      <Router>
        <AuthProvider>
        {/* <UserContext.Provider value={ {user, setUser}}> */}
          <Navbar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='browse' element={<Browse />} />
            <Route path='about' element={<About />} />
            <Route path='create-account' element={<CreateAccount />} />
            <Route path='customer-dashboard' element={<CustomerDashboard />}
              // {currentUser ? <Redirect to="/dashboard" /> : <PublicHomePage />} 
            />
            <Route path='create-farm' element={<CreateFarm />}/>
            <Route path='farm-dashboard' element={<FarmDashboard />} />
          </Routes>
        </AuthProvider>
        {/* </UserContext.Provider> */}
      </Router>
    // </AuthProvider>
  );
}

export default App;

{/* <nav>
<Link to="/create-customer">Create an account</Link>
<Link to="/invoices">Invoices</Link> 
<Link to="/expenses">Expenses</Link>
</nav> */}
      {/* <Outlet ></Outlet> */}


// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <h1>Eat Green Seattle</h1>
//         <p>Support small, local farmers and regenerative agriculture.</p>
//         <img className='radish' alt='radish with leaves' src='https://images.pexels.com/photos/4117702/pexels-photo-4117702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
//         <Login />
//         {/* <img src='https://images.pexels.com/photos/6280399/pexels-photo-6280399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>; */}

//       </div>
//       <Outlet></Outlet>
//     </div>
//   );
// }

// return (
//   <Router>
//     <UserContext.Provider value={ {user, setUser}}>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Homepage />} />
//         <Route path='browse' element={<Browse />} />
//         <Route path='about' element={<About />} />
//         <Route path='create-account' element={<CreateAccount />} />
//       </Routes>
//     </UserContext.Provider>
//   </Router>
// );
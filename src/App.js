import { Outlet, Link } from 'react-router-dom'

import './App.css';
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Eat Green Seattle</h1>
        <p>Support small, local farmers and regenerative agriculture.</p>
        <img className='radish' alt='radish with leaves' src='https://images.pexels.com/photos/4117702/pexels-photo-4117702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>
        {/* <img src='https://images.pexels.com/photos/6280399/pexels-photo-6280399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'></img>; */}

      </div>
      <Outlet></Outlet>
    </div>
  );
}

export default App;

{/* <nav>
<Link to="/create-customer">Create an account</Link>
<Link to="/invoices">Invoices</Link> 
<Link to="/expenses">Expenses</Link>
</nav> */}
      {/* <Outlet ></Outlet> */}
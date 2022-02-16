import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'
import CreateAccount from './components/CreateAccount/CreateAccount';
import CustomerDashboard from './components/CustomerDashboard/CustomerDashboard';
import FarmDashboard from './components/FarmDashboard/FarmDashboard'
import NewBrowse from './components/NewBrowse/NewBrowse'
import FarmProfile from './components/FarmProfile/FarmProfile'
import NewFarmForm from './components/NewFarmForm/NewFarmForm'
import HorizontalNav from './components/HorizontalNav/HorizontalNav'
import CustomerCsa from './components/CustomerCSA/CustomerCSA'

import { AuthProvider } from './contexts/AuthContext'



function App() {
  

  return (
      <Router>
        <AuthProvider>
          <HorizontalNav />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='browse' element={<NewBrowse />} />
            <Route path='about' element={<About />} />
            <Route path='create-account' element={<CreateAccount />} />
            <Route path='customer-dashboard' element={<CustomerDashboard />}/>
            <Route path='create-csa' element={<NewFarmForm />}/>

            <Route path='farm-dashboard' element={<FarmDashboard />} />
            <Route path='learn' element={<NewBrowse />} />
            <Route path='profile/:farm_id' element={<FarmProfile />} />
            {/* <Route path='*' element={ErrorPage}></Route> */}
            <Route path='/my-csa' element={<CustomerCsa />} />
          </Routes>
        </AuthProvider>

      </Router>

  );
}

export default App;


  
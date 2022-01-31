import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter,
  Routes,
  Route 
} from 'react-router-dom';

import './index.css';
import App from './App';
import Login from './components/Login/Login'
import Browse from './components/Browse/Browse'
import About from './components/About/About'
// import AddFarm from './components/AddFarm/AddFarm'
import CreateAccount from './components/CreateAccount/CreateAccount'
import { AuthProvider } from './contexts/AuthContext'

// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
       <Route path='/' element={<App />}> 
       <Route path='login' element={<Login />}/>
       <Route path='browse' element={<Browse />} />
       <Route path='about' element={<About />} />
       {/* <Route path='add-farm' element={AddFarm} /> */}
       <Route path='create-account' element={<CreateAccount/>} />
       </Route>
   </Routes>
 </BrowserRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

{/* <App /> */}

{/* <Route path='login'element={<Login></Login>} />
<Route
  path="*"
  element={
    <main style={{ padding: '1rem' }}>
      <p>There's nothing here!</p>
    </main>
  }
  /> */}

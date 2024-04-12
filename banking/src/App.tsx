import React, { createContext, useContext, useEffect } from 'react';
import Home from './Pages/Home';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Deposit from './Components/Deposit';
import CheckBalance from './Components/CheckBalance';
import Withdraw from './Components/Withdraw';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Landing from './Pages/Landing';
import { Button } from '@mui/material';
import {UserContext, UserContextProvider} from './Contexts/UserContextProvider';
import Logout from './Pages/Logout';


function App() {

  const {user, setUser} = useContext(UserContext);

  useEffect(() => {
    
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/deposit' element={<Deposit/>}/>
        <Route path='/check' element={<CheckBalance/>}/>
        <Route path='/withdraw' element={<Withdraw/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
    </Router>
  );
}

export default App;

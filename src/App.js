import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute';
import './App.css'

function App() {
  const[isLoggedIn,setIsLoggedIn]=useState(false)
  return (
    <div className="flex flex-col w-screen min-h-screen bg-zinc-950">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />}/>
        <Route path='/dashboard' element={
        <PrivateRoute isLoggedIn={isLoggedIn}>
           <Dashboard/>
        </PrivateRoute>
       }/>
      </Routes>
    </div>
  );
}

export default App;

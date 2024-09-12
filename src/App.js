import React from 'react';
import Button from '@mui/material/Button';
import "./App.css";
import FormPage from './FormPage';
import { Route, Routes } from 'react-router-dom';

const App = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/google';
  };

  return (
    <Routes>
    <Route path="/" element={<div className='wrapper'>
      <Button variant="contained" onClick={handleLogin}>Login</Button>
      
    </div>}/>
    <Route path="/form" element={<div className='wrapper'>
      <FormPage/>
    </div>}/>
    
    </Routes>
  );
};

export default App;

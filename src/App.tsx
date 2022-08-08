import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Races from './components/Races';
import Navbar from './components/Navbar';
import Drivers from './components/Drivers';
import Teams from './components/Teams'

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/races" element={<Races />} />

          <Route path="/drivers" element={<Drivers />} />

          <Route path="/teams" element={<Teams />} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
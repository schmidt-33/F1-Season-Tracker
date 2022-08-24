import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Races from './components/Races';
import Navbar from './components/Navbar';
import Standings from './components/Standings';
import RaceDetails from './components/RaceDetails';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path="/races" element={<Races />} />
          <Route path="/standings/*" element={<Standings />} />
          <Route path='/races/:raceId' element={<RaceDetails/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
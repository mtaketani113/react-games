import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home, RPG } from './components';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} /> {/* ホーム */}
        <Route path="/RPG" element={<RPG />} /> {/* PRG */}
      </Routes>
    </div>
  );
}

export default App;

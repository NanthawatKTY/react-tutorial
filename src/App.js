import React, {useEffect, useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppState from './views/AppState';
import AppUseEffect from './views/AppUseEffect';
import AppUseContext from './views/AppUseContext';
import AppUseRef from './views/AppUseRef';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppState />} />
        <Route path="/state" element={<AppState />} />
        <Route path="/useFX" element={<AppUseEffect />} />
        <Route path="/useContext" element={<AppUseContext />} />
        <Route path="/useRef" element={<AppUseRef />} />
      </Routes>
    </div>
  );
}

export default App;

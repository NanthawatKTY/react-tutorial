import React, {useEffect, useState} from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import AppState from './views/AppState';
import AppUseEffect from './views/AppUseEffect';
import AppUseContext from './views/AppUseContext';
import AppUseRef from './views/AppUseRef';
import AppLayoutComponent from './views/AppLayoutComponent';
import NestedRoute from './views/NestedRoute';
import Page404 from './views/Page404';

function App() {
  return (
    <div>
      <AppHeader/>
      <Routes>
        <Route path="/" element={<AppState />} />
        <Route path="/state" element={<AppState />} />
        <Route path="/useFX" element={<AppUseEffect />} />
        <Route path="/useContext" element={<AppUseContext />} />
        <Route path="/useRef" element={<AppUseRef />} />
        <Route path="/layoutComponent" element={<AppLayoutComponent />} />
        <Route path="/nestedRoute/*" element={<NestedRoute />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;

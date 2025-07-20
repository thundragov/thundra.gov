import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Thundrarch from './pages/Thundrarch';
import Infrastructure from './pages/Infrastructure';
import Defense from './pages/Defense';
import Diplomacy from './pages/Diplomacy';
import './index.css';
import 'leaflet/dist/leaflet.css';

import Drawer from './tools/PolygonDrawer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/thundra.gov/" element={<HomePage />} />
      <Route path="/thundra.gov/thundrarch" element={<Thundrarch />} />
      <Route path="/thundra.gov/infrastructure" element={<Infrastructure />} />
      <Route path="/thundra.gov/defense" element={<Defense />} />
      <Route path="/thundra.gov/diplomacy" element={<Diplomacy />} />
      <Route path="/thundra.gov/test" element={<Drawer />} />
    </Routes>
  </BrowserRouter>
);
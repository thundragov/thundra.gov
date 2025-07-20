import ReactDOM from 'react-dom/client';
import { HashRouter, Routes, Route } from 'react-router-dom'; // ⬅️ use HashRouter!
import HomePage from './pages/HomePage';
import Thundrarch from './pages/Thundrarch';
import Infrastructure from './pages/Infrastructure';
import Defense from './pages/Defense';
import Diplomacy from './pages/Diplomacy';
import './index.css';
import 'leaflet/dist/leaflet.css';

import Drawer from './tools/PolygonDrawer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/thundrarch" element={<Thundrarch />} />
      <Route path="/infrastructure" element={<Infrastructure />} />
      <Route path="/defense" element={<Defense />} />
      <Route path="/diplomacy" element={<Diplomacy />} />
      <Route path="/test" element={<Drawer />} />
    </Routes>
  </HashRouter>
);
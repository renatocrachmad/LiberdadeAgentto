import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import EventoDetalhes from './pages/EventoDetalhes';
import Financeiro from './pages/Financeiro';
import Prestadores from './pages/Prestadores';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/evento-detalhes" element={<EventoDetalhes />} />
          <Route path="/financeiro" element={<Financeiro />} />
          <Route path="/prestadores" element={<Prestadores />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

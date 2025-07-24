import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Blog from './components/Blog';
import Journal from './components/Journal';
import Mood from './components/Mood';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Appointment from './components/Appointment';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/mood" element={<Mood />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;

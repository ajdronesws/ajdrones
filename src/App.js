import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ThemeProvider } from './context/ThemeContext';
import Navigation from './components/Navigation';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Workshops from './pages/Workshops';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import MoreServices from './pages/MoreServices';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <div className="App">
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/more-services" element={<MoreServices />} />
            <Route path="/workshops" element={<Workshops />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;


import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-6 col-lg-4">
            <div className="footer-section">
              <h3 className="footer-title">AJ DRONES</h3>
              <p className="footer-tagline">Learn • Build • Fly • Innovate</p>
              <p className="footer-description">
                Empowering the next generation of drone professionals through hands-on education 
                and practical training. Making drone technology accessible and engaging for everyone.
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-2">
            <div className="footer-section">
              <h4 className="footer-heading">Quick Links</h4>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/workshops">Workshops</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <div className="footer-section">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li>Workshops</li>
                <li>Training Programs</li>
                <li>Institutional Programs</li>
                <li>Career Guidance</li>
                <li>Drone Demonstrations</li>
              </ul>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-3">
            <div className="footer-section">
              <h4 className="footer-heading">Contact Info</h4>
              <ul className="footer-contact">
                <li>
                  <span className="contact-icon">📧</span>
                  <span>ajdronesws@gmail.com</span>
                </li>
                <li>
                  <span className="contact-icon">📱</span>
                  <span>+91 96524 57060</span>
                </li>
                <li>
                  <span className="contact-icon">📍</span>
                  <span>India</span>
                </li>
              </ul>
              <div className="social-links">
                {/* <a href="#" className="social-link" aria-label="Facebook">📘</a> */}
                {/* <a href="#" className="social-link" aria-label="Twitter">🐦</a> */}
                {/* <a href="#" className="social-link" aria-label="Instagram">📷</a> */}
                {/* <a href="#" className="social-link" aria-label="LinkedIn">💼</a> */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="row">
            <div className="col-12 text-center">
              <p className="copyright">
                &copy; {new Date().getFullYear()} AJ Drones. All rights reserved. | 
                <span className="mx-2">Learn • Build • Fly • Innovate</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


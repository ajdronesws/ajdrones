import React from 'react';
import { Link } from 'react-router-dom';
import MouseEffects from '../components/MouseEffects';
import RecentWorkshops from '../components/RecentWorkshops';
import './Workshops.css';

const Workshops = () => {
  return (
    <div className="workshops-page">
      {/* Hero Section */}
      <section className="workshops-hero">
        <MouseEffects />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title">Our Workshops</h1>
              <p className="page-subtitle">Join our interactive drone education sessions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops Content */}
      <section className="workshops-content py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12">
              <div className="workshops-intro">
                <h2 className="intro-title">Explore Our Workshop Programs</h2>
                <p className="intro-text">
                  At AJ Drones, we offer a wide range of workshops designed to cater to different 
                  skill levels and interests. Whether you're a complete beginner or looking to 
                  advance your knowledge, we have something for everyone. Our workshops combine 
                  theoretical understanding with practical hands-on experience, ensuring you gain 
                  real-world skills that matter.
                </p>
              </div>
            </div>
          </div>
          
          {/* Workshop listings commented out - uncomment when needed */}
          {/* <RecentWorkshops showAll={true} /> */}
        </div>
      </section>

      {/* Workshop Benefits */}
      <section className="workshop-benefits py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-heading">Why Attend Our Workshops?</h2>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="benefit-card">
                <div className="benefit-icon">👥</div>
                <h4>Expert Instructors</h4>
                <p>Learn from industry professionals with years of experience</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="benefit-card">
                <div className="benefit-icon">🎯</div>
                <h4>Hands-On Practice</h4>
                <p>Get real flying experience with actual drones</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="benefit-card">
                <div className="benefit-icon">📚</div>
                <h4>Comprehensive Materials</h4>
                <p>Receive study materials and resources to continue learning</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="benefit-card">
                <div className="benefit-icon">🏆</div>
                <h4>Certification</h4>
                <p>Earn certificates upon completion of programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="workshops-cta py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-title">Interested in Hosting a Workshop?</h2>
              <p className="cta-text">We can bring our programs to your institution</p>
              <Link to="/contact" className="btn btn-light btn-lg mt-3">
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Workshops;


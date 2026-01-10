import React from 'react';
import { Link } from 'react-router-dom';
// import RecentWorkshops from '../components/RecentWorkshops';
import MouseEffects from '../components/MouseEffects';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <MouseEffects />
        <div className="hero-background"></div>
        <div className="container hero-content">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-text">
                <div className="welcome-badge">Welcome to AJ Drones</div>
                <h1 className="hero-title">
                  <span className="title-line-1">AJ Drones</span>
                  <span className="title-line-2">Shaping the Future of Drone Technology</span>
                </h1>
                <p className="hero-description">
                  Leading provider of professional drone services and educational workshops. 
                  Empowering businesses and students with cutting-edge drone technology.
                </p>
                <div className="hero-buttons">
                  <Link to="/services" className="btn btn-primary btn-lg me-3">
                    Explore Services <span className="btn-arrow">→</span>
                  </Link>
                  <Link to="/contact" className="btn btn-outline btn-lg">
                    Book Workshop
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-image-container">
                <div className="hero-image-wrapper">
                  <img 
                    src="/assets/homeimage.png" 
                    alt="Professional Drone"
                    className="hero-drone-image"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1527977966376-1c8408f9f108?w=800&h=600&fit=crop';
                    }}
                  />
                  <div className="image-overlay-shape shape-1"></div>
                  <div className="image-overlay-shape shape-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="section-title">Why Choose AJ Drones?</h2>
              <p className="section-subtitle">Comprehensive drone education for all levels</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src="assets/handson.png" alt="Hands-On Learning" className="feature-image" />
                </div>
                <h4>Hands-On Learning</h4>
                <p>Learn by doing with practical workshops and real drone flying experiences</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src="/assets/Training.jpeg" alt="Expert Training" className="feature-image" />
                </div>
                <h4>Expert Training</h4>
                <p>Learn from industry professionals with years of experience in drone technology</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Career Guidance" className="feature-image" />
                </div>
                <h4>Career Guidance</h4>
                <p>Get insights into career paths and opportunities in the growing drone industry</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src="/assets/SafetyFirstHome.jpeg" alt="Safety First" className="feature-image" />
                </div>
                <h4>Safety First</h4>
                <p>Comprehensive safety training and regulatory awareness for responsible flying</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src="/assets/Innovation.jpeg" alt="Innovation Focus" className="feature-image" />
                </div>
                <h4>Innovation Focus</h4>
                <p>Encourage creativity and entrepreneurial thinking in drone applications</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="feature-card">
                <div className="feature-icon-wrapper">
                  <img src="/assets/RealworldHome.jpeg" alt="Real-World Applications" className="feature-image" />
                </div>
                <h4>Real-World Applications</h4>
                <p>Understand how drones transform industries from agriculture to smart cities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Workshops Section */}
      {/* <section className="workshops-preview-section py-5">
        <div className="container">
          <div className="row mb-4">
            <div className="col-12 text-center">
              <h2 className="section-title">Our Workshops</h2>
              <p className="section-subtitle">Join our upcoming sessions or explore past workshops</p>
            </div>
          </div>
          <RecentWorkshops showAll={false} />
          <div className="text-center mt-4">
            <Link to="/workshops" className="btn btn-primary btn-lg" style={{background: '#f97316', border: 'none'}}>
              View All Workshops
            </Link>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-title">Ready to Start Your Drone Journey?</h2>
              <p className="cta-text">Join us for an exciting learning experience</p>
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

export default Home;


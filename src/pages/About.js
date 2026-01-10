import React from 'react';
import MouseEffects from '../components/MouseEffects';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <MouseEffects />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title">About AJ Drones</h1>
              <p className="page-subtitle">Empowering the Future of Drone Technology</p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="content-section py-5">
        <div className="container">
          <div className="row align-items-center mb-5">
            <div className="col-lg-6">
              <h2 className="section-heading">Overview</h2>
              <p className="section-text">
                AJ Drones is a forward-looking drone technology initiative focused on educating, 
                training, and inspiring students and young professionals in the rapidly growing 
                field of unmanned aerial systems (UAS). The organization is built on the belief 
                that drone technology is not just about flying devices, but about innovation, 
                problem-solving, and shaping future industries.
              </p>
              <p className="section-text">
                With a strong emphasis on hands-on learning, AJ Drones bridges the gap between 
                theoretical knowledge and real-world application. The initiative caters to schools, 
                colleges, and beginner-level learners, making advanced drone concepts accessible, 
                affordable, and engaging across India.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="about-image">
                <img 
                  src="/assets/supermedia.png" 
                  alt="Drone Technology"
                  className="about-drone-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Mission & Vision */}
      <section className="mission-vision-section py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="mv-card vision-card">
                <h3 className="mv-title">Our Vision</h3>
                <p className="mv-text">
                  To become a leading drone education and innovation platform that empowers the 
                  next generation of drone professionals, researchers, and entrepreneurs. We 
                  envision a future where students across India are confident, skilled, and 
                  innovation-ready in emerging drone technologies.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mv-card mission-card">
                <h3 className="mv-title">Our Mission</h3>
                <p className="mv-text">
                  To deliver high-quality, practical drone education through workshops, training 
                  programs, and real-world exposure, while fostering curiosity, creativity, and 
                  entrepreneurial thinking among learners. We aim to make drone technology 
                  accessible and engaging for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <div className="leadership-badge">Leadership Team</div>
              <h2 className="section-heading">Meet Our Leaders</h2>
              <p className="section-subtitle">The visionaries driving AJ Drones forward</p>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6 col-lg-5">
              <div className="leader-card">
                  <div className="leader-photo-wrapper">
                    <img src="/assets/jagadish.png" alt="Jagadish Metta" className="leader-photo" />
                  </div>
                <div className="leader-info">
                  <h3 className="leader-name">Jagadish Metta</h3>
                  <p className="leader-role">Founder & CEO</p>
                  <p className="leader-description">
                    Visionary leader with a passion for drone technology and education. Jagadish founded AJ Drones 
                    with the mission to make cutting-edge technology accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-5">
              <div className="leader-card">
              <div className="leader-photo-wrapper">
                    <img src="/assets/aparna.png" alt="Jagadish Metta" className="leader-photo" />
                  </div>
                <div className="leader-info">
                  <h3 className="leader-name">Dr. Aparna</h3>
                  <p className="leader-role">Board of Directors</p>
                  <p className="leader-description">
                    Strategic advisor bringing expertise in educational technology and youth development. 
                    Dr. Aparna guides our educational initiatives and workshop programs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="philosophy-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-heading">Our Philosophy</h2>
              <p className="section-subtitle">Core principles that guide our mission</p>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="philosophy-card">
                <div className="philosophy-image-wrapper">
                  <img src="/assets/Instituional.jpeg" alt="Practical Understanding" className="philosophy-image" />
                </div>
                <h4>Practical Understanding</h4>
                <p>We prioritize hands-on experience over rote learning, ensuring students truly understand drone technology.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="philosophy-card">
                <div className="philosophy-image-wrapper">
                  <img src="/assets/CuriosityAbout.jpeg" alt="Curiosity-Driven" className="philosophy-image" />
                </div>
                <h4>Curiosity-Driven</h4>
                <p>We encourage exploration and questioning, fostering a genuine interest in drone technology.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="philosophy-card">
                <div className="philosophy-image-wrapper">
                  <img src="/assets/SafetyFirstHome.jpeg" alt="Safety First" className="philosophy-image" />
                </div>
                <h4>Safety First</h4>
                <p>Safety is paramount in all our programs, teaching responsible drone operation from day one.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="philosophy-card">
                <div className="philosophy-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop" alt="Career-Oriented" className="philosophy-image" />
                </div>
                <h4>Career-Oriented</h4>
                <p>We focus on skill development that translates directly to career opportunities in the drone industry.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="philosophy-card">
                <div className="philosophy-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop" alt="Innovation" className="philosophy-image" />
                </div>
                <h4>Innovation</h4>
                <p>We inspire students to think creatively and develop innovative solutions using drone technology.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="philosophy-card">
                <div className="philosophy-image-wrapper">
                  <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=300&fit=crop" alt="Entrepreneurship" className="philosophy-image" />
                </div>
                <h4>Entrepreneurship</h4>
                <p>We encourage entrepreneurial thinking and support students in building their own drone ventures.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


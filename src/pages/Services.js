import React from 'react';
import { Link } from 'react-router-dom';
import MouseEffects from '../components/MouseEffects';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: '🎓',
      title: 'Drone Abhyas',
      subtitle: 'Training & Certification',
      description: 'Comprehensive training programs designed to build skilled drone professionals for the growing UAV industry.',
      features: [
        'DGCA Certified Training',
        'Hands-on Flight Experience',
        'Safety Protocols & Regulations',
        'Commercial Pilot License',
        'Advanced Flight Operations'
      ],
      image: 'https://flydronics.com/assets/drone-training-DjhqN9ar.jpg'
    },
    {
      icon: '🔧',
      title: 'Workshops',
      subtitle: 'Interactive Learning',
      description: 'Interactive workshops designed for schools, colleges, and educational institutions. Our workshops combine theory with hands-on experience.',
      features: [
        'Age-appropriate content',
        'Live demonstrations',
        'Hands-on flying experience',
        'Q&A sessions'
      ],
      image: 'assets/workshop.png'
    },
    {
      icon: '🏫',
      title: 'Institutional Programs',
      subtitle: 'Custom Solutions',
      description: 'Customized programs tailored for educational institutions. We work with schools and colleges to design programs that fit their curriculum.',
      features: [
        'Custom curriculum design',
        'Flexible scheduling',
        'Bulk enrollment options',
        'Progress tracking'
      ],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop'
    },
    {
      icon: '💼',
      title: 'Career Guidance',
      subtitle: 'Professional Development',
      description: 'Expert guidance on career opportunities in the drone industry. Learn about various roles, required skills, certifications, and pathways to success.',
      features: [
        'Career counseling',
        'Skill assessment',
        'Certification guidance',
        'Industry connections'
      ],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop'
    },
    {
      icon: '🚁',
      title: 'Drone Demonstrations',
      subtitle: 'Live Shows',
      description: 'Live drone flying demonstrations showcasing various applications and capabilities. Perfect for events, exhibitions, and awareness programs.',
      features: [
        'Live flying shows',
        'Application demonstrations',
        'Safety protocols showcase',
        'Interactive sessions'
      ],
      image: '/assets/demonstrations.png'
    },
    {
      icon: '📚',
      title: 'Educational Resources',
      subtitle: 'Learning Materials',
      description: 'Access to comprehensive learning materials, guides, and resources to support your drone learning journey beyond workshops.',
      features: [
        'Study materials',
        'Video tutorials',
        'Component guides',
        'Regulatory information'
      ],
      image: '/assets/edu.png'
    }
  ];

  const applications = [
    {
      title: 'Agriculture',
      description: 'Crop monitoring, spraying, and precision farming',
      icon: '🌾'
    },
    {
      title: 'Surveying & Mapping',
      description: 'Land surveys, 3D mapping, and GIS applications',
      icon: '🗺️'
    },
    {
      title: 'Disaster Response',
      description: 'Emergency services and disaster management',
      icon: '🚨'
    },
    {
      title: 'Smart Cities',
      description: 'Urban planning and infrastructure monitoring',
      icon: '🏙️'
    },
    {
      title: 'Defense & Security',
      description: 'Surveillance and security applications',
      icon: '🛡️'
    },
    {
      title: 'Media & Cinematography',
      description: 'Photography, videography, and filmmaking',
      icon: '📹'
    }
  ];

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <MouseEffects />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title">Our Services</h1>
              <p className="page-subtitle">
                Comprehensive drone solutions from training to manufacturing, delivering excellence across all aerial technology needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-grid-section py-5">
        <div className="container">
          <div className="row g-4">
            {services.map((service, index) => (
              <div key={index} className={`col-md-6 ${index === 0 ? 'col-lg-12' : 'col-lg-6'}`}>
                <div className={`service-card ${index === 0 ? 'featured-service' : ''}`}>
                  <div className="row g-0">
                    {index === 0 && (
                      <div className="col-md-6">
                        <div className="service-image-wrapper">
                          <img src={service.image} alt={service.title} className="service-image" />
                        </div>
                      </div>
                    )}
                    <div className={index === 0 ? 'col-md-6' : 'col-12'}>
                      <div className="service-content">
                        {index !== 0 && (
                          <div className="service-image-small-wrapper">
                            <img src={service.image} alt={service.title} className="service-image-small" />
                          </div>
                        )}
                        <div className="service-header">
                          <h3 className="service-title">{service.title}</h3>
                          <p className="service-subtitle">{service.subtitle}</p>
                        </div>
                        <p className="service-description">{service.description}</p>
                        <ul className="service-features">
                          {service.features.map((feature, idx) => (
                            <li key={idx}>{feature}</li>
                          ))}
                        </ul>
                        <Link to="/contact" className="btn btn-service-learn">
                          Learn More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-heading">Real-World Applications</h2>
              <p className="section-subtitle">Learn how drones are transforming industries</p>
            </div>
          </div>
          <div className="row g-4">
            {applications.map((app, index) => {
              const appImages = [
                '/assets/agri.png', // Agriculture drone
                '/assets/mapping.jpg', // Surveying drone
                '/assets/disaster.png', // Emergency drone
                'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400&h=300&fit=crop', // Smart city drone
                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop', // Security drone
                'https://images.unsplash.com/photo-1529107386315-e4a50d1f98d8?w=400&h=300&fit=crop'  // Photography drone
              ];
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="application-card">
                    <div className="app-image-wrapper">
                      <img 
                        src={appImages[index]}
                        alt={app.title}
                        className="app-image"
                      />
                    </div>
                    <h4 className="app-title">{app.title}</h4>
                    <p className="app-description">{app.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="services-cta py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="cta-title">Ready to Get Started?</h2>
              <p className="cta-text">Contact us to learn more about our programs and services</p>
              <Link to="/contact" className="btn btn-light btn-lg mt-3">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;

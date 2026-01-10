import React from 'react';
import './Services.css';

const allApplications = [
  {
    title: "Logistics & Delivery",
    description: "E-commerce package delivery, rural last-mile delivery, postal transport in difficult terrain.",
    icon: "📦",
    image: "/assets/logistics.png"
  },
  
  {
    title: "Smart Cities",
    description: "Traffic monitoring, city planning, public safety surveillance.",
    icon: "🏙️",
    image: "/assets/SmartCities.jpeg"
  },
  {
    title: "Entertainment & Drone Shows",
    description: "Drone light shows, weddings, brand promotions, theme park attractions.",
    icon: "🎆",
    image: "/assets/DroneShow.png.jpeg"
  },
  {
    title: "Disaster Response",
    description: "Search & rescue, flood and fire assessment, emergency supply drops.",
    icon: "🚨",
    image: "/assets/disaster.png"
  },
  {
    title: "Agriculture",
    description: "Crop spraying, field monitoring, soil analysis, irrigation planning.",
    icon: "🌾",
    image: "/assets/agri.png"
  },
  {
    title: "Survey & Mapping",
    description: "Land surveys, 3D terrain mapping, topographic analysis.",
    icon: "🗺️",
    image: "/assets/mapping.jpg"
  },
  
  
  {
    title: "Construction & Infrastructure",
    description: "Site monitoring, bridge, road, dam and high-rise inspection.",
    icon: "🏗️",
    image: "/assets/ConNInfra.png"
  },
  {
    title: "Environment & Wildlife",
    description: "Forest monitoring, wildlife tracking, anti-poaching, pollution tracking.",
    icon: "🌍",
    image: "/assets/EnvironmentalWild.png"
  },
  {
    title: "Defense & Security",
    description: "Border surveillance, tactical reconnaissance, security patrols.",
    icon: "🛡️",
    image: "/assets/Defend.jpeg"
  },
  {
    title: "Energy & Utilities",
    description: "Power line, wind turbine, solar plant and pipeline inspections.",
    icon: "⚡",
    image: "/assets/Energy.png.jpeg"
  },
  {
    title: "Mining & Industrial Inspection",
    description: "Mine surveying, industrial plant inspection, hazard detection.",
    icon: "⛏️",
    image: "/assets/MineNSecurity.png"
  },
  {
    title: "Media & Cinema",
    description: "Aerial cinematography, filmmaking, sports broadcasting.",
    icon: "🎥",
    image: "/assets/MediaNCinema.jpeg"
  }
];

const MoreServices = () => {
  return (
    <div className='mt-4'>
      <section className="applications-section py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="section-heading">Real-World Applications</h2>
              <p className="section-subtitle">Learn how drones are transforming industries</p>
            </div>
          </div>
          <div className="row g-4">
            {allApplications.map((app, index) => {
              return (
                <div key={index} className="col-md-6 col-lg-4">
                  <div className="application-card">
                    <div className="app-image-wrapper">
                      <img 
                        src={app.image}
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
    </div>
  );
};

export default MoreServices;

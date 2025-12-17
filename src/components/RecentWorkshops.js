import React from 'react';
import { Link } from 'react-router-dom';
import { workshopData } from '../data/workshopdata.js';
import './RecentWorkshops.css';

const RecentWorkshops = ({ showAll = true }) => {
  const ongoingWorkshops = workshopData.ongoing;
  const previousWorkshops = showAll ? workshopData.previous : workshopData.previous.slice(0, 3);

  const getStatusBadge = (status) => {
    if (status === 'ongoing') {
      return <span className="badge bg-success">Ongoing</span>;
    }
    return <span className="badge bg-secondary">Completed</span>;
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <div className="recent-workshops">
      {/* Ongoing Workshops */}
      {ongoingWorkshops.length > 0 && (
        <div className="workshop-section mb-5">
          <h3 className="workshop-section-title">
            <span className="title-icon">🔥</span> Ongoing Workshops
          </h3>
          <div className="row g-4">
            {ongoingWorkshops.map((workshop) => (
              <div key={workshop.id} className="col-md-6 col-lg-4">
                <div className="workshop-card ongoing">
                  <div className="workshop-image-container">
                    <img 
                      src={workshop.image} 
                      alt={workshop.title}
                      className="workshop-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Drone+Workshop';
                      }}
                    />
                    {getStatusBadge(workshop.status)}
                  </div>
                  <div className="workshop-content">
                    <h4 className="workshop-title">{workshop.title}</h4>
                    <div className="workshop-meta">
                      <p className="workshop-date">
                        <span className="meta-icon">📅</span> {formatDate(workshop.date)}
                      </p>
                      <p className="workshop-location">
                        <span className="meta-icon">📍</span> {workshop.location}
                      </p>
                      <p className="workshop-participants">
                        <span className="meta-icon">👥</span> {workshop.participants} Participants
                      </p>
                      <p className="workshop-duration">
                        <span className="meta-icon">⏱️</span> {workshop.duration}
                      </p>
                    </div>
                    <p className="workshop-description">{workshop.description}</p>
                    <div className="workshop-topics">
                      <strong>Topics:</strong>
                      <ul>
                        {workshop.topics.map((topic, index) => (
                          <li key={index}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Previous Workshops */}
      {previousWorkshops.length > 0 && (
        <div className="workshop-section">
          <h3 className="workshop-section-title">
            <span className="title-icon">📚</span> Previous Workshops
          </h3>
          <div className="row g-4">
            {previousWorkshops.map((workshop) => (
              <div key={workshop.id} className="col-md-6 col-lg-4">
                <div className="workshop-card">
                  <div className="workshop-image-container">
                    <img 
                      src={workshop.image} 
                      alt={workshop.title}
                      className="workshop-image"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x300?text=Drone+Workshop';
                      }}
                    />
                    {getStatusBadge(workshop.status)}
                  </div>
                  <div className="workshop-content">
                    <h4 className="workshop-title">{workshop.title}</h4>
                    <div className="workshop-meta">
                      <p className="workshop-date">
                        <span className="meta-icon">📅</span> {formatDate(workshop.date)}
                      </p>
                      <p className="workshop-location">
                        <span className="meta-icon">📍</span> {workshop.location}
                      </p>
                      <p className="workshop-participants">
                        <span className="meta-icon">👥</span> {workshop.participants} Participants
                      </p>
                      <p className="workshop-duration">
                        <span className="meta-icon">⏱️</span> {workshop.duration}
                      </p>
                    </div>
                    <p className="workshop-description">{workshop.description}</p>
                    <div className="workshop-topics">
                      <strong>Topics:</strong>
                      <ul>
                        {workshop.topics.map((topic, index) => (
                          <li key={index}>{topic}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {!showAll && (
        <div className="text-center mt-4">
          <Link to="/workshops" className="btn btn-primary">
            View All Workshops
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecentWorkshops;


import React, { useState } from "react";
import emailjs from "emailjs-com";
import MouseEffects from "../components/MouseEffects";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    institution: "",
    message: "",
    workshopType: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setStatus("");

    const templateParams = {
      title: "Workshop Enquiry",
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      institution: formData.institution,
      workshopType: formData.workshopType,
      message: formData.message
    };

    emailjs
      .send(
        "service_u4kbq3n",      // 🔴 replace
        "template_8her0bl", 
        templateParams,
        "NPLcYVMWW7Yk6R7Ru"
      )
      .then(
        () => {
          setStatus("Thank you! We will get back to you soon.");
          setFormData({
            name: "",
            email: "",
            phone: "",
            institution: "",
            message: "",
            workshopType: ""
          });
        },
        () => {
          setError(true);
          setStatus("Something went wrong. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <MouseEffects />
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h1 className="page-title">Get in Touch</h1>
              <p className="page-subtitle">We'd love to hear from you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="contact-info">
                <h2 className="info-title">Contact Information</h2>
                <p className="info-text">
                  Have questions about our workshops or services? We're here to help!
                </p>

                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-details">
                    <h4>Email</h4>
                    <p>ajdronesws@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-details">
                    <h4>Phone</h4>
                    <p>+91 96524 57060</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-details">
                    <h4>Location</h4>
                    <p>Jubliee hills, Hyderabad, Telangana, India</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">⏰</div>
                  <div className="contact-details">
                    <h4>Response Time</h4>
                    <p>We typically respond within 12-24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="contact-form-container">
                <h2 className="form-title">Send us a Message</h2>

                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="mb-3">
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Institution / Organization</label>
                    <input
                      type="text"
                      className="form-control"
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Interested In</label>
                    <select
                      className="form-select"
                      name="workshopType"
                      value={formData.workshopType}
                      onChange={handleChange}
                    >
                      <option value="">Select an option</option>
                      <option value="Workshop">Workshop</option>
                      <option value="Training Program">Training Program</option>
                      <option value="Institutional Program">Institutional Program</option>
                      <option value="Career Guidance">Career Guidance</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label className="form-label">Message *</label>
                    <textarea
                      className="form-control"
                      rows="5"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-100" disabled={loading}>
                    {loading ? "Sending..." : "Send Message"}
                  </button>

                  {status && (
                    <p className={`mt-3 ${error ? "text-danger" : "text-success"}`}>
                      {status}
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

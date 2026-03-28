import React from 'react';
import Layout from '../Layout/Layout';
import '../Css/Home.css';

const Home = () => {
  return (
    <Layout>
      <div className="home">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to 7 Art Narration</h1>
            <p>Your trusted partner for creative digital solutions</p>
            <button className="btn">Get Started</button>
          </div>
          <div className="hero-image">
            <img src="/assets/images/7art.png" alt="7 Art Narration" />
          </div>
        </section>

        {/* Services Section */}
        <section className="services">
          <h2 className="section-title">Our Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🎨</div>
              <h3>Graphic Design</h3>
              <p>Professional designs for your brand</p>
            </div>
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Web Development</h3>
              <p>Modern, responsive websites</p>
            </div>
            <div className="service-card">
              <div className="service-icon">✍️</div>
              <h3>Content Writing</h3>
              <p>Engaging content that converts</p>
            </div>
          </div>
        </section>

        {/* Team Section - Original with 4 members */}
        <section className="team">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-avatar"></div>
              <h3>Narendra Yadav</h3>
              <p>Founder</p>
            </div>
            <div className="team-card">
              <div className="team-avatar"></div>
              <h3>Saurabh Kandhare</h3>
              <p>Co-Founder</p>
            </div>
            <div className="team-card">
              <div className="team-avatar"></div>
              <h3>Chaitali Vairate</h3>
              <p>Co-Founder</p>
            </div>
            <div className="team-card">
              <div className="team-avatar"></div>
              <h3>Akansha Atole</h3>
              <p>Web Designer</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;


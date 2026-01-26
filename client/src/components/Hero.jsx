import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container hero-content">
                <span className="badge">Powering Development</span>
                <h1 className="hero-title">Empowering Bihar with <span className="gradient-text">Sustainable Energy</span></h1>
                <p className="hero-subtitle">Efficient transmission, reliable distribution, and a commitment to a brighter
                    future for every citizen.</p>

                <div className="hero-actions">
                    <Link to="/services/pay-bill" className="btn btn-primary">Pay Bill Online</Link>
                    <Link to="/services/new-connection" className="btn btn-secondary">New Connection</Link>
                </div>

                <div className="stats-row">
                    <div className="stat-item">
                        <h4>411,625,124</h4>
                        <p>Total Visitors</p>
                    </div>
                    <div className="stat-item">
                        <h4>24/7</h4>
                        <p>Support</p>
                    </div>
                </div>
            </div>
            <div className="hero-image">
                {/* Abstract Graphic Representation of Power/Grid */}
                <Link to="/notices" className="card glass-card float-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="card-icon"><i className="ri-file-list-3-line"></i></div>
                    <div>
                        <h4>Latest Notice</h4>
                        <p>Recruitment 2024</p>
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Hero;

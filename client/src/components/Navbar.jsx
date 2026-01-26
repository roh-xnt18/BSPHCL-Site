import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={`glass-header ${isScrolled ? 'scrolled' : ''}`} style={{
            background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
            boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
        }}>
            <div className="container nav-container">
                <Link to="/" className="logo">
                    <div className="logo-icon">
                        <i className="ri-flashlight-line"></i>
                    </div>
                    <div className="logo-text">
                        <h1>बिहार स्टेट पावर होल्डिंग कं. लि.</h1>
                        <span>Bihar State Power Holding Company Ltd.</span>
                    </div>
                </Link>

                <nav className="nav-menu" style={{
                    display: isMobileMenuOpen ? 'flex' : undefined,
                    ...(isMobileMenuOpen ? {
                        position: 'absolute',
                        top: '80px',
                        left: '0',
                        width: '100%',
                        flexDirection: 'column',
                        background: '#0f172a',
                        padding: '20px',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                    } : {})
                }}>
                    <Link to="/" className="nav-link active">Home</Link>

                    <div className="dropdown">
                        <a href="#" className="nav-link">Company <i className="ri-arrow-down-s-line"></i></a>
                        <div className="dropdown-menu">
                            <a href="#about">Overview</a>
                            <a href="/BSPHCL-Directory.pdf" target="_blank" rel="noopener noreferrer">Phone Directory</a>
                            <a href="#gallery">Photo Gallery</a>
                            <a href="#asset">Asset Declaration</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <Link to="/notices" className="nav-link">Notices <i className="ri-arrow-down-s-line"></i></Link>
                        <div className="dropdown-menu">
                            <Link to="/notices">Notifications</Link>
                            <Link to="/notices">Notice Board</Link>
                            <Link to="/notices">Recruitment News</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <Link to="/services/home" className="nav-link">Consumer <i className="ri-arrow-down-s-line"></i></Link>
                        <div className="dropdown-menu">
                            <Link to="/services/pay-bill">Services</Link>
                            <Link to="/services/tariff">Tariff & Regulations</Link>
                            <Link to="/services/epub">e-Publication</Link>
                        </div>
                    </div>

                    <Link to="/login" className="btn btn-primary login-btn">
                        Login <i className="ri-arrow-right-line"></i>
                    </Link>
                </nav>

                <div className="hamburger" onClick={toggleMobileMenu}>
                    <i className="ri-menu-3-line"></i>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

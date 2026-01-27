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

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`glass-header ${isScrolled ? 'scrolled' : ''}`} style={{
            background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
            boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.1)' : 'none'
        }}>
            <div className="container nav-container">
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                    <div className="logo-icon">
                        <i className="ri-flashlight-line"></i>
                    </div>
                    <div className="logo-text">
                        <h1>बिहार स्टेट पावर होल्डिंग कं. लि.</h1>
                        <span>Bihar State Power Holding Company Ltd.</span>
                    </div>
                </Link>

                <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link to="/" className="nav-link" onClick={closeMobileMenu}>Home</Link>

                    <div className="dropdown">
                        <span className="nav-link">Company <i className="ri-arrow-down-s-line"></i></span>
                        <div className="dropdown-menu">
                            <a href="https://www.bsphcl.co.in/" onClick={closeMobileMenu}>Overview</a>
                            <a href="/BSPHCL-Directory.pdf" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>Phone Directory</a>
                            <a href="https://www.bsphcl.co.in/" onClick={closeMobileMenu}>Photo Gallery</a>
                            <a href="https://bpsm.bihar.gov.in/assets/Home.aspx?P1=1&P2=11&P3=0&P4=0" onClick={closeMobileMenu}>Asset Declaration</a>
                        </div>
                    </div>

                    <div className="dropdown">
                        <Link to="/notices" className="nav-link" onClick={closeMobileMenu}>Notices <i className="ri-arrow-down-s-line"></i></Link>
                        <div className="dropdown-menu">
                            <Link to="/notices" onClick={closeMobileMenu}>Notifications</Link>
                            <Link to="/notices" onClick={closeMobileMenu}>Notice Board</Link>
                            <Link to="/notices" onClick={closeMobileMenu}>Recruitment News</Link>
                        </div>
                    </div>

                    <div className="dropdown">
                        <Link to="/services/home" className="nav-link" onClick={closeMobileMenu}>Consumer <i className="ri-arrow-down-s-line"></i></Link>
                        <div className="dropdown-menu">
                            <Link to="/services/pay-bill" onClick={closeMobileMenu}>Services</Link>
                            <Link to="/services/tariff" onClick={closeMobileMenu}>Tariff & Regulations</Link>
                            <Link to="/services/epub" onClick={closeMobileMenu}>e-Publication</Link>
                        </div>
                    </div>

                    <Link to="/login" className="btn btn-primary login-btn" onClick={closeMobileMenu}>
                        Login <i className="ri-arrow-right-line"></i>
                    </Link>
                </nav>

                <div className="hamburger" onClick={toggleMobileMenu}>
                    <i className={isMobileMenuOpen ? "ri-close-line" : "ri-menu-3-line"}></i>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

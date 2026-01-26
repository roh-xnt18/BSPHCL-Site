import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Notices = () => {
    return (
        <>
            <Navbar />
            <div style={{ paddingTop: '100px', minHeight: '100vh', background: 'var(--dark-bg)' }}>
                <div className="container">
                    <div className="section-header" style={{ textAlign: 'left', marginBottom: '40px' }}>
                        <h2>Notices & Recruitment</h2>
                        <p>Latest updates, circulars, and employment opportunities.</p>
                    </div>

                    <div style={{ display: 'grid', gap: '24px' }}>
                        {/* Notice Card 1 */}
                        <div style={{
                            background: 'var(--card-bg)',
                            border: '1px solid var(--accent)',
                            padding: '24px',
                            borderRadius: '16px',
                            display: 'flex',
                            gap: '24px',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(0, 212, 255, 0.1)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '28px',
                                color: 'var(--accent)',
                                flexShrink: 0
                            }}>
                                <i className="ri-megaphone-line"></i>
                            </div>
                            <div>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '8px' }}>
                                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem' }}>Recruitment Notice 01/2024</h3>
                                    <span style={{ background: 'var(--primary)', padding: '4px 12px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>NEW</span>
                                </div>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
                                    Applications are invited for the post of Junior Electrical Engineer (JEE) and Assistant Engineer (AE).
                                    <br />Start Date: 20 Jan 2024 | End Date: 15 Feb 2024
                                </p>
                                <a href="#" className="btn btn-secondary" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>
                                    Download PDF <i className="ri-download-line"></i>
                                </a>
                            </div>
                        </div>

                        {/* Notice Card 2 (Old) */}
                        <div style={{
                            background: 'var(--card-bg)',
                            border: '1px solid var(--border-color)',
                            padding: '24px',
                            borderRadius: '16px',
                            display: 'flex',
                            gap: '24px',
                            alignItems: 'flex-start'
                        }}>
                            <div style={{
                                width: '60px',
                                height: '60px',
                                background: 'rgba(255, 255, 255, 0.05)',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '28px',
                                color: 'var(--text-muted)',
                                flexShrink: 0
                            }}>
                                <i className="ri-file-text-line"></i>
                            </div>
                            <div>
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '8px' }}>Tender Notice: Grid Maintenance</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>
                                    Request for proposal for annual maintenance of 33kV substations in Patna zone.
                                </p>
                                <a href="#" style={{ color: 'var(--accent)', textDecoration: 'underline' }}>View Details</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Notices;

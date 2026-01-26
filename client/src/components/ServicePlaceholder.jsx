import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const ServicePlaceholder = () => {
    const { serviceType } = useParams();

    const getServiceDetails = (type) => {
        switch (type) {
            case 'pay-bill':
                return { title: 'Pay Electricity Bill', icon: 'ri-bill-line', desc: 'Securely pay your monthly electricity bill via Credit Card, UPI, or Net Banking.' };
            case 'new-connection':
                return { title: 'New Connection Application', icon: 'ri-user-add-line', desc: 'Apply for a new domestic, commercial, or industrial power connection.' };
            case 'grievance':
                return { title: 'Grievance Redressal', icon: 'ri-customer-service-2-line', desc: 'Submit complaints regarding power outages, billing errors, or meter faults.' };
            default:
                return { title: 'Service Portal', icon: 'ri-service-line', desc: 'Welcome to the BSPHCL Online Service Portal.' };
        }
    };

    const details = getServiceDetails(serviceType);

    return (
        <>
            <Navbar />
            <div style={{
                paddingTop: '100px',
                minHeight: '80vh',
                background: 'var(--dark-bg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
            }}>
                <div className="container">
                    <div style={{
                        background: 'var(--card-bg)',
                        border: '1px solid var(--border-color)',
                        padding: '60px',
                        borderRadius: '24px',
                        maxWidth: '800px',
                        margin: '0 auto',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                            borderRadius: '20px',
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px',
                            marginBottom: '32px',
                            color: 'white',
                            boxShadow: '0 10px 30px rgba(0,212,255,0.3)'
                        }}>
                            <i className={details.icon}></i>
                        </div>
                        <h1 style={{ marginBottom: '16px', fontSize: '2.5rem' }}>{details.title}</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
                            {details.desc}
                        </p>

                        <div style={{ padding: '20px', background: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px dashed var(--border-color)' }}>
                            <p style={{ color: 'var(--accent)' }}>
                                <i className="ri-tools-line"></i> This feature is currently under active development.
                            </p>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '8px' }}>
                                Please check back later or visit the nearest BSPHCL office.
                            </p>
                        </div>

                        <Link to="/" className="btn btn-secondary" style={{ marginTop: '40px' }}>
                            <i className="ri-arrow-left-line"></i> Return to Home
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ServicePlaceholder;

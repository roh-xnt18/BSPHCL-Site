import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        { icon: 'ri-bill-line', title: 'Pay Bill Info', desc: 'View and pay your electricity bills instantly online.', link: '/services/pay-bill' },
        { icon: 'ri-user-add-line', title: 'New Connection', desc: 'Apply for a new domestic or commercial power connection.', link: '/services/new-connection' },
        { icon: 'ri-customer-service-2-line', title: 'Grievance', desc: 'Lodge complaints and track their status in real-time.', link: '/services/grievance' },
        { icon: 'ri-file-paper-2-line', title: 'Tenders', desc: 'Access latest tender notices and procurement documents.', link: '/services/tenders' },
        { icon: 'ri-briefcase-4-line', title: 'Recruitment', desc: 'Career opportunities and exam results.', link: '/notices' },
        { icon: 'ri-team-line', title: 'Employee Login', desc: 'Access for internal staff and pension portal.', link: '/login' }
    ];

    return (
        <section className="services section-padding" id="services">
            <div className="container">
                <div className="section-header">
                    <h2>Essential Services</h2>
                    <p>Quick access to the most used services for consumers and employees.</p>
                </div>

                <div className="grid-layout">
                    {services.map((service, index) => (
                        <Link to={service.link} className="service-card" key={index} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <div className="icon-box"><i className={service.icon}></i></div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                            <div className="arrow-icon"><i className="ri-arrow-right-line"></i></div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

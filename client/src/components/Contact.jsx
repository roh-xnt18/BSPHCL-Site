import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Sending...');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('Error: ' + data.message);
            }
        } catch (error) {
            setStatus('Error: Could not connect to server.');
            console.error(error);
        }
    };

    return (
        <section className="section-padding" id="contact">
            <div className="container">
                <div className="section-header">
                    <h2>Key Contacts</h2>
                    <p>Leadership team and important helpline numbers.</p>
                </div>

                <div className="contact-wrapper" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>

                    {/* Contact Form Section */}
                    <div className="contact-form-container" style={{ background: 'var(--card-bg)', padding: '30px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
                        <h3 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px' }}>Get in Touch</h3>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                style={inputStyle}
                            />
                            <textarea
                                name="message"
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
                            ></textarea>

                            <button type="submit" className="btn btn-primary" style={{ marginTop: '10px' }}>
                                Send Message <i className="ri-send-plane-fill"></i>
                            </button>
                            {status && <p style={{ marginTop: '10px', color: status.includes('Error') ? '#ef4444' : '#22c55e' }}>{status}</p>}
                        </form>
                    </div>

                    <div className="grid-layout contact-grid" style={{ gridTemplateColumns: '1fr' }}>
                        {/* Minister */}
                        <div className="contact-card highlight-card">
                            <div className="card-header">
                                <div className="icon-avatar"><i className="ri-government-fill"></i></div>
                                <div>
                                    <h3>Hon'ble Minister</h3>
                                    <span className="designation">Department of Energy</span>
                                </div>
                            </div>
                            <div className="contact-info">
                                <p><i className="ri-phone-line"></i> (0612)-2506224</p>
                                <p><i className="ri-printer-line"></i> Fax: 2506225</p>
                            </div>
                        </div>

                        {/* CMD */}
                        <div className="contact-card">
                            <div className="card-header">
                                <div className="icon-avatar"><i className="ri-user-star-fill"></i></div>
                                <div>
                                    <h3>Sri Manoj Kumar Singh, IAS</h3>
                                    <span className="designation">Chairman-cum-MD, BSPHCL</span>
                                </div>
                            </div>
                            <div className="contact-info">
                                <p><i className="ri-phone-line"></i> (0612)-2504036</p>
                                <p><i className="ri-printer-line"></i> Fax: 2504968</p>
                                <p><i className="ri-mail-send-line"></i> cmdbsphcl@bihar.gov.in</p>
                            </div>
                        </div>

                        {/* MD BSPTCL */}
                        <div className="contact-card">
                            <div className="card-header">
                                <div className="icon-avatar"><i className="ri-user-tie-fill"></i></div>
                                <div>
                                    <h3>Sri Rahul Kumar, IAS</h3>
                                    <span className="designation">Managing Director, BSPTCL</span>
                                </div>
                            </div>
                            <div className="contact-info">
                                <p><i className="ri-phone-line"></i> (0612)-2504442</p>
                            </div>
                        </div>

                        {/* We can add more cards here dynamically if needed */}

                        {/* Consumer Complaint */}
                        <div className="contact-card">
                            <div className="card-header">
                                <div className="icon-avatar"><i className="ri-customer-service-fill"></i></div>
                                <div>
                                    <h3>Online Defect/Complaint</h3>
                                    <span className="designation">For Consumer</span>
                                </div>
                            </div>
                            <div className="contact-info">
                                <p><i className="ri-phone-line"></i> 1912 (Toll Free)</p>
                                <p><i className="ri-global-line"></i> www.bsphcl.co.in</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

const inputStyle = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid var(--border-color)',
    padding: '12px 16px',
    borderRadius: '8px',
    color: 'var(--text-main)',
    fontSize: '0.95rem',
    outline: 'none',
    width: '100%',
    fontFamily: 'var(--font-body)'
};

export default Contact;

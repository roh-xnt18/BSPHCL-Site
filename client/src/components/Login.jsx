import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Mock Login Logic
        console.log('Logging in with:', credentials);
        // Simulate successful login
        setTimeout(() => {
            navigate('/'); // Redirect to home
        }, 1000);
    };

    return (
        <div className="login-page" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'var(--darker-bg)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background Orbs */}
            <div className="bg-orb orb-1" style={{ top: '-10%', left: '-10%', width: '500px', height: '500px' }}></div>
            <div className="bg-orb orb-2" style={{ bottom: '-10%', right: '-10%', width: '400px', height: '400px' }}></div>

            <div className="login-card" style={{
                background: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(20px)',
                border: '1px solid var(--border-color)',
                padding: '40px',
                borderRadius: '24px',
                width: '100%',
                maxWidth: '400px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                zIndex: 10
            }}>
                <div style={{ textAlign: 'center' }}>
                    <div style={{
                        width: '60px',
                        height: '60px',
                        background: 'linear-gradient(135deg, var(--accent), var(--primary))',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '32px',
                        color: 'white',
                        margin: '0 auto 16px'
                    }}>
                        <i className="ri-flashlight-line"></i>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '8px' }}>Welcome Back</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Sign in to continue to your dashboard</p>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Username / CA Number</label>
                        <div style={{ position: 'relative' }}>
                            <i className="ri-user-line" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                            <input
                                type="text"
                                name="username"
                                value={credentials.username}
                                onChange={handleChange}
                                placeholder="Enter your ID"
                                required
                                style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--border-color)',
                                    padding: '12px 16px 12px 48px',
                                    borderRadius: '12px',
                                    color: 'var(--text-main)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    fontFamily: 'var(--font-body)'
                                }}
                            />
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>Password</label>
                        <div style={{ position: 'relative' }}>
                            <i className="ri-lock-line" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }}></i>
                            <input
                                type="password"
                                name="password"
                                value={credentials.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                required
                                style={{
                                    width: '100%',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    border: '1px solid var(--border-color)',
                                    padding: '12px 16px 12px 48px',
                                    borderRadius: '12px',
                                    color: 'var(--text-main)',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    fontFamily: 'var(--font-body)'
                                }}
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary" style={{
                        marginTop: '8px',
                        justifyContent: 'center',
                        fontSize: '1rem',
                        padding: '14px'
                    }}>
                        Sign In <i className="ri-arrow-right-line"></i>
                    </button>
                </form>

                <div style={{ textAlign: 'center', marginTop: '16px' }}>
                    <a href="#" style={{ color: 'var(--accent)', fontSize: '0.9rem' }}>Forgot Password?</a>
                </div>
            </div>

            <Link to="/" style={{
                position: 'absolute',
                top: '40px',
                left: '40px',
                color: 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                zIndex: 20
            }}>
                <i className="ri-arrow-left-line"></i> Back to Home
            </Link>
        </div>
    );
};

export default Login;

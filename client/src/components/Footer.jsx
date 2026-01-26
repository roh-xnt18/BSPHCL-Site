import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="container footer-content">
                {/* Col 1: Address */}
                <div className="footer-col">
                    <h3>BSPHCL</h3>
                    <p>Bihar State Power Holding Company Ltd.<br />1st Floor, Vidyut Bhawan,<br />Jawahar Lal Nehru Marg,<br />Patna-800001</p>
                </div>

                {/* Col 2: Useful Info */}
                <div className="footer-col">
                    <h4>Useful Info</h4>
                    <ul>
                        <li><a href="#">Electric Supply Code 2007</a></li>
                        <li><a href="#">North Bihar Power Distribution Co. Ltd.</a></li>
                        <li><a href="#">South Bihar Power Distribution Co. Ltd.</a></li>
                        <li><a href="#">Bihar State Power Transmission Co. Ltd.</a></li>
                        <li><a href="#">Bihar State Power Generation Co. Ltd.</a></li>
                    </ul>
                </div>

                {/* Col 3: Important Links */}
                <div className="footer-col">
                    <h4>Important Links</h4>
                    <ul>
                        <li><a href="#">Pensioner Information</a></li>
                        <li><a href="#">Urja Auditorium</a></li>
                        <li><a href="#">Urja Cricket Stadium</a></li>
                        <li><a href="#">Consumer Grievance Redressal System</a></li>
                        <li><a href="#">BSPHCL Grievance Redressal System - For Employee & Pensioner</a></li>
                    </ul>
                </div>

                {/* Col 4: Contact */}
                <div className="footer-col">
                    <h4>Contact</h4>
                    <p><strong>Email:</strong> cmdbspcl@bihar.gov.in</p>
                    <p><strong>CIN:</strong> U40102BR2012SGC018495</p>
                    <div className="social-links">
                        <a href="#"><i className="ri-twitter-x-line"></i></a>
                        <a href="#"><i className="ri-facebook-circle-fill"></i></a>
                        <a href="#"><i className="ri-linkedin-fill"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>This website belongs to Bihar State Power Holding Company Ltd. Designed by In-plant Trainee of GECV Students, Vaishali</p>
            </div>
        </footer>
    );
};

export default Footer;

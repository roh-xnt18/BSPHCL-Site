import React from 'react';

const UpdatesBar = () => {
    return (
        <section className="updates-bar">
            <div className="container">
                <div className="update-label"><i className="ri-notification-3-line"></i> Latest Updates</div>
                <div className="marquee-wrapper">
                    <div className="marquee-content">
                        <span><i className="ri-checkbox-circle-fill"></i> Info: Self Income Declaration Format for the Employees of BSPHCL & its Subsidiaries for the Financial Year 2024-25 / Assessment Year 2025-26</span>
                        <span><i className="ri-checkbox-circle-fill"></i> Info: List of Holidays for the Calendar Year 2025. - 02-01-2025</span>
                        <span><i className="ri-checkbox-circle-fill"></i> Info: Regarding Medical Attendance Rules, 2018 for BSPHCL and its subsidiary companies. - 02-01-2018</span>
                        <span><i className="ri-checkbox-circle-fill"></i> Info: Tariff Rate 2021-22. - 07-04-2021</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdatesBar;

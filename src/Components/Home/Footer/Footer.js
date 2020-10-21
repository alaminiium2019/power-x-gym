import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footerBg">
            <div className="container text-white">
                <div className="row">
                    <div className="col-md-3">
                        <h1>POWERX</h1>
                    </div>
                    <div className="col-md-2">
                        <h6>Need Help?</h6>
                        <p>Help Center</p>
                        <p>Email Support</p>
                        <p>Live Chat</p>
                        <p>Gift Certificates</p>
                        <p>Send Us Feedback</p>
                    </div>
                    <div className="col-md-2">
                        <h6>Digital Resources</h6>
                        <p>Articles</p>
                        <p>E-books</p>
                    </div>
                    <div className="col-md-2">
                        <h6>Connect with Us</h6>
                        <p>Forum</p>

                    </div>
                    <div className="col-md-3">
                        <h6>Join Our Newsletter</h6>
                        <p>Get exclusive news, features and updates from the shredder weightloss Academy</p>
                    </div>
                </div>
                <p className="text-center pt-4 pb-2">&copy;2020 NamDam.com.bd. All Rights Reserved.</p>
            </div>

        </div>
    );
};

export default Footer;
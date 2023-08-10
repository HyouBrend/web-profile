import React from 'react';
import './index.css'

const Footer = () => {
    return (
        <div className="main-footer">
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <h4>Theodorus Christian Siringo Ringo</h4>
                        <ul className='list-unstyled'>
                            <li>+62 815 1155 2515</li>
                            <li>theocristian22@gmail.com</li>
                        </ul>
                    </div>
                    <div className="col text-end">
                        <ul className='list-unstyled social-icons'>
                            <div>
                                <li><a href="https://github.com/HyouBrend"><img src="github-icon.png" alt="GitHub" className="social-icon" /></a></li>
                            </div>
                            <div>
                                <li style={{ marginTop: '10px' }}><a href="https://www.instagram.com/theochristian.sir/"><img src="instagram-icon.png" alt="Instagram" className="social-icon" /></a></li>
                            </div>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm text-center">
                        &copy;{new Date().getFullYear()} Theodorus Christian Siringo Ringo | All rights reserved |
                        Terms Of Service | Privacy
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;

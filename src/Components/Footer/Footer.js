import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-primary">
                <div className="row">
                    <div className="col-md-3">
                        <h2>AmrFood.com</h2>
                        <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.
                        Code licensed MIT, docs CC BY 3.0.
Currently v5.1.3.</p>

                    </div>
                    <div className="col-md-3">
                        <h3>Address</h3>
                        <p>A.rahman Tower,3th floor,
                        mirpor-10,Dhaka,Bangladesh</p>

                    </div>
                    <div className="col-md-3">
                        <p>Contact:
                            880-1824682965
                        </p>

                    </div>
                    <div className="col-md-3">
                        <p>Social media</p>

                    </div>
                    <p className="text-center text-white">Al Right Reserved @AmrFood.com</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;
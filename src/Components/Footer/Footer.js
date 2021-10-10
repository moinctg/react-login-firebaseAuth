import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="bg-primary text-white p-3">
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
                        <h3>Contact</h3>
                         <p>880-1824682965</p>   
                        

                    </div>
                    <div className="col-md-3">
                        <h3>Social media</h3>
                        <p></p>

                    </div>
                    <p className="text-center text-white">Al Right Reserved @AmrFood.com</p>

                </div>
            </div>
        </div>
    );
};

export default Footer;
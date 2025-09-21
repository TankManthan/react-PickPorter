import React from 'react';

const HeroSection = () => {
    return (
        <div>
            <div className="row row1 g-0 d-flex justify-content-center">
                <div className="col-md-6 col-9 mb-2 ms-3 mt-5 me-5" id='intro'>
                    <button className="btn">PICK PORTER ENTERPRISE</button>
                    <h1 className='mb-4'>Realiable Goods Transportation Service With Seamless Control</h1>
                    <a href="/">Hassel-Free Enterprise Logistics  | </a>
                    <a href="/">Centralized Management  | </a><br />
                    <a href="/">Transparent Operations & Full Control |</a>

                </div>

                <div className="col-md-4 col-9 d-flex flex-column me-4 mb-2" id="loginForm">
                    <h4 className="text-center p-2">Fill out for more details</h4>

                    {/* Name */}
                    <div className="input-group mb-2 p-2">
                        <span className="input-group-text">
                            <i className="bi bi-person-fill"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Enter your Name*" />
                    </div>

                    {/* Company */}
                    <div className="input-group mb-2 p-2">
                        <span className="input-group-text">
                            <i className="bi bi-person-vcard-fill"></i>
                        </span>
                        <input type="text" className="form-control" placeholder="Enter your Company Name*" />
                    </div>

                    {/* Phone */}
                    <div className="input-group mb-2 p-2">
                        <span className="input-group-text">
                            <i className="bi bi-telephone-fill"></i>
                        </span>
                        <input type="number" className="form-control" placeholder="Enter your Phone Number*" />
                    </div>

                    {/* Email */}
                    <div className="input-group mb-2 p-2">
                        <span className="input-group-text">
                            <i className="bi bi-envelope-open-fill"></i>
                        </span>
                        <input type="email" className="form-control" placeholder="Enter your Email ID" />
                    </div>

                    <button className="btn">Get In Touch</button>
                </div>


            </div>
        </div>
    );
}

export default HeroSection;

import React from 'react';
import logo from '../assests/logo.png';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  " id='navbar'>
                <div className="container-fluid">
                    <a className="navbar-brand ms-5" href="/"><img className='img-fluid'
                        src={logo} alt="logo of brand" width={100} />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active " aria-current="page" href="/">For Enterprise</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="/">Driver Partner</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link " href="/">Support</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;

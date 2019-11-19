import React from 'react';
import { Link } from 'react-router-dom';

import { 
    Header
} from './style';
import './index';

function Navbar(){
    return(
        <Header>
            <div className="pos-f-t">
            <nav className="navbar navbar-dark">
                <div className="place-logo">
                <Link to="/" className="logo">
                        myLogo
                </Link>
                </div>
                
                <ul className="menu d-none d-xl-block d-lg-block ml-auto float-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About me</Link></li>
                    <li><Link to="/skills">Skills</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>

                <button className="navbar-toggler ml-auto float-right d-xl-none d-lg-none" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            </nav>
            </div>
        </Header>
    );
}

export default Navbar;
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const NavBar = () => {
    
    return (
        <nav className="nav-wrapper grey darken-3">
            <Container>
                <div>
                    <Link to='/' className="logo">Test</Link>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
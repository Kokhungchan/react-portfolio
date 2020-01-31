import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const NavBar = () => {

    return (
        <nav className = "nav-wrapper grey darken-3">
            <Container>
                <div>
                    <Link to ='/' className="brand-logo">KH</Link>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
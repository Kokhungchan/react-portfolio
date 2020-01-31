import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';

const NavBar = () => {
    const { NavBar } = useContext(PortfolioContext);
    const { networks } = footer;
    const { isEnabled } = githubButtons;

    return (
        <nav className="">
            <Container>
                <div>
                    <Link to='/' className="logo">Test</Link>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const NavBar = () => {

    return (
        <section id = "navbar">
            <Container>
                <Title title="Test" />
            </Container>
        </section>
    );
};

export default NavBar;
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className = "nav-wrapper grey darken-3">

            <a href="#" class="brand-logo">Logo</a>
            <ul class="center">
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

        </nav>
    );
};

export default NavBar;
import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <nav className = "nav-wrapper grey darken-3">

            <a href="#" class="brand-logo left">Logo</a>
            <ul class="right hide-on-med-and-down">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#experiences">Experiences</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#achievements">Achievements</a></li>
            </ul>

        </nav>
    );
};

export default NavBar;
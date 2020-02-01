import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import HeroImg from '../Image/LogoImg';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { img, title, name, subtitle, cta } = hero;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const $ = window.$;
  

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  window.onscroll = function() {
    scrollFunction();
  };

  return (
    <body id="hero" className="jumbotron">
      <script src="https://code.jquery.com/jquery-3.4.1.js" />
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#/">
          <HeroImg alt="logo" filename={img} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-lg-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Project
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div id="stars" />
      <div id="stars2" />
      <div id="stars3" />
      <section className="hero-banner">
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
            <h1 className="hero-title">
              {title || 'Hi, my name is'}{' '}
              <span className="text-color-main">{name || 'Kok Hung Chan'}</span>
              <br />
              {subtitle || 'React Developer.'}
            </h1>
          </Fade>
          <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
            <p className="hero-cta">
              <a className="cta-btn cta-btn--hero" href="#about">
                {cta || 'Know more'}
              </a>
            </p>
          </Fade>
        </Container>
      </section>
    </body>
  );
  

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      $('nav').addClass('scrolled');
    } else {
      $('nav').removeClass('scrolled');
    }
  }

  
};

export default Header;

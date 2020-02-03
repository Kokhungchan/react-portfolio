import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import { Container, Row, Col } from 'react-bootstrap';
import AboutImg from '../Image/AboutImg';


const Skills = () => {

    const [isDesktop, setIsDesktop] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 769) {
          setIsDesktop(true);
          setIsMobile(false);
        } else {
          setIsMobile(true);
          setIsDesktop(false);
        }
      }, []);    
  
      return (
        <section id="skills">
          <Container>
            <Title title="Skills" />
          </Container>
        </section>
      );
};

export default Skills;
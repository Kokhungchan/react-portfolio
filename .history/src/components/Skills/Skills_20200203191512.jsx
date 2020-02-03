import React, { useContext, useState, useEffect } from 'react';
import Title from '../Title/Title';
import { Container, Row } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';


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
            <Row>
            <Fade left={isDesktop} bottom={isMobile} duration={300} delay={150} distance="30px">
                <Title title="Skills" />
            </Fade>
            </Row>
          </Container>
        </section>
      );
};

export default Skills;
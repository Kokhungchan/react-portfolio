import React, {useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';
import { Container, Row} from 'react-bootstrap';


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
          <Row>
          <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={300} delay={150} distance="30px">
            <Title title="Skills" />
          </Fade>
          </Container>
          </Row>
        </section>
      );
};

export default Skills;
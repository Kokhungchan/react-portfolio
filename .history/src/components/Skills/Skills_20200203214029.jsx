import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col } from 'react-bootstrap';
import Title from '../Title/Title';

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
      <Col>
        <Container>
          <Fade left={isDesktop} bottom={isMobile} duration={300} delay={150} distance="30px">
        
            <div className="skills box">
                <p>Html</p>
                <p>90%</p>
                    <div className="skills skill">
                        <div className="skills level"></div>
                    </div>
            </div>
            <div className="skills box">
                <p>Css</p>
                <p>85%</p>
                    <div className="skills skill">
                        <div className="skills level"></div>
                    </div>
            </div>
            <div className="skills box">
                <p>React</p>
                <p>80%</p>
                    <div className="skills skill">
                        <div className="skills level"></div>
                    </div>
            </div>
       
          </Fade>
        </Container>
      </Col>
    </section>
  );
};

export default Skills;

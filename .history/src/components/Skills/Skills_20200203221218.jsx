import React, { useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Col } from 'react-bootstrap';

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
          <Fade left={isDesktop} bottom={isMobile} duration={300} delay={150} distance="30px">
            <div className="skills box">
                <ul>
                    <li class="html">HTML</li>
                    <li class="css">CSS</li>
                    <li class="js">JavaScript</li>
                    <li class="react">React</li>
                </ul>
            </div>
       
          </Fade>

    </section>
  );
};

export default Skills;

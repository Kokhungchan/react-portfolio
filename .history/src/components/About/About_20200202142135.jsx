import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import AboutImg from '../Image/AboutImg';
import PortfolioContext from '../../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={300} delay={100} distance="30px">
              <div className="about-wrapper__image">
                <AboutImg alt="profile picture" filename={img} />
              </div>
            </Fade>
          </Col>
          <Col md={5} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={300} delay={100} distance="30px">
              <div className="about-wrapper__info">
                <p className="about-wrapper__info-text">
                  {paragraphOne ||
                    'Hello There! I am Kok Hung Chan. A graduate from UWE majoring software engineering. '}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphTwo ||
                    'Passionate on front-end coding. Love to develop mobile applications. Experience in developing applications using React-native, JavaScript, and websites using Html, Css.'}
                </p>
                <p className="about-wrapper__info-text">
                  {paragraphThree || 'Always stay up to date with latest technology. Tech geek and a pet lover too! '} &#128516;
                </p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href="https://drive.google.com/file/d/18J-G3HfoRInj5DkYBR6efVUn1udFUGDE/view"
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
        <Row className="about-wrapper-icon">
            <Fade up={isDesktop} bottom={isMobile} duration={300} delay={100} distance="30px">
              <div className="about-wrapper-icon_icon">
                <ul class="icons major">
                <li><i class="fab fa-react"></i></li>
                <li><i class="fab fa-github-square"></i></li>
                <li><i class="fas fa-code"></i></li>
                <li><i class="fab fa-js-square"></i></li>
                </ul>
              </div>
            </Fade>
        </Row>
      </Container>
    </section>
  );
};

export default About;

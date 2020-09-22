import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Resume() {
  return (
    <div className="resume-image" id = "resume">
      <div className=" titles">
          <h1>RESUME</h1>
      </div> 
      {/* EDUCATION */}
      <Container className = "resume-container">
        <Row>
          <Col xs={5} md={4}>
            <h2>EDUCATION</h2>
            <h4>Jan 2018 - Dec 2020</h4>
          </Col>
          <Col>
            <h5>North-West University</h5>
            <h5>BSc Information Technology</h5>
            <p>I have received a certificate from The Golden Key International Society for having 18 distinctions up to present in university.</p>
            <p>I have yet the second semester to finish my degree cum laude.</p>
          </Col>
        </Row>
      </Container>

      {/* Employment */}
      <Container className = "resume-container">
        <Row>
          <Col xs={5} md={4}>
            <h2>EMPLOYMENT HISTORY</h2>
            <h4>Jan 2019 - Dec 2019</h4>
          </Col>
          <Col>
            <h5>Flutter app developer at Specials Fest</h5>
            <p>I helped developed the app Specials Fest.</p>
            <p>I did alot of the programming, app testing and store management on both IOS and Android app stores.</p>
          </Col>
        </Row>
        <br></br><br></br>
        <Row>
        <Col xs={5} md={4}>
            <h4>Jan 2020 - July 2020</h4>
          </Col>
          <Col>
            <h5>Wordpress website developer at Eternaweb</h5>
            <p>I developed e-commerce/websites in Wordpress for both local and international companies. </p>
          </Col>
        </Row>
      </Container>

      {/* Skills */}
      <Container className = "resume-container">
          <Row>
            <Col xs={5} md={4}>
              <h2>SKILLS</h2>
            </Col>
            <Col >
              <h5>C#</h5>
              <h5>C++</h5>
              <h5>CSS</h5>
            </Col>
            <Col >
              <h5>Flutter</h5>
              <h5>Java</h5>
              <h5>Javascript</h5>
            </Col>
            <Col >
              <h5>Python</h5>
              <h5>HTML</h5>
            </Col>
          </Row>
        </Container>

        {/* Languages */}
        <Container className = "resume-container last">
          <Row>
            <Col xs={5} md={4}>
              <h2>LANGUAGES</h2>
            </Col>
            <Col >
            <h5>Afrikaans</h5>
              <h5>English</h5>
            </Col>
          </Row>
        </Container>
      
  </div>
    
  );
}

export default Resume;
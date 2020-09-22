import React from 'react';
import { Button } from 'react-bootstrap';

function Intro() {
  return (
    <div id = "home" className="bg-image intro">
        <div className="intro-text">
            <h1>Bernard de Wet</h1>
            <h3>Aspiring software developer</h3>
            <Button variant="outline-dark" href="mailto:ekisbernard@gmail.com">Contact me</Button>
            <Button variant="outline-dark" href="http://BernardDW.github.io/My-Portfolio/Bernard de Wet – Resume.pdf" target="_blank" className="dl">Download Resume</Button>
        </div>
    </div>
  );
}

export default Intro;
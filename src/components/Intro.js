import React from 'react';
import { Button } from 'react-bootstrap';

function Intro() {
  return (
    <div className="intro-image">
        <div className="intro-text">
            <h1>Bernard de Wet</h1>
            <h3>Aspiring software developer</h3>
            <Button variant="outline-dark" href="mailto:ekisbernard@gmail.com">Contact me</Button>
        </div>
    </div>
  );
}

export default Intro;
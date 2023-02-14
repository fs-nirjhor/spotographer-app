import React from 'react';
import { Row, Col, Container } from "react-bootstrap";
import Nirjhor from "../../images/Nirjhor-rounded.png";

const AboutBody = () => {
return (
  <Container className="about-body my-4">
    <Row xs={1} md={2}>
       <Col className="my-2">
          <img src={Nirjhor} alt="nirjhor" className="w-100"/>
       </Col>
       <Col className="my--2">
          <h3>I'm FS Nirjhor</h3>
          <h2>About My Goal</h2>
          <p>Hi, I'm FS Nirjhor. I'm completing my BSC in Botany. Besides I'm learning Web Development. My Goal is being an expert Web Developer. To reach my destination I'm practicing hardly. Everyday I spend minimum 10 hours for learning new technologies and practising it. I believe that I can do the best in this area. Hard work is the key and I'm doing my best.</p>
       </Col>
    </Row>
  </Container>
);
};

export default AboutBody;
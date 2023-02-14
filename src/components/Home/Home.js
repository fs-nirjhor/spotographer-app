import React from 'react';
import Slider from "../Slider/Slider";
import ServiceArea from "../ServiceArea/ServiceArea";
import Moments from "../Moments/Moments";
import Container from 'react-bootstrap/Container';

const Home = () => {
return (
  <>
    <Slider/>  
    <Container >
        <ServiceArea/>
        <Moments/>
    </Container>
  </>
);
};

export default Home;
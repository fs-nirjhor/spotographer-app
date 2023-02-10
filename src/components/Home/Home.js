import React from 'react';
import Header from "../Header/Header";
import Slider from "../Slider/Slider";
import ServiceArea from "../ServiceArea/ServiceArea";
import Moments from "../Moments/Moments";
import Footer from "../Footer/Footer";
import Container from 'react-bootstrap/Container';

const Home = () => {
return (
  <main>
    <Header/>  
    <Slider/>  
    <Container >
        <ServiceArea/>
        <Moments/>
    </Container>
    <Footer/>  
  </main>
);
};

export default Home;
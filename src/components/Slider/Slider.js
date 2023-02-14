import {Carousel,Image,Button} from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Slider() {
  const [sliderInfo, setSliderInfo ] = useState([]);
  useEffect(() => {
    fetch(`SliderData.json`)
    .then(res => res.json())
    .then(data => {
      setSliderInfo(data);
    })
    .catch(error => console.log(error));
  }, []);
 
  return (
    <Carousel className="my-slider">
      {sliderInfo.map((slider) => (
        <Carousel.Item key={slider.id}>
          <Image fluid className="d-block" src={slider.image} alt="Slider" />
          <Carousel.Caption className="py-1">
            <h5>{slider.subheading}</h5>
            <h2>{slider.heading}</h2>
            <p>I Capture Sports Moments and Actions.</p>
            <Button as={Link} to="/about" variant="outline" className="my-btn">
              {slider.button}
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;

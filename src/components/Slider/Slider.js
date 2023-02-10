import {Carousel,Image,Button} from "react-bootstrap";
import sliderOne from "../../images/sliderOne.jpg";
import sliderTwo from "../../images/sliderTwo.jpg";
import sliderThree from "../../images/sliderThree.jpg";
import "./Slider.css";

function Slider() {
  const carouselImages = [sliderOne, sliderTwo, sliderThree];
  return (
    <Carousel className="my-slider">
      {carouselImages.map((image,i) => (
        <Carousel.Item key={i}>
          <Image fluid className="d-block" src={image} alt="Slider" />
          <Carousel.Caption className="py-1">
            <h5>SPOTOGRAPHER</h5>
            <h3>Sports Photographer</h3>
            <p>I Capture Sports Moments and Actions.</p>
            <Button variant="outline" className="my-btn">
              MORE ABOUT ME
            </Button>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slider;

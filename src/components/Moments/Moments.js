import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import galleryOne from "../../images/gallery-one.jpg";
import galleryTwo from "../../images/gallery-two.jpg";
import galleryThree from "../../images/gallery-three.jpg";
import galleryFour from "../../images/gallery-four.jpg";
import galleryFive from "../../images/gallery-five.jpg";
import gallerySeven from "../../images/gallery-seven.jpg";
import galleryNine from "../../images/gallery-nine.jpg";
import galleryTen from "../../images/gallery-ten.jpg";

const Moments = () => {
  const momentsPhoto = [
    galleryOne,
    galleryTwo,
    galleryThree,
    galleryFour,
    galleryFive,
    gallerySeven,
    galleryNine,
    galleryTen,
  ];
  return (
    <section className="moments">
      <h1 className="text-center py-5">Some Moments</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {momentsPhoto.map((photo, i) => (
          <Col key={i}>
            <Image fluid src={photo} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Moments;

import React from "react";
import { Row, Col, Image } from "react-bootstrap";
import { useState, useEffect } from "react";

const Moments = () => {
  const [momentsPhoto, setMomentsPhoto] = useState([]);
  useEffect(() => {
    fetch(`MomentsData.json`)
    .then(res => res.json())
    .then(data => {
      setMomentsPhoto(data);
    })
    .catch(error => console.log(error));
  }, []);
  return (
    <section className="moments mb-5">
      <h1 className="text-center py-5">Some Moments</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {momentsPhoto.map((photo) => (
          <Col key={photo.id}>
            <Image fluid src={photo.img} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default Moments;

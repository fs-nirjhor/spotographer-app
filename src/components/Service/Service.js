import React from 'react';
import {Button, Card, Col} from 'react-bootstrap';

const Service = (props) => {
  const {image,title,price,details} = props.service;
return (
  <Col>
     <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Title>Price: ${price}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Button variant="outline" className="my-btn w-50">
              BOOK NOW
            </Button>
        </Card.Body>
      </Card>
  </Col>
);
};

export default Service;
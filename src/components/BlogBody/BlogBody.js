import React from 'react';
import { Col, Card } from "react-bootstrap";

const BlogBody = (props) => {
  const {blog} = props ;
return (
    <Col className="my-3">
      <Card className="p-3">
       <h4>{blog.question}</h4>
       <p>{blog.answer}</p>
       </Card>
    </Col>
);
};

export default BlogBody;
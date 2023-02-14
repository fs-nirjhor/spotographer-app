import React from 'react';
import Hero from "../Hero/Hero";
import BlogBody from "../BlogBody/BlogBody";
import BlogData from "./BlogData.json";
import { Container, Row } from "react-bootstrap";


const Blog = () => {
return (
  <div>
    <Hero/>  
      <Container >
      <h3 className="text-center my-5">Questions Answer</h3>
      <Row xs={1} lg={3} >
      {
        BlogData.map(blog => <BlogBody key={blog.id} blog={blog}/> )
      }
      </Row>
      </Container>
  </div>
);
};

export default Blog;
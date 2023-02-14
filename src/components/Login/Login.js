import React from "react";
import { Form, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Container className="text-center mt-5">
        <h1>Log In Now</h1>
      <p>Please login to continue using our website.</p>
      <br />
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Link to="*" className="text-decoration-none">
          Forgot Password?
        </Link>
        <Link to="*" className="btn my-btn px-3 my-3 d-block">
          Login
        </Link>
        <p>New to Spotographer?  
          <Link to="*" className="text-decoration-none"> Please Create New Account.</Link>
        </p>
        <hr />
        <Link to="*" className="btn my-btn px-3 my-3 d-block">
         <img src="https://img.icons8.com/color/48/null/google-logo.png" width="30px" alt="Google"/> Continue With Google 
        </Link>
        <Link to="*" className="btn my-btn my-3 d-block">
         <img src="https://img.icons8.com/sf-black-filled/64/null/github.png"  width="35px" alt="GitHub"/> Continue With GitHub 
        </Link>
      </Form>
      
    </Container>
  );
};

export default Login;

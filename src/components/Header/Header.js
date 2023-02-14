import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../images/logo.png";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky-top">
      <Navbar bg="dark" variant="dark" expand="md" className="pt-2">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} to="/about">About</Nav.Link>
              <Nav.Link as={NavLink} to="/blog">Blog</Nav.Link>
              <Nav.Link as={NavLink} to="/login" className="btn my-btn px-3">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;

import { Navbar, Nav, Container } from "react-bootstrap";
import Logo from "../../images/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="md" fixed="top" className="pt-2">
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#blog">Blog</Nav.Link>
              <Nav.Link href="#login" className="btn my-btn px-3">
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

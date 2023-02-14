import { Image, Container } from "react-bootstrap";
import Logo from "../../images/logo.png";

function Footer() {
  return (
    <footer className="bg-dark py-5 mt-auto">
      <Container className="text-light text-center">
        <Image fluid src={Logo} />
        <p className="pt-3">&copy; 2022 Spotographer, All Rights Reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;

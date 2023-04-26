import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import FormPage from "./Form";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Contact us</Navbar.Brand>
        </Container>
      </Navbar>
      <br />
      <FormPage />
    </>
  );
}

export default Header;

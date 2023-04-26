import Alert from "react-bootstrap/Alert";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function Success() {
  return (
    <Container>
      <Alert style={{ textAlign: "center" }}>
        You have sent a message to Desire irankunda successfully
      </Alert>
      <Button>
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Back
        </Link>
      </Button>
    </Container>
  );
}

export default Success;

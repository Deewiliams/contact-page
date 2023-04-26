import Button from "react-bootstrap/Button";
import { Container, Card, Stack } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function FormPage() {
  return (
    <Container>
      <br />
      <Card style={{ width: "30rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Full Names</Form.Label>
              <Form.Control type="text" placeholder="Enter your full names" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Stack gap={2} className="col-md-5 mx-auto">
              <Button variant="secondary">Submit form</Button>
            </Stack>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FormPage;

import { Container, Card, Stack, Button, Form } from "react-bootstrap";
import image from "../image/contactus.jpg";
import { useForm } from "@formspree/react";
import Success from "./Success";

function FormPage() {
  const [state, handleSubmit] = useForm("xyyalvwd");
  if (state.succeeded) {
    return <Success />;
  }
  return (
    <Container className="contact">
      <br />
      <Card style={{ width: "30rem" }}>
        <Card.Img
          variant="top"
          src={image}
          alt="contact us"
          height={200}
          width={100}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: "center" }}>
            Hello I'm{" "}
            <span style={{ fontWeight: "bold" }}>Desire Irankunda</span>
          </Card.Title>
          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Full Names</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your full names"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} name="message" required />
            </Form.Group>

            <Stack gap={2} className="col-md-5 mx-auto">
              <Button
                variant="secondary"
                type="submit"
                disabled={state.submitting}
              >
                Submit form
              </Button>
            </Stack>
          </form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default FormPage;

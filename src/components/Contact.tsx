import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import "../css/TimeLine.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useState } from "react";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        formData,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log("result", result);
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div style={{ backgroundColor: "#001f3f", padding: "50px 20px" }}>
      <Container fluid>
        <h2
          className="text-center mb-3 text-light"
          data-aos="zoom-in"
          style={{ whiteSpace: 'nowrap' }}
        >
          Let's work <span className="gradient-text">together!</span>
        </h2>
        <h5
          className="text-center mb-4 text-light"
          data-aos="zoom-in"
          style={{ whiteSpace: 'nowrap' }}
        >
          Just simple like that!
        </h5>

        <Row className="g-4 justify-content-center">
          {/* Left: Contact Form */}
          <Col xs={12} md={6}>
            <Card className="h-100 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white" }}>
              <Card.Body>
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3">
                    <Form.Label className="h5">Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transparent-input"
                      placeholder="Enter your name"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="h5">Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transparent-input"
                      placeholder="Enter your email"
                    />
                  </Form.Group>
                  <Form.Group className="mb-3">
                    <Form.Label className="h5">Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="transparent-input"
                      placeholder="Write your message"
                    />
                  </Form.Group>
                  <div className="d-grid">
                    <Button variant="primary" type="submit" className="h5">
                      Send
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* Right: Contact Info */}
          <Col xs={12} md={5}>
            <Card className="h-100 shadow-sm" style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "white" }}>
              <Card.Body>
                <h3><PhoneInTalkIcon style={{ fontSize: "30px" }} /> <strong>Phone</strong></h3>
                <p className="ms-4 mb-3">+91 9487801101</p>
                <hr style={{ borderColor: "white" }} />

                <h3><AttachEmailIcon style={{ fontSize: "30px" }} /> <strong>Email</strong></h3>
                <p className="ms-4 mb-3">
                  <a href="mailto:devipavithra12603@gmail.com" style={{ color: "white", textDecoration: "none" }}>
                    devipavithra12603@gmail.com
                  </a>
                </p>
                <hr style={{ borderColor: "white" }} />

                <h3><FmdGoodIcon style={{ fontSize: "30px" }} /> <strong>Location</strong></h3>
                <p className="ms-4 mb-2">
                  <a href="https://www.google.com/maps/search/?api=1&query=8/215+Kamarajar+street,+Ayypuram,+Tenkasi+627805" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
                    8/215, Kamarajar street,<br />Ayyapuram - 627 805
                  </a>
                </p>
                <p className="ms-4">
                  <a href="https://www.google.com/maps/search/?api=1&query=Tenkasi+627811" target="_blank" rel="noopener noreferrer" style={{ color: "white", textDecoration: "none" }}>
                    Tenkasi - 627 811
                  </a>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;

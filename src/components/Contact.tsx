import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "../css/TimeLine.css";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e:any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();

    emailjs
      .send(
        "YOUR_SERVICE_ID",   // from EmailJS dashboard
        "YOUR_TEMPLATE_ID",  // from EmailJS dashboard
        formData,
        "YOUR_PUBLIC_KEY"    // from EmailJS dashboard
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // reset form
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <div style={{ backgroundColor: "#001f3f", padding: "70px" }}>
      <Container>
        <Row>
          <Col md={6} style={{ color: "white" }} className="contact-form-box">
            <Form onSubmit={handleSubmit} style={{ padding: "25px" }}>
              <Form.Group className="mb-3">
                <Form.Label className="h3">Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="transparent-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="h3">Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="transparent-input"
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label className="h3">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="transparent-input"
                />
              </Form.Group>
              <Button variant="primary" type="submit" className="h2 w-25">
                Send
              </Button>
            </Form>
          </Col>

            {/* Right Column: Contact Info */}
            <Col
              className="ms-5 contact-info-box"
              md={5}
              style={{ marginLeft: "140px" }}
            >
              <h3>
                <PhoneInTalkIcon style={{ fontSize: "35px" }} />
                <strong> Phone</strong>
              </h3>
              <h5 className="ms-5">+91 9487801101</h5>
              <hr />

              <h3>
                <AttachEmailIcon style={{ fontSize: "35px" }} />
                <strong> Email</strong>
              </h3>
              <h5 className="ms-5">
                <a
                  href="mailto:devipavithra12603@gmail.com"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  devipavithra12603@gmail.com
                </a>
              </h5>
              <hr />

              <h3>
                <FmdGoodIcon style={{ fontSize: "35px" }} />
                <strong> Location</strong>
              </h3>
              <h5 className="ms-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=8/215+Kamarajar+street,+Ayypuram,+Tenkasi+627805"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  8/215, Kamarajar street, <br />Ayyapuram - 627 805,
                </a>
              </h5>
              <h5 className="ms-5">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Tenkasi+627811"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Tenkasi - 627 811
                </a>
              </h5>
              <br />
            </Col>
        </Row>
      </Container>
      </div>

  );
}

export default Contact;

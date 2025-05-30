import { Container, Row, Col } from "react-bootstrap";
import "../css/TimeLine.css";

function About() {
  return (
    <div
      style={{
        backgroundColor: "#001f3f",
        width: "100vw",
        
        padding: "70px",
      }}
    >
      <h2 className="text-center mb-4 text-light" data-aos="fade-up">
        About Me
      </h2>

      <div id="about" className="py-5 text-light">
        <Container>
          <Row>
          
            <Col md={12} data-aos="fade-left">
              <p className="text-justify" style={{ fontSize: "20px" }}>
                Enthusiastic Full Stack Developer skilled in building responsive
                and dynamic web applications using PHP (Laravel) and React.
                Proficient in front-end technologies including HTML, CSS, and
                JavaScript, with a strong understanding of secure, scalable
                backend systems. Committed to writing clean, maintainable code
                and continuously learning new technologies to deliver robust
                full-stack solutions.
              </p>
              <p className="text-justify" style={{ fontSize: "20px" }}>
                Motivated and detail-oriented Full Stack Developer with a strong
                foundation in PHP and Laravel for backend development and React
                for dynamic, responsive front-end applications. Proficient in
                designing and developing web applications with clean,
                maintainable code and a focus on user experience. Familiar with
                RESTful APIs, database management (MySQL), and modern front-end
                practices using React, including state management and
                component-driven architecture. Eager to contribute to
                collaborative development environments, learn new technologies,
                and apply problem-solving skills to deliver innovative
                solutions.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default About;

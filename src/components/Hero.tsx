// import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../assets/DeviPavithra_Resume_PhpFullStackDeveloper (3).pdf";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import '../css/TimeLine.css';
// import logo from '../';

function Hero() {
  return (
    <div
    className="bg-dark"
      style={{
        padding: '70px',
      }}
    >
    <div
      id="home"
      className="d-flex align-items-center vh-100  text-white"
    >
      <Container>
        <Row>
          <Col md={8} data-aos="fade-right">
            <h3>
              Hello, I'm <span className="gradient-text">DEVI PAVITHRA R</span>
            </h3>
            <h1
              style={{
                // width: "500px",
                fontSize: "70px",
                // wordBreak: "break-word",
              }}
            >
              <span className="gradient-text">PHP Fullstack Developer</span>
            </h1>
            <br />

            <div className="d-flex align-items-center mt-3">
              <a
                href={resume}
                download="DeviPavithra_Resume.pdf"
                className="btn btn-info text-dark p-3 d-flex align-items-center me-3"
              >
                Download My Resume{" "}
                <ArrowCircleDownIcon style={{ fontSize: 30, color: "black" }} />
              </a>
              <a
                href="https://github.com/DevipavithraR"
                target="_blank"
                className="text-white me-3 ms-5"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/feed/"
                target="_blank"
                className="text-white me-3 ms-3"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href="https://www.naukri.com/mnjuser/homepage"
                target="_blank"
                className="text-white ms-3"
              >
                <span className="naukri-icon" style={{ fontSize:"30px"}}></span>
              </a>
            </div>
          </Col>
          {/* <Col md={4} data-aos="fade-left" className="text-center">
            <img src="" alt="Hero" className="img-fluid rounded" />
          </Col> */}
        </Row>
      </Container>
    </div></div>
  );
}

export default Hero; 
import { Container, Row, Col} from 'react-bootstrap';
import '../css/TimeLine.css';

function About() {
  return (
    <div
      style={{
        backgroundColor: '#001f3f',
       
        padding: '70px',
      }}
    >
              <h2 className="text-center mb-4 gradient-text" data-aos="fade-up">About Me</h2>

    <div id="about" className="py-5 text-light">
      
      <Container>
        <Row>
          {/* <Col md={4} data-aos="fade-right">
            <Image src={logo} fluid rounded style={{width:"150px",height:"150px"}} />
          </Col> */}
          <Col md={12} data-aos="fade-left">
           <p style={{fontSize:"20px",textAlign:"center"}}>Enthusiastic Full Stack Developer skilled in building responsive and dynamic web applications using PHP (Laravel)
and React. Proficient in front-end technologies including HTML, CSS, and JavaScript, with a strong understanding of
secure, scalable backend systems. Committed to writing clean, maintainable code and continuously learning new
technologies to deliver robust full-stack solutions.
</p>
          </Col>
        </Row>
      </Container>
    </div></div>
  );
}

export default About;
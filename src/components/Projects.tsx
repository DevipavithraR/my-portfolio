import { Container, Row, Col, Card } from 'react-bootstrap';
import '../css/TimeLine.css';
import empmngt from '../assets/employeemngtsys.jpg';
import cgpacal from '../assets/cgpacalc.jpg';
import calc from '../assets/download.jpg';

function Projects() {
  const projectList = [
    { 
      title: "Employee Management System", 
      description: "A responsive and user-friendly web application built with React and Bootstrap for the frontend, and Laravel for the backend. It enables efficient management of employee records, including CRUD operations, attendance tracking, leave management, and detailed profile views, ensuring seamless and organized HR processes.", 
      image:empmngt
    },
    { 
      title: "CGPA Calculator", 
      description: "A simple and interactive web-based tool developed with HTML, CSS, and JavaScript for the frontend, and PHP for backend processing, designed to calculate and display a student’s CGPA based on inputted grades and credit values.", 
      image: cgpacal
    },
    { 
      title: "Calculator", 
      description: "A basic and interactive calculator built with HTML, CSS, and JavaScript, allowing users to perform arithmetic operations like addition, subtraction, multiplication, and division with a user-friendly interface.", 
      image:calc
    }
  ];

  return (
        
    <div className="bg-dark" style={{width: "100vw", padding: '70px' }}>
      <div id="projects" className="py-5">
                  <h2 className="text-center mb-4 text-light" data-aos="fade-up">Projects</h2>

        <Container>
          <Row>
            {projectList.map((project, idx) => (
              <Col md={4} key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
                <Card className="mb-4 d-flex flex-column custom-card" style={{backgroundColor:"#333333",color:"white"}}>
                  <Card.Img variant="top" src={project.image} alt={project.title} className="project-image" />
                  <Card.Body className="card-body-content">
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text className="project-description">{project.description}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Projects;

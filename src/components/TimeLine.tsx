import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../css/TimeLine.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

type TimeLineProps = {
  title: string;
  subtitle: string;
  percentage: string;
  date: string;
  isExperience: boolean;
};

const TimelineItem: React.FC<TimeLineProps> = ({ title, subtitle, percentage, date, isExperience }) => { 

  return (
    
    <div className="timeline-item" data-aos="fade-up">
<div className={`timeline-content text-light ${isExperience ? 'hover-effect' : ''}`}>
        <span className="text-info">{date}</span><hr />
        <h5>{title}</h5>
        <h6 className="text-light">{subtitle}</h6>
        
        {/* Wrap percentage/description for hover effect */}
        {isExperience ? (
          <div className="timeline-description">
            <p>{percentage}</p>
          </div>
        ) : (
          <p>{percentage}</p>  // Always show in education
        )}
      </div>
    </div>
  );
};


const TimeLine = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // Animation duration (in ms)
      once: true,      // Animate only once
    });
  }, []);

  const education = [
    {
      title: 'Master of Computer Science',
      subtitle: 'Kamarajar Government Arts College,Surandai',
      percentage: '87%',
      date: '2023 - 2025',
    },
    {
      title: 'Bachelor of Computer Science',
      subtitle: 'USP Arts and Science College for Women,Kodikurichi',
      percentage: '86%',
      date: '2020 - 2023',
    },{
      title: 'XII',
      subtitle: 'TKD Girls Higher Secondary School,Coutrallam',
      percentage: '61%',
      date: '2018 - 2020',
    },{
      title: 'X',
      subtitle: 'Government Higher secondary School,Tenkasi',
      percentage: '81%',
      date: '2017 - 2018',
    },
  ];

  const experience = [
    {
      title: 'PHP Fullstack Developer Intern',
      subtitle: 'KiteCareer',
      percentage: 'Completed an internship where I developed and maintained web applications using Laravel and React.Developed an Employee Management System project to handle employee data, attendance tracking, and role-based access control, using Laravel for the backend and React for the frontend.Integrated backend APIs and optimized database queries using MySQL.Learned to integrate RESTful APIs for seamless communication between frontend and backend.Participated in code reviews and contributed to system architecture planning',
      date: 'Dec 2024 - May 2025',
    },
  ];

  return (
    <div
        className="bg-dark"
      style={{
        padding: "4rem 1rem", // Responsive padding instead of fixed 70px
        width: "100vw",
        boxSizing: "border-box",
      }}
    >
    <div id="resume" className="container py-5">
        <div className="row justify-content-center">
       {/* Education Section */}
          <div className="col-12 col-md-6 mb-5 mb-md-0">
            <h2
              className="mb-4 text-center text-light"
              data-aos="fade-up"
              style={{ wordBreak: "break-word" }}
            >
              <SchoolIcon style={{ fontSize: "50px", color: "purple" }} /> My{" "}
              <span className="gradient-text">Education</span>
            </h2>
  <div className="timeline">
    {education.map((item, index) => (
      <TimelineItem key={index} {...item} isExperience={false} />
    ))}
  </div>
</div>

{/* Experience Section */}
          <div className="col-12 col-md-6">
            <h2
              className="mb-4 text-center text-light"
              data-aos="fade-up"
              style={{ wordBreak: "break-word" }}
            >
              <BusinessCenterIcon style={{ fontSize: "50px", color: "purple" }} /> My{" "}
              <span className="gradient-text">Experience</span>
            </h2>
  <div className="timeline">
    {experience.map((item, index) => (
      <TimelineItem key={index} {...item} isExperience={true} />
    ))}
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default TimeLine;
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../css/TimeLine.css';

const Skills = () => {
  const skills = [
    { icon: 'fab fa-html5', color: '#E34F26', name: 'HTML5' },
    { icon: 'fab fa-css3-alt', color: '#1572B6', name: 'CSS3' },
    { icon: 'fab fa-js', color: '#F7DF1E', name: 'JavaScript' },
    { icon: 'fab fa-bootstrap', color: '#FF2D20', name: 'Bootstrap' },
    { icon: 'fab fa-react', color: '#61DAFB', name: 'React' },
    { icon: 'fab fa-php', color: '#8892BF', name: 'PHP' },
    { icon: 'fab fa-laravel', color: '#007FFF', name: 'Laravel' },
    { icon: 'fas fa-database', color: '#4479A1', name: 'MySQL' }
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
    id='skill'
      style={{
        backgroundColor: '#001f3f',
        minHeight: '70vh',
        padding: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <h2
        className="text-center mb-4 text-light"
        data-aos="zoom-in"
        style={{ whiteSpace: 'nowrap' }}
      >
        Skills
      </h2><br />

      <div
        data-aos="fade-up"
        style={{
          display: 'flex',
          gap: '20px',
          overflowX: 'auto',
          padding: '10px',
          maxWidth: '90vw',
          justifyContent: 'center',
          flexWrap: 'nowrap', // Keeps it in one row, scrolls if overflow
        }}
      >
    {skills.map((skill, index) => (
  <div
    key={index}
    style={{
      flex: '0 0 auto',
      width: '120px',
      height: '120px',
      borderRadius: '10px',
      backgroundColor: 'black',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: skill.color,
      textAlign: 'center',
      padding: '20px',
      cursor: 'default',
    }}
  >
    {typeof skill.icon === 'string' ? (
      <i className={skill.icon} style={{ fontSize: '60px' }}></i>
    ) : (
      <img src={skill.icon} alt={skill.name} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
    )}
    <span style={{ color: 'white', fontSize: '14px', marginTop: '10px' }}>{skill.name}</span>
  </div>
))}

      </div>
    </div>
  );
};

export default Skills;

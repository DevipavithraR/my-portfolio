import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
// import Hero from './components/Hero';
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
import Navigation from './components/Navigation';
// import TimeLine from './components/TimeLine';
// import Skills from './components/Skills';
import MyPage from './pages/MyPage';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <>
      <Navigation />
      
      <MyPage/>
      
      <Footer />
    </>
  );
}

export default App;

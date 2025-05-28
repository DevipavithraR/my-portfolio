import { useEffect, useState } from "react";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import TimeLine from "../components/TimeLine";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function MyPage() {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);

  return (
    <div>
      {/* Removed Container */}
      <Hero />
      <About />
      <TimeLine />
      <Skills />
      <Projects />
      <Contact />

      <button
        onClick={scrollTop}
        style={{
          position: "fixed",
          right: "30px",
          bottom: "30px",
          height: "50px",
          width: "50px",
          fontSize: "24px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "50%",
          cursor: "pointer",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          display: showScroll ? "block" : "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <ArrowUpwardIcon />
      </button>
    </div>
  );
}

export default MyPage;
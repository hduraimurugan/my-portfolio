import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Skills from './components/Skills'
import { useEffect, useRef, useState }  from "react"
import QualificationTimeline from './components/QualificationTimeline'

const RevealOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
      const onWindScroll = () => {
          const element = ref.current;
          if (element) {
              const { top } = element.getBoundingClientRect();
              const isVisible = top < window.innerHeight;
              setIsVisible(isVisible);
          }
      };

      window.addEventListener("scroll", onWindScroll);
      return () => {
          window.removeEventListener("scroll", onWindScroll);
      };
  }, []);

  const classes = `transition-opacity duration-1000
      ${isVisible ? "opacity-100" : "opacity-0"
      }`;

  return (
      <div ref={ref} className={classes}>
          {children}
      </div>
  );
};

function App() {
  return (
    <>
      <div className='App bg-cosmos'>
      <Header/>
      <Hero RevealOnScroll={RevealOnScroll}/>
      <About RevealOnScroll={RevealOnScroll}/>
      <Skills RevealOnScroll={RevealOnScroll}/>
      <Projects RevealOnScroll={RevealOnScroll}/>
      {/* <Resume RevealOnScroll={RevealOnScroll}/> */}
      <QualificationTimeline />
      <Contact RevealOnScroll={RevealOnScroll}/>
      <Footer RevealOnScroll={RevealOnScroll}/>
      </div>
    </>
  )
}

export default App

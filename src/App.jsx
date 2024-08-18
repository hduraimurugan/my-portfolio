import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Footer from './components/Footer'
import Skills from './components/Skills'

function App() {
  return (
    <>
      <div className='App'>
      <Header/>
      <Hero/>
      <Skills/>
      <Projects/>
      <About/>
      <Resume/>
      <Contact/>
      <Footer/>
      </div>
    </>
  )
}

export default App

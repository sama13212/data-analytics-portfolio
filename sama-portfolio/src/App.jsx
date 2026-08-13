import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Services from './components/Services'
import GithubCTA from './components/GithubCTA'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
  const { theme, toggleTheme } = useTheme()

  return (
    <div style={{ background: 'var(--bg)', minHeight: '100vh' }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <GithubCTA />
        <ResumeCTA />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App

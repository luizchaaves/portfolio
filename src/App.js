import './App.css';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Skills from './Components/skills/Skills';
import Projects from './Components/projects/Projects';
import Contact from './Components/contact/Contact';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <div className="divider-normal"></div>
        <About />
        <div className="divider-reverse"></div>
        <Skills />
        <div className="divider-normal"></div>
        <Projects />
        <div className="divider-reverse"></div>
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;

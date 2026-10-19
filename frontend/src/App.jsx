// src/App.jsx
import "./App.css";
import Navbar     from "./components/Navbar";
import Hero       from "./components/Hero";
import About      from "./components/About";
import Skills     from "./components/Skills";
import Projects   from "./components/Projects";
import Experience from "./components/Experience";
import Contact    from "./components/Contact";
import Footer     from "./components/Footer";
import BackToTop  from "./components/BackToTop";

// Education will be added in Stage 2 once the component is created
// import Education  from "./components/Education";

function App() {
  return (
    <div className="font-sans transition scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        {/* <Education /> — added in Stage 2 */}
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;

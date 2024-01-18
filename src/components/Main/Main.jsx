import About from './About/About';
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import './Main.css'

function Main() {
  return (
    <div className="Main">
      <div className="headline">
          <p data-splitting="words">WELCOME TO <br className="hidden-lg" />MY PORTFOLIO</p>
      </div>
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Main;

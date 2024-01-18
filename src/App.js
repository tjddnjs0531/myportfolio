import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import './common'
import Main from './components/Main/Main';
import Project from './components/Main/Project/Project';
import ProjectDetail from './components/Main/Project/ProjectDetail';
import Contact from './components/Main/Contact/Contact';
import About from './components/Main/About/About';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Project />} />
        <Route path='/project/:projectId' element={<ProjectDetail />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

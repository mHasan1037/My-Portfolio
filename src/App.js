import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './component/HeroSection';
import About from './component/About';
import NavBar from './component/NavBar';
import Projects from './component/Projects';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
           <Route path="/" exact element={ <HeroSection />} />
           <Route path="/about"  element={ <About /> } />
           <Route path="/projects"  element={ <Projects /> } />
           <Route path="/testimonial" element={ <Testimonial />} />
           <Route path="/contact" element={ <Contact /> } />
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

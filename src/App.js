import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './component/HeroSection';
import About from './component/About';
import NavBar from './component/NavBar';
import Projects from './component/Projects';
import Testimonial from './component/Testimonial';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <BrowserRouter basename='/My-Portfolio'>
        <NavBar />
        <Routes>
           <Route path="/" exact element={ <HeroSection />} />
           <Route path="/about"  element={ <About /> } />
           <Route path="/projects"  element={ <Projects /> } />
           <Route path="/testimonial" element={ <Testimonial />} />
           <Route path="/contact" element={ <Contact /> } />
           <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;

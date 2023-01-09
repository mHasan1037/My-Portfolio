import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './component/HeroSection';
import About from './component/About';
import NavBar from './component/NavBar';

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
           <Route path="/" exact element={ <HeroSection />} />
           <Route path="/about" exact element={ <About /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

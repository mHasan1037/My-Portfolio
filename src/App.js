import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HeroSection from './component/HeroSection';

function App() {
  return (
    <BrowserRouter>
        <Routes>
           <Route path="/heroSection" element={ <HeroSection /> } />
        </Routes>
    </BrowserRouter>
  );
}

export default App;

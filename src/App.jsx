import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import FootReact from './component/Footer';
import Navrect from './component/Navbar';

const App = () => {

  const infoNav = {
    nombre: "Bryan Armando",
    celular: "0985225062",
    email:"armando@krug.com"
  }

  return (
    <>
    <Navrect/>
    <Router>
      
      <Routes>        
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        
      </Routes>
      <FootReact props2={infoNav} />
    </Router>
    </>
  );
};
export default App;

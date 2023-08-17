import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import LatestTourney from './LatestTourney';
import SignUp from './SignUp';
import { useState, useEffect } from 'react'; 
import About from './About';

function App() {

  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const storedActiveLink = localStorage.getItem('activeLink');
    if (storedActiveLink) {
      setActiveLink(storedActiveLink);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('activeLink', activeLink);
  }, [activeLink]);

  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Home activeLink={activeLink} setActiveLink={setActiveLink} />} />
          <Route path='/latest-tourney' element={<LatestTourney activeLink={activeLink} setActiveLink={setActiveLink} />} />
          <Route path='/signup' element={<SignUp activeLink={activeLink} setActiveLink={setActiveLink} />} />
          <Route path='/about' element={<About activeLink={activeLink} setActiveLink={setActiveLink} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
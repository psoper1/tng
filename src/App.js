import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Home';
import LatestTourney from './LatestTourney';

function App() {
  return (
    <>
      <Router basename='/'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/latest-tourney' element={<LatestTourney />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

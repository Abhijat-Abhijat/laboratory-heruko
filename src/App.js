import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';
// import Header from './components/Header';
// import Nav from './components/Nav';
import Home from './components/Home';
import Research from './components/Research';
import News from './components/News';
import Publications from './components/Publications';
import People from './components/People';
import Contact from './components/Contact';
import Alumni from './components/Alumni';
import Gallery from './components/Gallery';
import "./styles/App.scss";
import "./styles/header.scss";
import "./styles/nav.scss";
// import "./styles/research.scss";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/news" element={<News />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/people" element={<People />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/alumni" element={<Alumni />} />
      </Routes>
    </Router>
  );
}

export default App;

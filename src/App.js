
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Videos from './pages/Videos';


function App() {
  
  return (
    <>
    <Router>
      <Header />
      <div className='w-full flex justify-center'>
      <div className='border-8 w-[95vw] sm:w-[90vw]'>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/portfolio" element={<Portfolio />} />
    <Route path="/videos" element={<Videos />} />
    </Routes>
    </div>
    </div>
    </Router>
    </>
  );
}

export default App;

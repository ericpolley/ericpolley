
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
      <div className='border-8 border-slate-300 w-[95vw] sm:w-[90vw]'>
    <Routes>

    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/blog" element={<Blog />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/portfolio" element={<Portfolio />} />
    <Route exact path="/videos" element={<Videos />} />
    </Routes>
    </div>
    </div>
    </Router>
    </>
  );
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Portfolio from './Pages/Portfolio/Portfolio';
import Blog from './Pages/Blog/Blog';

import Contact from './Pages/Contact/Contact';
import ErrorMessage from './Pages/ErrorMessage/ErrorMessage';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<ErrorMessage/>}/>
       
   
        
      </Routes>
  
      
    </Router>
  );
};

export default App;

import React, { useEffect } from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FeedBack from './pages/Feedback';
import ScrollButton from './components/ScrollButton';


function App() {
    useEffect(() => {
    }, [])
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route  path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                {/* <Route path="/contact" component={Contact} />
                <Route path="/faq" component={Faq} /> */}
                  <Route path="/feedback" element={<FeedBack/>} />
            </Routes>
        <ScrollButton />
        </Router>
    )
}

export default App
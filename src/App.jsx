// src/App.jsx

import React, { useState } from 'react';
import Header from './components/Header';
import NavigationBAr from './components/NavigationBar'
import Hero from './components/Hero'
import WhatWeDo from './components/WhatWeDo';
import Pricing from './components/Pricing'
import AboutUs from './components/AboutUs'
import Contact from './components/Contact'
import Marquee from './components/Marquee'
import Projects from './components/Projects'
import Footer from './components/Footer'
import './App.css'; // Optional: if you have global styles

function App() {
    const [isContactOpen, setIsContactOpen] = useState(false);
    return (
        <div>
            <NavigationBAr onContactClick={() => setIsContactOpen(true)}/>
            <Hero />
            <WhatWeDo />
            <Pricing onContactClick={() => setIsContactOpen(true)} />
            <Marquee />
            <AboutUs />
            <Projects />
            <Footer />
            <Contact isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
        </div>
    );
}

export default App;
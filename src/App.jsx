// src/App.jsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero'
import Pricing from './components/Pricing'
import './App.css'; // Optional: if you have global styles

function App() {
  return (
    <div>
      <Header />
      <Hero/>
      <Pricing />
      {/* You can add more components here */}
      <main>
        <section>
          <h2>Welcome!</h2>
          <p>This is the main content of the page.</p>
        </section>
      </main>
    </div>
  );
}

export default App;
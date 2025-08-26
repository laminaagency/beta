// src/components/Header.jsx

import React from 'react';
import NavigationBar from './NavigationBar'
import './Header.css'

function Header() {
  return (
    <header className='header'>
      <NavigationBar />
    </header>
  );
}

export default Header;
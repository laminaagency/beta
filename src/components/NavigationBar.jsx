// src/components/Navbar.jsx

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { tokens } from "../assets/styles/tokens.js";
import ContactButton from "./ContactButton.jsx";
import Logo from "../assets/images/LOGO-Lamina-digital-removebg-preview.png";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 2rem;
  background-color: #f2d8c9;
  border-bottom: 1px solid grey;
  position: fixed;
  width: 100vw;
  z-index: 99999;

  /* always animate */
  transform: translateY(0);
  transition: transform 0.6s ease-in-out;

  &.hidden {
    transform: translateY(-120%);
  }
`;

const NavLogo = styled.div`
  a {
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 1.5rem;

    img {
      max-width: 500px;
    }
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  padding-left: 50%;
  font-size: 18px;
`;

const NavLinkItem = styled.li`
  a {
    position: relative;
    color: #555;
    text-decoration: none;
    transition: color 0.3s ease;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: -5px;
      width: 100%;
      height: 2px;
      background-color: ${tokens.functional.black};
      transition: transform 0.2s ease, color 0.4s ease;
      transform: scaleX(0);
      transform-origin: left;
    }

    &:hover {
      color: ${tokens.functional.black};
    }

    &:hover::after {
      transform: scaleX(1);
    }

    &:not(:hover)::after {
      transform-origin: right;
    }
  }
`;

const Navbar = () => {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <NavContainer className={hidden ? "hidden" : ""}>
      <NavLogo>
        <a href="/">
          {/* <img src={Logo} alt="Company Logo" /> */}
          Logo
        </a>
      </NavLogo>

      <NavLinks>
        <NavLinkItem>
          <a href="#work">Work</a>
        </NavLinkItem>
        <NavLinkItem>
          <a href="#services">Services</a>
        </NavLinkItem>
        <NavLinkItem>
          <a href="#about">About</a>
        </NavLinkItem>
        <NavLinkItem>
          <a href="#podcast">Podcast</a>
        </NavLinkItem>
      </NavLinks>

      <ContactButton href="#contact">Contact</ContactButton>
    </NavContainer>
  );
};

export default Navbar;

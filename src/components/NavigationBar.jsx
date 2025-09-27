import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { tokens } from "../assets/styles/tokens.js";
import ContactButton from "./ContactButton.jsx";
import Logo from "../assets/images/Logo-Lamina.png";

// Main container for the navbar
const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 2rem;
  box-sizing: border-box;
  position: fixed;
  width: 100vw;
  z-index: 99999;
  
  background-color: ${(props) => (props.navState === "top" ? "#F2D8C9" : "transparent")};
  border-bottom: ${(props) => (props.navState === "top" ? "1px solid grey" : "none")};
  
  transform: ${(props) => (props.navState === "hidden" ? "translateY(-120%)" : "translateY(0)")};

  transition: transform 0.6s ease-in-out, background-color 0.3s ease, border-bottom 0.3s ease;

  @media (max-width: 768px) {
    padding: 20px 1rem;
  }
`;

// Logo styling
const NavLogo = styled.div`
  a {
    img {
      max-width: 250px;
      height: auto;
      position: absolute;
      top: -16px;
      @media (max-width: 768px) {
        max-width: 120px;
      }
    }
  }
`;

// Container for the navigation links
const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  margin: 0 0 0 auto;
  padding: 0;
  gap: 4rem;
  font-size: 18px;
  align-items: center;
  
  @media (max-width: 768px) {
    display: ${(props) => (props.isMenuOpen ? "flex" : "none")};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background-color: #F2D8C9;
    padding: 20px 1rem;
    gap: 1rem;
    border-top: 1px solid grey;
  }
`;

// Individual navigation link item
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

// Button styling
const StyledContactButton = styled(ContactButton)`
  margin-left: 100px;
  @media (max-width: 768px) {
    margin-left: 0;
    display: ${(props) => (props.isMenuOpen ? "block" : "none")};
    order: 2;
  }
`;

// Hamburger Menu Icon
const Hamburger = styled.div`
  display: none;
  cursor: pointer;
  z-index: 100000;

  @media (max-width: 768px) {
    display: block;
    margin-left: auto;
  }
`;

const Bar = styled.div`
  width: 25px;
  height: 3px;
  background-color: #333;
  margin: 5px 0;
  transition: 0.4s;
  transform: ${(props) => (props.isMenuOpen ? "rotate(45deg) translate(5px, 5px)" : "none")};

  &:nth-child(2) {
    opacity: ${(props) => (props.isMenuOpen ? 0 : 1)};
  }

  &:nth-child(3) {
    transform: ${(props) => (props.isMenuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none")};
  }
`;

const Navbar = ({ onContactClick }) => {
  const [navState, setNavState] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setNavState("hidden");
      } else if (currentScrollY === 0) {
        setNavState("top");
      } else {
        setNavState("scrolledUp");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavContainer navState={navState}>
      <NavLogo>
        <a href="/">
          <img src={Logo} alt="Company Logo" />
        </a>
      </NavLogo>

      <NavLinks isMenuOpen={isMenuOpen}>
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
        {/* The Contact Button is now inside the mobile menu */}
        <StyledContactButton onClick={onContactClick} isMenuOpen={isMenuOpen}>
          Contact
        </StyledContactButton>
      </NavLinks>

      <Hamburger onClick={toggleMenu}>
        <Bar isMenuOpen={isMenuOpen} />
        <Bar isMenuOpen={isMenuOpen} />
        <Bar isMenuOpen={isMenuOpen} />
      </Hamburger>
    </NavContainer>
  );
};

export default Navbar;
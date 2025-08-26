import React from 'react';
import styled, { keyframes } from 'styled-components';
import { tokens } from '../assets/styles/tokens.js';

// Define the ripple animation using keyframes
const rippleAnimation = keyframes`
  from {
    transform: scale(0) translate(-50%, -50%);
    opacity: 1;
  }
  to {
    transform: scale(2.5) translate(-50%, -50%);
    opacity: 0;
  }
`;

// Create the styled component for the button
const StyledPillButton = styled.button`
  position: relative;
  overflow: hidden;

  /* Basic Button Styles */
  background-color: transparent;
  border: 1px solid black;
  color: #000;
  border-radius: 999px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 32px;
  transition: color 0.3s ease;
  z-index: 1;

  /* Custom focus ring for accessibility */
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.5);
  }

  /* Pseudo-element for the side-to-side hover effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }

  /* Pseudo-element for the ripple click effect */
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    width: 100px;
    height: 100px;
    top: 50%;
    left: 50%;
    transform: scale(0) translate(-50%, -50%);
    pointer-events: none;
    opacity: 0;
  }

  /* Hover state */
  &:hover {
    color: #fff;
    border-color: ${tokens.functional.black} !important;
    &::before {
      transform: scaleX(1);
    }
  }

  /* Click state (activates ripple) */
  &:active::after {
    animation: ${rippleAnimation} 0.6s ease-out forwards;
  }
`;

// A functional React component that uses the styled component
const PillButton = ({ children, ...props }) => {
  return <StyledPillButton {...props}>{children}</StyledPillButton>;
};

export default PillButton;
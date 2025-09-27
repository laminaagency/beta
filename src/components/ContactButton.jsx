// src/components/ContactButton.jsx

import React from 'react';
import styled from 'styled-components';
import { tokens } from '../assets/styles/tokens.js';

const NavContactButton = styled.button`
  position: relative;
  overflow: hidden;
  padding: 0.75rem 1.5rem;
  
  background-color: ${(props) =>
    props.navState === 'scrolledUp' ? 'transparent' : 'transparent'};
  border: 1px solid ${tokens.functional.black};
  color: ${tokens.functional.black};
  
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  z-index: 1;
  transition: background-color 0.3s ease, border 0.3s ease, color 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background-color: ${tokens.functional.black};
    transition: width 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: ${tokens.functional.white};
    border: 1px solid ${tokens.functional.black};
    &::after {
      width: 100%;
    }
  }
`;

const ContactButton = ({ onClick, children, className, navState, type = 'button' }) => {
  return (
    <div className={className}>
      <NavContactButton onClick={onClick} navState={navState} type={type}>
        {children}
      </NavContactButton>
    </div>
  );
};

export default ContactButton;
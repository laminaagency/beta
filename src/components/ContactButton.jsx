// src/components/ContactButton.jsx

import React from 'react';
import styled from 'styled-components';
import { tokens } from '../assets/styles/tokens.js';

// Define the styled component for the base element (used for both button and link)
const NavContactBase = styled.div`
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
    text-decoration: none; /* Crucial for link version */
    display: inline-block; /* Crucial for link version to respect padding */

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

// Helper component styled as a <button>
const NavContactButton = styled(NavContactBase).attrs({ as: 'button' })`
    /* Ensures button inherits styles correctly */
    appearance: none;
    border: 1px solid;
    background-color: inherit;
`;

// Helper component styled as an <a> link
const NavContactLink = styled(NavContactBase).attrs({ as: 'a' })`
    /* Ensures link inherits styles correctly */
`;

const ContactButton = ({ onClick, children, className, navState, type = 'button', href }) => {
    // If an href is provided, render it as a link (<a>)
    if (href) {
        return (
            <div className={className}>
                <NavContactLink 
                    href={href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    navState={navState}
                >
                    {children}
                </NavContactLink>
            </div>
        );
    }

    // Otherwise, render it as a button (for the modal)
    return (
        <div className={className}>
            <NavContactButton onClick={onClick} navState={navState} type={type}>
                {children}
            </NavContactButton>
        </div>
    );
};

export default ContactButton;
import React from 'react';
import styled from 'styled-components';
import { tokens } from '../assets/styles/tokens.js'
import ContactButton from './ContactButton.jsx'

const HeroContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 80vh; /* Adjust height as needed */
  // background-color: ${tokens.functional.grey1}; /* A light background for contrast */
  background-color: #F2D8C9;
  padding: 0 5%;
  padding-top: 200px;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  text-align: left;
`;

const HeroHeadline = styled.h1`
  font-size: 6.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #333;
  line-height: 1.3;
`;

const HeroParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #666;
`;

const LinkWrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  line-height: 1; /* Ensures the underline effect is tight to the text */
`;

const StyledLink = styled.a`
  text-decoration: none;
  // font-size: 1.2rem;
  font-weight: bold;
  color: #000;
  padding: 5px 0; /* Add padding to give space for the underline */
  position: relative;
  transition: color 0.3s ease;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px; /* The initial underline height */
    background-color: #000;
    transform: scaleY(1);
    transform-origin: bottom;
    transition: transform 0.3s ease-in-out, height 0.3s ease-in-out;
    z-index: -1;
  }

  &:hover {
    color: #fff;
    &::before {
      transform: scaleY(1);
      height: 80%; /* Expands to cover the whole link */
    }
  }
`;

const HeroComponent = () => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <HeroHeadline>Somos la <StyledLink href="#">estructura</StyledLink>  detrás de tu <StyledLink href="#">presencia</StyledLink> digital.
        {/* Elevate your <StyledLink href="#">digital</StyledLink> presence. Crafting digital <StyledLink href="#">experiences</StyledLink>. */}
        </HeroHeadline>
       <ContactButton>Talk to us about organic results</ContactButton>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroComponent;
import React from 'react';
import styled from 'styled-components';
import { tokens } from '../assets/styles/tokens.js'
import ContactButton from './ContactButton.jsx'

const HeroContainer = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 80vh;
  background-color: #F2D8C9;
  padding: 200px 5%;

  @media (max-width: 1024px) {
    padding: 150px 5%;
    min-height: 70vh;
  }
  @media (max-width: 768px) {
    padding: 120px 5%;
    min-height: 60vh;
    text-align: center;
    justify-content: center;
  }
  @media (max-width: 480px) {
    padding: 0 5%;
    min-height: 100vh;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  text-align: left;
  
  @media (max-width: 768px) {
    max-width: 460px;
    text-align: left;
  }
`;

const HeroHeadline = styled.h1`
  font-size: 6.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #333;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 5rem;
    margin-bottom: 2rem;
  }
  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1.5rem;
  }
  @media (max-width: 480px) {
    font-size: 2.5rem;
    line-height: 1.2;
  }
`;

const HeroParagraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  color: #666;

  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 1.5rem;
  }
`;

const LinkWrapper = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  line-height: 1;
`;

const StyledLink = styled.a`
  text-decoration: none;
  font-weight: bold;
  color: #000;
  padding: 5px 0;
  position: relative;
  transition: color 0.3s ease;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
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
      height: 80%;
    }
  }
`;

const HeroComponent = ({ onContactClick }) => {
  return (
    <HeroContainer>
      <ContentWrapper>
        <HeroHeadline>
          Somos la <StyledLink href="#">estructura</StyledLink> detrás de tu <StyledLink href="#">presencia</StyledLink> digital.
        </HeroHeadline>
        <ContactButton onClick={onContactClick}>
          Habla con nosotros
        </ContactButton>
      </ContentWrapper>
    </HeroContainer>
  );
};

export default HeroComponent;
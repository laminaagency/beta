import styled from 'styled-components';

export const PricingSection = styled.section`
  padding: 70px 0;
`;

export const TitleContainer = styled.div`
  & h2 {
    font-size: 30px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 50px;
  }
`;

export const PricingBox = styled.div`
  background-color: #fff;
  padding: 47px 50px 50px;
  box-shadow: 0px 30px 200px rgba(16, 25, 56, .08);
  border-radius: 5px;
  @media (max-width: 991px) {
    margin-bottom: 30px;
  }
  @media (max-width: 767.9px) {
    padding: 40px 30px;
  }
`;

export const Tag = styled.span`
  font-size: 18px;
  color: #000;
  display: inline-block;
  line-height: 1;
  font-weight: 600;
`;

export const Price = styled.h2`
  line-height: 1;
  margin-top: 17px;
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  min-height: 220px;
  margin-bottom: 36px;  
  & li {
    margin-bottom: 7px;
  }
  & i {
    padding-right: 5px;
  }
`;

export const StyledButton = styled.a`
  font-size: 16px;
  font-weight: 500;
  border-radius: 5px;
  padding: 16px 40px;
  background-color: #000;
  color: #ffffff;
  transition: all .4s;
  font-weight: 700;
  &:hover {
    background-color: #feda1f;
    border-color: #feda1f;
    color: #000;
  }
  & span {
    position: relative;
    display: inline-block;
    padding: 0;
    transition: transform .5s;
    transform-origin: 50% 0;
    transform-style: preserve-3d;
    &:before {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      height: 100%;
      content: 'Choose Plan';
      transition: color .5s;
      transform: rotateX(-90deg);
      transform-origin: 50% 0;
      text-align: center;
    }
  }
  &:hover span {
    transform: rotateX(90deg) translateY(-12px);
  }
`;
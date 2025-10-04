import styled from 'styled-components';

export const PricingSection = styled.section`
  max-width: 1400px;
  margin: 0 auto;
`;

// export const TitleContainer = styled.div`
//   & h2 {
//     font-size: 72px;
//     font-weight: 700;
//     text-align: center;
//     margin-bottom: 50px;
//   }
// `;

/* Replacement for Bootstrap row/col */
export const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 42px;
  align-items: stretch; // This ensures all items in the grid have the same height
  margin-bottom: 144px;
`;

export const PricingBox = styled.div`
  background-color: transparent;
  padding: 47px 50px 50px;
  border-radius: 5px;
   display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%; // Ensure each box has the same height

  @media (max-width: 991px) {
    padding: 40px 30px;
  }
`;

export const Tag = styled.span`
  font-size: 18px;
  color: #000;
  display: inline-block;
  line-height: 1;
  font-weight: 600;
  margin-bottom: 42px;
`;

export const Price = styled.h2`
  line-height: 1;
  margin-top: 17px;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 12px;
`;

export const FeatureList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  min-height: 220px;
  margin-bottom: 36px;
  flex-grow: 1; // This makes the list expand to fill the available space
  min-height: auto; // Remove the fixed min-height

  & li {
    margin-bottom: 32px;
    line-height: 1.7;
  }
`;

// export const StyledButton = styled.a`
//   font-size: 16px;
//   font-weight: 700;
//   border-radius: 5px;
//   padding: 16px 40px;
//   background-color: #000;
//   color: #fff;
//   display: inline-block;
//   text-align: center;
//   transition: all 0.4s;

//   &:hover {
//     background-color: #feda1f;
//     color: #000;
//   }

//   & span {
//     position: relative;
//     display: inline-block;
//     transition: transform 0.5s;
//     transform-origin: 50% 0;
//     transform-style: preserve-3d;
//   }

//   & span:before {
//     position: absolute;
//     top: 100%;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     content: 'Lo quiero';
//     transform: rotateX(-90deg);
//     transform-origin: 50% 0;
//     text-align: center;
//   }

//   &:hover span {
//     transform: rotateX(90deg) translateY(-12px);
//   }
// `;

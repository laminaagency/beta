import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { PricingBox, Tag, Price, FeatureList, StyledButton } from './StyledPricingSection';

const PricingBoxComponent = ({ tag, price, features }) => {
  return (
    <PricingBox>
      <Tag>{tag}</Tag>
      <Price>{price}</Price>
      <FeatureList>
        {features.map((feature, index) => (
          <li key={index}><i className="bi bi-check2"></i> {feature}</li>
        ))}
      </FeatureList>
      <StyledButton href="#">
        <span>Choose Plan</span>
      </StyledButton>
    </PricingBox>
  );
};

export default PricingBoxComponent;
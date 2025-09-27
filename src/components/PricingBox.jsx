// PricingBox.jsx
import React from "react";
import { PricingBox, Tag, Price, FeatureList } from "./StyledPricingSection";
import ContactButton from "./ContactButton";

const PricingBoxComponent = ({ tag, price, features, onContactClick }) => {
  return (
    <PricingBox>
      <Price>{price}</Price>
      <Tag>{tag}</Tag>
      <FeatureList>
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </FeatureList>

      {/* Reuse ContactButton instead of StyledButton */}
      <ContactButton
          navState="default"
          style={{ width: "100%" }}
          onClick={onContactClick}
          className="button-lo-quiero"
      >
          Lo quiero
      </ContactButton>
    </PricingBox>
  );
};

export default PricingBoxComponent;

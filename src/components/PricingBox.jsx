// PricingBox.jsx
import React from "react";
import { PricingBox, Tag, Price, FeatureList } from "./StyledPricingSection";
import ContactButton from "./ContactButton";
import { useTranslation } from 'react-i18next';

const PricingBoxComponent = ({ tag, price, features, onContactClick }) => {
  const { t } = useTranslation();
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
          {t('pricing.pricing_plan_btn')}
      </ContactButton>
    </PricingBox>
  );
};

export default PricingBoxComponent;

import React from 'react';
import PricingBoxComponent from './PricingBox';
import { PricingSection, PricingGrid } from './StyledPricingSection';
import SectionTitle from './SectionTitle';
import { useTranslation } from 'react-i18next';

const pricingPlans = [
  {
    titleKey: 'pricing.pricing_plan_web_sub_title',
    priceKey: 'Web • eCommerce', // you didn’t define this, can fallback to hardcoded “Web • eCommerce”
    features: [
      'pricing.pricing_plan_web_item_1',
      'pricing.pricing_plan_web_item_2',
      'pricing.pricing_plan_web_item_3',
      'pricing.pricing_plan_web_item_4',
    ],
  },
  {
    titleKey: 'pricing.pricing_plan_social_sub_title',
    priceKey: 'pricing.pricing_plan_social_title',
    features: [
      'pricing.pricing_plan_social_item_1',
      'pricing.pricing_plan_social_item_2',
      'pricing.pricing_plan_social_item_3',
      'pricing.pricing_plan_social_item_4',
      'pricing.pricing_plan_social_item_5',
    ],
  },
  {
    titleKey: 'pricing.pricing_plan_opt_sub_title',
    priceKey: 'pricing.pricing_plan_opt_title',
    features: [
      'pricing.pricing_plan_opt_item_1',
      'pricing.pricing_plan_opt_item_2',
      'pricing.pricing_plan_opt_item_3',
      'pricing.pricing_plan_opt_item_4',
      'pricing.pricing_plan_opt_item_5',
    ],
  },
];

const Pricing = ({ onContactClick }) => {
  const { t } = useTranslation();

  return (
    <>
      <SectionTitle text={t('navbar.nav_item_how_def')} textId="pricing" id="pricing"/>
      <PricingSection>
        <PricingGrid>
          {pricingPlans.map((plan, index) => (
            <PricingBoxComponent
              key={index}
              tag={t(plan.titleKey)}
              price={t(plan.priceKey)}
              features={plan.features.map((f) => t(f))}
              buttonLabel={t('pricing.pricing_plan_btn')}
              onContactClick={onContactClick}
            />
          ))}
        </PricingGrid>
      </PricingSection>
    </>
  );
};

export default Pricing;

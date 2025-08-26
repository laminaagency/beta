import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PricingBoxComponent from './PricingBox';
import { PricingSection, TitleContainer } from './StyledPricingSection';

const pricingPlans = [
  {
    tag: 'Basic',
    price: '$8.00',
    features: ['1 Website', '10GB Storage', 'Unmetered Bandwidth', 'Free SSL Certificate'],
  },
  {
    tag: 'Plus',
    price: '$14.00',
    features: ['10 Website', '100GB Storage', 'Unmetered Bandwidth', 'Free SSL Certificate', 'Free Domain for 1 Year'],
  },
  {
    tag: 'Premium',
    price: '$20.00',
    features: ['Unlimited Websites', 'Unlimited Storage', 'Unmetered Bandwidth', 'Free SSL Certificate', 'Free Domain for 1 Year', 'Priority Support'],
  },
];

const Pricing = () => {
  return (
    <PricingSection>
      <div className="container">
        <TitleContainer>
          <h2>Pricing Plan</h2>
        </TitleContainer>
        <div className="row">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-6">
              <PricingBoxComponent {...plan} />
            </div>
          ))}
        </div>
      </div>
    </PricingSection>
  );
};

export default Pricing;
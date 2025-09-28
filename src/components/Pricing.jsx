import React from 'react';
import PricingBoxComponent from './PricingBox';
import { PricingSection, PricingGrid } from './StyledPricingSection';
import SectionTitle from './SectionTitle';

const pricingPlans = [
  {
    tag: 'Creación o mejora de sitios y tiendas',
    price: 'Web • eCommerce',
    features: [
      'Página web hasta 5 secciones + curación de contenido.',
      'Tienda online hasta 20 productos + medios de pago/envío. Control de stock automatizado',
      'Mejoras, performance, revamp, actualizaciones.',
      'Newsletter embebido, sitemaps, banners, optimización móvil.'
    ],
  },
  {
    tag: 'Presencia activa en redes y campañas de alto impacto',
    price: 'Social • Contenido',
    features: [
      'Creación de contenido (posts, flyers, stories)',
      '2 Reels mensuales',
      'Highlights y portadas de RRSS',
      'Campañas de lanzamiento/evento (14–30 días, RRSS multiplataforma)',
      'Soporte en anuncios y agenda de publicaciones'
    ],
  },
  {
    tag: 'Pensado para quienes buscan potenciar resultados.',
    price: 'Optimización • Escala',
    features: [
      'SEO técnico + velocidad',
      'Revamp visual de identidad y sitio',
      'Revisión de catálogo y promociones (para ecommerce)',
      'Optimización de rendimiento y UX',
      'Campañas estratégicas con medición de impacto'
    ],
  },
];

const Pricing = ({ onContactClick }) => {
  return (
    <>
    <SectionTitle text="Cómo?" />
    <PricingSection id="pricing">
      <PricingGrid>
        {pricingPlans.map((plan, index) => (
          <PricingBoxComponent 
            key={index} 
            {...plan}  
            onContactClick={onContactClick}/>
        ))}
      </PricingGrid>
    </PricingSection>
    </>
  );
};

export default Pricing;

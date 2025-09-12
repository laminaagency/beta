import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import PricingBoxComponent from './PricingBox';
import { PricingSection, TitleContainer } from './StyledPricingSection';

const pricingPlans = [
  {
    tag: 'Creación o mejora de sitios y tiendas',
    price: 'Plan Web & eCommerce',
    features: ['Página web hasta 5 secciones +curación de contenido.', 'Tienda online hasta 20 productos + medios de pago/envío. Control de stock automatizado', 'Mejoras, performance, revamp, actualizaciones.', 'Newsletter embebido, sitemaps, banners, optimización móvil.'],
  },
  {
    tag: 'Presencia activa en redes y campañas de alto impacto',
    price: 'Plan Social & Contenido',
    features: [ 'Creación de contenido (posts, flyers, stories)',
  '2 Reels mensuales',
  'Highlights y portadas de RRSS',
  'Campañas de lanzamiento/evento (14–30 días, RRSS multiplataforma)',
  'Soporte en anuncios y agenda de publicaciones'],
  },
  {
    tag: 'Pensado para quienes ya tienen base digital y quieren escalar resultados',
    price: ' Plan Growth & Performance',
    features: ['SEO técnico + velocidad',
  'Revamp visual de identidad y sitio',
  'Revisión de catálogo y promociones (para ecommerce)',
  'Optimización de rendimiento y UX',
  'Campañas estratégicas con medición de impacto'],
  },
];

const Pricing = () => {
  return (
    <PricingSection>
      <div className="container">
        <TitleContainer>
          <h2>Cómo lo hacemos?</h2>
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
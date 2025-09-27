import React from 'react';
import './WhatWeDo.css';
import SectionTitle from "./SectionTitle";


export const WhatWeDoItem = ({ number, title, paragraph }) => {
  return (
    <article className="whatwedo-item">
      <div className="whatwedo-inner">
        <div className="whatwedo-left">
          <span className="whatwedo-number">{number}</span>
        </div>

        <div className="whatwedo-right">
          <h2 className="whatwedo-title">{title}</h2>
          {paragraph && <p className="whatwedo-paragraph">{paragraph}</p>}
        </div>
      </div>
      <div className="whatwedo-divider" />
    </article>
  );
};


const items = [
  {
    number: '01',
    title: 'Ideas en acción. Impacto real.',
    paragraph:
      'Creamos marcas sólidas, sitios efectivos y estrategias digitales que generan efecto tangible para tu marca.',
  },
  {
    number: '02',
    title: 'Juntos es mejor. Con más foco se alcanzan objetivos.',
    paragraph:
      'No trabajamos en soledad: trabajamos con vos. Las mejores ideas nacen de la colaboración y la transparencia.',
  },
  {
    number: '03',
    title: 'Verdad sin filtros. Ideas claras que rompen la zona de confort.',
    paragraph:
      'Te decimos lo que pensamos, incluso si desafía lo que hacías antes. Porque innovar exige cuestionar.',
  },
  {
    number: '04',
    title: 'Críticas que suman. Con cada paso elevamos proyectos.',
    paragraph:
      'Nos nutren tus comentarios y hasta tus críticas: cada intercambio nos acerca a un trabajo mejor.',
  },
  {
    number: '05',
    title: 'Tu potencial, ahora. Un viaje hacia lo que tu marca puede lograr.',
    paragraph:
      'Hacé equipo con nosotros y empezá a liberar el verdadero potencial de tu negocio.',
  },
];

export default function WhatWeDo() {
  return (
    <>
      <SectionTitle id="section-title-first-title" text="Qué?" paragraph="Lámina construye marcas, desarrolla sitios web y genera tráfico mediante la optimización para motores de búsqueda. Para nosotros, lo único que importa es hacer todo esto de forma brillante para que tu negocio destaque y crezca." />
      <section className="whatwedo">
        {items.map((it) => (
          <WhatWeDoItem key={it.number} {...it} />
        ))}
      </section>
    </>
  );
}

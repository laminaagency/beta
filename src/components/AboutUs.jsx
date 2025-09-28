// src/components/AboutUs.jsx

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./AboutUs.css";
import SectionTitle from "./SectionTitle";

function ParallaxImage({ imageUrl, amount = 30 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", `${amount}%`]);

  return (
    <motion.div
      ref={ref}
      className="grid-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
        backgroundPositionX: "center",
        backgroundPositionY: bgY,
      }}
    />
  );
}

export default function AboutUs() {
  const ref = useRef(null);

  // Capture scroll only for the middle grid
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Faster color interpolation (swapping happens within 0-0.5 of scroll)
  const leftColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#7BAE9E", "#567FD8", "#7BAE9E"]
  );

  const rightColor = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["#567FD8", "#7BAE9E", "#567FD8"]
  );

  return (
    <>
      <SectionTitle text="Quiénes?" id="about"/>
      <section className="aboutus">
        {/* Top Grid */}
        <div className="grid-two-col">
          <div className="grid-text">
            <h2>Orígen</h2>
            <p>
              Lámina Digital nació de una amistad que nos acompaña desde siempre. Somos tres amigos de toda la vida que, después de recorrer distintos caminos profesionales, decidimos unir fuerzas para dar forma a un sueño compartido: crear una agencia de marketing digital distinta, humana y con una mirada integral. Lo que comenzó como un sueño colectivo hoy es un equipo apasionado que crece ayudando a otros a crecer.
            </p>
          </div>
          <ParallaxImage
            imageUrl="https://picsum.photos/1200/900?random=3"
            amount={25}
          />
        </div>

        {/* Middle Grid */}
          <div className="grid-three-col" ref={ref}>
            <motion.div
              className="grid-color"
            style={{ backgroundColor: leftColor }}
          >
            {/* Desktop Rotated Title (will be hidden on mobile) */}
            <div className="rotated-title-container">
              <h2>Nosotros</h2>
            </div>

            {/* New Mobile Title (will be hidden on desktop) */}
            <h2 className="mobile-title">Nosotros</h2>
          </motion.div>

          <div className="grid-center">
            <p>
                Cada uno trae un recorrido único que le da forma a la identidad de Lámina Digital: Facundo, ingeniero en sistemas y desarrollador web, aporta la visión técnica y la solidez para crear plataformas seguras y escalables que potencian la presencia online de las marcas. Fernanda, diseñadora gráfica egresada de la UBA, une creatividad y estrategia para dar vida a identidades visuales claras y memorables. Ezequiel, ilustrador, creativo. Con su mirada artística y experiencia en comunicacion visual, aporta ritmo, color y emoción a los contenidos digitales, haciendo que cada proyecto destaque y se recuerde.

            </p>
          </div>

          <motion.div
            className="grid-color"
            style={{ backgroundColor: rightColor }}
          />
        </div>

        {/* Bottom Grid */}
        <div className="grid-two-col">
          <ParallaxImage
            imageUrl="https://picsum.photos/1200/900?random=2"
            amount={20}
          />
          <div className="grid-text">
            <h2>Pulso</h2>
            <p>
              Cada proyecto es para nosotros una oportunidad de innovar, de acompañar a las marcas en su crecimiento y de demostrar que el marketing digital puede ser tan humano como estratégico. Lo que comenzó como un sueño entre amigos hoy es un equipo sólido, apasionado y comprometido con hacer que cada idea se convierta en realidad.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
// src/components/AboutUs.jsx

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./AboutUs.css";
import SectionTitle from "./SectionTitle";
import { useTranslation } from 'react-i18next';

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
  const { t } = useTranslation();

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
      <SectionTitle text={t('navbar.nav_item_who_def')} id="about"/>
      <section className="aboutus">
        {/* Top Grid */}
        <div className="grid-two-col">
          <div className="grid-text">
            <h2>{t('who.who_upper_grid_title')}</h2>
            <p>
              {t('who.who_upper_grid_content')}
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
              <h2>{t('who.who_middle_grid_title')}</h2>
            </div>

            {/* New Mobile Title (will be hidden on desktop) */}
            <h2 className="mobile-title">{t('who.who_middle_grid_title')}</h2>
          </motion.div>

          <div className="grid-center">
            <p>
                {t('who.who_middle_grid_content')}

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
            <h2>{t('who.who_bottom_grid_title')}</h2>
            <p>
              {t('who.who_bottom_grid_content')}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
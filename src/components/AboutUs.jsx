// src/components/AboutUs.jsx

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./AboutUs.css";

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
    <section className="aboutus">
      {/* Top Grid */}
      <div className="grid-two-col">
        <div className="grid-text">
          <h2>Who We Are</h2>
          <p>
            Our story begins with a passion for technology and creativity. We
            believe in shaping meaningful digital experiences that leave a mark.
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
        />

        <div className="grid-center">
          <h2>About Us</h2>
          <p>
            We are passionate about building digital experiences that connect
            brands with people. Our team thrives on creativity, strategy, and
            innovation.
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
          <h2>Our Mission</h2>
          <p>
            We aim to deliver cutting-edge solutions while keeping design and
            performance at the forefront. Our work is about impact, growth, and
            creating value.
          </p>
        </div>
      </div>
    </section>
  );
}

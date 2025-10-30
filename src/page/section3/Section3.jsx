import React from "react";
import { motion } from "motion/react"; // ✅ Correct import
import style from "./section3.module.scss";

const Section3 = () => {
  return (
    <section className={style.section3}>
      <h1>Section 3</h1>
      <div className={style.container}>
        {food.map(([emoji, hueA, hueB], i) => (
          <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
        ))}
      </div>
    </section>
  );
};

// ✅ Removed TypeScript interface, replaced with normal JS props
function Card({ emoji, hueA, hueB, i }) {
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <div className={style.cardWrapper}>
      <div className={style.pocket}>
        <div className={style.splash} style={{ background }} />
        <motion.div
          className={style.card}
          initial={{ y: 0 }}
          whileInView={{ y: -150, rotate: -10 }}
          viewport={{ amount: 0.8 }}
          transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
        >
          {emoji}
        </motion.div>
      </div>
    </div>
  );
}

const hue = (h) => `hsl(${h}, 100%, 50%)`;

/* ==============   Data   ================ */

const food = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
  ["🍐", 80, 120],
  ["🍏", 100, 140],
  ["🫐", 205, 245],
  ["🍆", 260, 290],
  ["🍇", 290, 320],
];

export default Section3;

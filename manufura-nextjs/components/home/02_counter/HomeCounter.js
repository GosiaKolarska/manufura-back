import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import styles from "./HomeCounter.module.css";
import { urlFor } from "@/utils/sanityImageUtils";

const CounterItem = ({ item, imageUrl }) => {
  const { number: numberText, title } = item;
  const [displayNumber, setDisplayNumber] = useState(0);
  const [suffix, setSuffix] = useState("");
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false });

  useEffect(() => {
    const match = numberText.match(/^(\d+)(.*)/);
    const number = match ? parseInt(match[1], 10) : 0;
    setSuffix(match ? match[2] : "");

    if (inView) {
      setDisplayNumber(0);
      const speedAdjustment = Math.min(Math.max(1, 1000 / number), 100);
      const interval = setInterval(() => {
        setDisplayNumber((prevNumber) => {
          const nextNumber = prevNumber + 1;
          if (nextNumber <= number) {
            return nextNumber;
          }
          clearInterval(interval);
          return number;
        });
      }, speedAdjustment);

      return () => clearInterval(interval);
    }
  }, [inView, numberText]);

  return (
    <li
      ref={ref}
      className={styles.homeCounterListItem}
      style={{
        backgroundImage: imageUrl ? `url('${imageUrl}')` : undefined,
      }}
    >
      <motion.span className={styles.homeCounterListItemNumber}>
        {`${displayNumber}${suffix}`}
      </motion.span>
      <h3 className={styles.homeCounterListItemTitle}>{title}</h3>
    </li>
  );
};

const HomeCounter = ({ data }) => {
  const counterItems = data?.counterItems;

  if (!Array.isArray(counterItems)) {
    return <div>Invalid data</div>;
  }

  return (
    <section className={styles.homeCounter}>
      <div className="container">
        <ul className={styles.homeCounterList}>
          {counterItems.map((item, index) => {
            const imageAsset = item.image
              ? item.image.asset || item.image
              : null;
            const imageUrl = imageAsset ? urlFor(imageAsset._ref).url() : null;

            return <CounterItem key={index} item={item} imageUrl={imageUrl} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default HomeCounter;

import React from "react";
import Image from "next/image";
import styles from "./HomeClients.module.css";

import { urlFor } from "@/utils/sanityImageUtils";

const HomeClients = ({ data }) => {
  if (!Array.isArray(data) || data.length === 0) {
    return <div>No client logos available at this time.</div>;
  }

  return (
    <section
      aria-labelledby="clientLogosSection"
      className={`container ${styles.homeClients}`}
    >
      <ul className={styles.homeClientsList} role="list">
        {data.map((logo, index) => {
          const imageUrl = urlFor(logo.image.asset._ref).url();
          const altText = logo.altText || "Client logo";

          return (
            <li key={index} className={styles.homeClientsListItem}>
              <Image
                src={imageUrl}
                width="220"
                height="106"
                alt={altText}
                quality={90}
              />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default HomeClients;

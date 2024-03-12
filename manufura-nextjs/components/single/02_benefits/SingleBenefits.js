import React from "react";
import Image from "next/legacy/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/utils/sanityClient"; // Ensure this is correctly imported

import styles from "./SingleBenefits.module.css";

const SingleBenefits = ({ data }) => {
  if (!data) return null;

  const builder = imageUrlBuilder(client);

  return (
    <section className={styles.singleServiceBenefits}>
      <div className="container">
        <span className={styles.singleServiceSubtitle}>Benefity</span>
        <h2 className={styles.singleServiceTitle}>
          {data.title}
          <span className="red">?</span>
        </h2>
        <ul className={styles.singleServiceBenefitsList}>
          {data.benefits.map((benefit) => (
            <li
              className={styles.singleServiceBenefitsListItem}
              key={benefit._key}
            >
              <div className={styles.singleServiceBenefitsListItemImage}>
                <Image
                  src={builder.image(benefit.image).url()}
                  width="108"
                  height="108"
                  alt="block"
                />
              </div>
              <p className={styles.singleServiceBenefitsListItemParagraph}>
                {benefit.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SingleBenefits;

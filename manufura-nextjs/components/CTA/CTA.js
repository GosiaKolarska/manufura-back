import React, { useState, useEffect } from "react";
import styles from "./cta.module.css";
import client from "@/utils/sanityClient";

const CTA = () => {
  const [ctaData, setCtaData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "cta"][0]')
      .then((data) => {
        if (data) {
          setCtaData(data);
        } else {
          setError("No CTA data found");
        }
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to fetch CTA data");
      });
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!ctaData) {
    return null;
  }

  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.ctaSectionInner}>
          <h2 className={styles.ctaTitle}>{ctaData.title}</h2>
          <div className={styles.ctaRightContent}>
            <p>{ctaData.content}</p>
            <a href={ctaData.buttonLink} className="btn-radius arrow">
              {ctaData.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;

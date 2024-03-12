import React from "react";
import Layout from "@/components/Layout/layout";

import styles from "./kontakt.module.css";

const Contact = () => {
  return (
    <Layout>
      <div className={styles.contactPage}>
        <div className="container">
          <h1 className={styles.contactHeroTitle}>
            Kontakt<span className="red">.</span>
          </h1>
          <div className={styles.contactHeroContent}>
            <p>ul. Pachońskiego 11, Kraków</p>
            <p>biuro@manufura.pl</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;

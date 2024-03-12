import React from "react";
import Layout from "@/components/Layout/layout";

import styles from "./szkolenie.module.css";

const Training = () => {
  return (
    <Layout>
      <div className={styles.trainingPage}>
        <div className="container">
          <h1 className={styles.trainingHeroTitle}>
            Szkolenie<span className="red">.</span>
          </h1>
          <div className={styles.trainingHeroContent}>
            <p>
              Niedługo ruszamy z fascynującym szkoleniem, podczas którego
              odkryjesz tajemnice malowania skór. Bądź gotowy do tworzenia
              unikalnych dzieł sztuki i rozwijania swojej kreatywności!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Training;

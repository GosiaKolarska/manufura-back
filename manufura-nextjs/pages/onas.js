import React from "react";
import Image from "next/legacy/image";
import Layout from "@/components/Layout/layout";

import avatar from "../public/avatar.png";

import styles from "./onas.module.css";

const About = () => {
  return (
    <Layout>
      <div className={styles.aboutPage}>
        <div className="container">
          <h1 className={styles.aboutHeroTitle}>
            Kim jesteśmy<span className="red">?</span>
          </h1>
          <div className={styles.aboutHeroContent}>
            <p>
              Jesteśmy specjalistami w dziedzinie auto detailing oraz malowania
              skóry. Nasza firma zajmuje się profesjonalnym czyszczeniem i
              renowacją samochodów, a także odnawianiem i malowaniem skórzanych
              wnętrz.
            </p>
            <p>
              Nasza pasja do motoryzacji oraz dokładność w pracy gwarantują
              zadowolenie naszych klientów. Skontaktuj się z nami, aby poznać
              naszą ofertę i umówić się na usługę, która spełni Twoje
              oczekiwania.
            </p>
          </div>
          <div className={styles.aboutHeroAuthor}>
            <div className={styles.aboutHeroAuthorImageWrapper}>
              <Image src={avatar} width="85" height="85" alt="o nas" />
            </div>
            <div>
              <h3>Adam Kolarski</h3>
              <span>Załozyciel</span>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;

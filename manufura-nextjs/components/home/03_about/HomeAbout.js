import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanityImageUtils";

import styles from "./HomeAbout.module.css";

const HomeAbout = ({ data }) => {
  if (!data || !data.firstImage || !data.secondImage || !data.authorImage) {
    return <div>Invalid data...</div>;
  }

  return (
    <section aria-labelledby="aboutSectionTitle" className={styles.homeAbout}>
      <div className={styles.homeAboutImages}>
        <Image
          src={urlFor(data.firstImage).url()}
          width="498"
          height="565"
          alt={data.firstImage.alt}
          layout="responsive"
        />
        <Image
          src={urlFor(data.secondImage).url()}
          width="228"
          height="497"
          alt={data.secondImage.alt}
          layout="responsive"
        />
      </div>
      <div className={styles.homeAboutContent}>
        <div className={styles.homeAboutContentText}>
          <h2 className={styles.homeAboutContentTextTitle}>
            {data.title}
            <span className="red">.</span>
          </h2>
          {data.paragraphs.map((paragraph, index) => (
            <p key={index} className={styles.homeAboutContentTextParagraph}>
              {paragraph.children[0].text}
            </p>
          ))}
        </div>
        <div className={styles.homeAboutContenAuthor}>
          <div className={styles.homeAboutContenAuthorImageWrapper}>
            <Image
              src={urlFor(data.authorImage).url()}
              width="85"
              height="85"
              alt={data.authorImage.alt}
              layout="responsive"
            />
          </div>
          <div className={styles.homeAboutContenAuthorInfo}>
            <h3 className={styles.homeAboutContenAuthorInfoTitle}>
              {data.authorName}
            </h3>
            <p className={styles.homeAboutContenAuthorInfoPosition}>
              {data.authorPosition}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;

import React, { useEffect, useState } from "react";
import Image from "next/legacy/image";
import client from "@/utils/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

import chevronRight from "../../../public/chevron-right.png";

import styles from "./SingleRelated.module.css";

const SingleRelated = ({ data }) => {
  if (!data) return null;

  const builder = imageUrlBuilder(client);

  return (
    <section className={styles.singleServiceRelated}>
      <div className="container">
        <div>
          <span className={styles.singleServiceSubtitle}>Usługi powiązane</span>
          <h2 className={styles.singleServiceTitle}>{data.title}</h2>
        </div>
        <ul className={styles.singleServiceRelatedList}>
          {data.relatedItems.map((item) => (
            <li className={styles.singleServiceRelatedItem} key={item._key}>
              <Image
                className={styles.singleServiceRelatedItemImage}
                src={builder.image(item.image).url()}
                width="123"
                height="166"
                alt={item.title}
              />
              <div className={styles.singleServiceRelatedItemWrapper}>
                <h3 className={styles.singleServiceRelatedItemTitle}>
                  {item.title}
                </h3>
                <p className={styles.singleServiceRelatedItemParagraph}>
                  {item.description}
                </p>
                {item.serviceLink && (
                  <a
                    className={styles.singleServiceRelatedItemCTA}
                    href={item.serviceLink}
                  >
                    Przejdź do <span className="red">usługi</span>
                    <Image
                      className={styles.singleServiceRelatedItemCTAImage}
                      src={chevronRight}
                      width="6"
                      height="12"
                      alt="Chevron Right"
                    />
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SingleRelated;

import React from "react";
import Image from "next/legacy/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/utils/sanityClient";

import phone from "../../../public/phone-outgoing-white-red.png";
import styles from "./SingleHero.module.css";
import Link from "next/link";

const SingleHero = ({ data }) => {
  if (!data) return null;

  const builder = imageUrlBuilder(client);

  return (
    <section className={styles.heroSingleService}>
      <div className="container">
        {data.image && (
          <div className={styles.heroSingleServiceImage}>
            <Image
              src={builder.image(data.image).url()}
              width="729"
              height="446"
              alt="zdjecie uslugi"
            />
          </div>
        )}
        <div className={styles.heroSingleServiceBreadcrumbs}>
          <Link href="/#">Usługi</Link>
          <span className={styles.heroSingleServiceBreadcrumbsDivider}>/</span>
          <span className="red">{data.breadcrumbs}</span>
        </div>
        <h1 className={styles.heroSingleServiceTitle}>
          {data.title}
          <span className="red">.</span>
        </h1>
        <p className={styles.heroSingleServiceParahraph}>{data.description}</p>
        <div className={styles.heroSingleServiceCTA}>
          <Link href="#" className="btn-fullBg">
            Zobacz ceny uslug
          </Link>
          <div className={styles.heroSingleServiceCTAPhoneWrapper}>
            <div className={styles.heroSingleServiceCTAPhoneInnerWrapper}>
              <h3 className={styles.heroSingleServiceCTATitle}>
                <span className="red">Umów</span> wizytę
              </h3>
              <Image src={phone} width="18" height="18" alt="phone icon" />
            </div>
            <div className={styles.heroSingleServiceCTAPhone}>
              +48 605 203 282
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleHero;

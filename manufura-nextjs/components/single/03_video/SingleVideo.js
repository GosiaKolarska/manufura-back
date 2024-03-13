import React from "react";
import Image from "next/legacy/image";
import imageUrlBuilder from "@sanity/image-url";
import client from "@/utils/sanityClient";

import phoneOutgoing from "../../../public/phone-outgoing.png";
import styles from "./SingleVideo.module.css";

const SingleVideo = ({ data }) => {
  if (!data) return null;

  const builder = imageUrlBuilder(client);

  return (
    <section className={styles.singleServiceVideo}>
      <div className="container">
        <div className={styles.singleServiceVideoTextWrapper}>
          <div className={styles.singleServiceVideoTextWrapperInner}>
            <h2 className={styles.singleServiceVideoTitle}>{data.title}</h2>
            <a
              href="tel:+48 605 203 282"
              className={styles.singleServiceVideoTitlePhone}
            >
              <span>{data.phoneNumber}</span>
              <Image
                src={phoneOutgoing}
                width="18"
                height="18"
                alt="Phone Icon"
              />
            </a>
          </div>
          <p className={styles.singleServiceVideoParagraph}>
            {data.description}
          </p>
        </div>
        <div className={styles.singleServiceVideoSRCWrapper}>
          <Image
            src={builder.image(data.video).url()}
            width="1291"
            height="613"
            alt="Service Video"
          />
        </div>
      </div>
    </section>
  );
};

export default SingleVideo;

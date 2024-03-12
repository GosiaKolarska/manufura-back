import React from "react";
import Image from "next/legacy/image";
import styles from "./HomeVideo.module.css";
import { urlFor } from "@/utils/sanityImageUtils";

const HomeVideo = ({ data }) => {
  if (
    !data ||
    !data.thumbnailImage ||
    !data.thumbnailImage.asset ||
    !data.thumbnailImage.asset._ref
  ) {
    console.error("Invalid or incomplete data for HomeVideo:", data);
    return null;
  }

  const imageUrl = urlFor(data.thumbnailImage.asset._ref).url();
  const imageAlt = data.thumbnailImage.alt || "Video Thumbnail";

  return (
    <section className={styles.homeVideo}>
      <div className="container">
        <Image
          src={imageUrl}
          width="1273"
          height="613"
          alt={imageAlt}
          layout="responsive"
        />
      </div>
    </section>
  );
};

export default HomeVideo;

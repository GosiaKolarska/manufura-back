import React from "react";
import Image from "next/image";
import { urlFor } from "@/utils/sanityImageUtils";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./HomeServices.module.css";

const HomeServices = ({ data }) => {
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    centerMode: true,
    infinite: false,
  };

  if (!Array.isArray(data)) {
    return <div>Invalid data</div>;
  }

  return (
    <section className={styles.HomeServices}>
      <Slider {...sliderSettings} className="slider-homeServices">
        {data.map((service, index) => {
          const imageUrl =
            service.image && service.image.asset
              ? urlFor(service.image.asset).url()
              : null;

          return (
            <div key={index} className={styles.HomeServicesSliderItem}>
              {imageUrl && (
                <Image
                  className={styles.HomeServicesSliderItemImage}
                  src={imageUrl}
                  width="293"
                  height="311"
                  alt={service.title || "Service Image"}
                />
              )}
              <div className={styles.HomeServicesSliderItemContent}>
                <span className={styles.HomeServicesSliderItemNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className={styles.HomeServicesSliderItemTitle}>
                  {service.title}
                  <span className="red">.</span>
                </h2>
                <p className={styles.HomeServicesSliderItemParagraph}>
                  {service.description}
                </p>
                <div className={styles.HomeServicesSliderItemCTAWrapper}>
                  {service.ctaLinks?.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      className={styles.HomeServicesSliderItemCTA}
                    >
                      {link.text}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
};

export default HomeServices;

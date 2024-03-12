import React, { useState, useRef } from "react";
import Image from "next/legacy/image";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFlip } from "swiper/core";

SwiperCore.use([EffectFlip]);

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-flip";

SwiperCore.use([EffectFlip]);

import styles from "./HomeSlider.module.css";
import phone from "../../../public/phone-outgoing-white-red.png";

import { urlFor } from "@/utils/sanityImageUtils";

const HomeSlider = ({ data }) => {
  if (!data || !data[0] || !data[0].slides) {
    return null;
  }

  const slides = data[0].slides;
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef();

  const handleBreadcrumbClick = (index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  return (
    <section className={styles.heroSlider}>
      <div className="container homeSliderHero">
        <div className={styles.heroBreadcrumbs}>
          <ul className={styles.heroBreadcrumbsList}>
            {["Renowacja", "Lakier", "Skóra", "Szkolenie"].map(
              (item, index) => (
                <li
                  key={index}
                  className={`${styles.heroBreadcrumbsListItem} ${
                    index === currentSlide
                      ? styles.heroBreadcrumbsListItemActive
                      : ""
                  }`}
                  onClick={() => handleBreadcrumbClick(index)}
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
        <Swiper effect="flip" grabCursor={true} className="mySwiper">
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div key={index} className={styles.heroSliderItem}>
                <div className={styles.heroSliderImage}>
                  {slide.image &&
                  slide.image.asset &&
                  slide.image.asset._ref ? (
                    <Image
                      src={urlFor(slide.image.asset).url()}
                      alt={slide.image.alt}
                      width="780"
                      height="690"
                    />
                  ) : (
                    <div>Image not available</div>
                  )}
                </div>
                <div className={styles.heroContent}>
                  <h2 className={styles.heroTitle}>
                    {slide.header}
                    <span className="red">.</span>
                  </h2>
                  <p className={styles.heroParagraph}>{slide.text}</p>
                  <div className={styles.buttonWrapper}>
                    <a href="/uslugi" className="btn-radius">
                      Poznaj nasze usługi
                    </a>
                    <div className={styles.heroCTA}>
                      <h3 className={styles.heroCTATitle}>
                        <span className="red">Zadzwoń</span> do nas
                      </h3>
                      <Image
                        src={phone}
                        width="18"
                        height="18"
                        alt="phone icon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HomeSlider;

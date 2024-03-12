import React from "react";
import Image from "next/legacy/image";
import client from "@/utils/sanityClient";
import imageUrlBuilder from "@sanity/image-url";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./SingleGallery.module.css";

const SingleGallery = ({ data }) => {
  if (!data) return null;
  const builder = imageUrlBuilder(client);
  const urlFor = (source) => builder.image(source).url();

  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className={styles.singleServiceRealizations} id="gallery">
      <div className={styles.singleServiceRealizationsListWrapper}>
        <div className={styles.singleServiceRealizationsList}>
          <Slider {...sliderSettings}>
            {data.realizations.map((item) => (
              <div
                className={styles.singleServiceRealizationsListItem}
                key={item._key}
              >
                <img
                  src={urlFor(item.image.asset)}
                  layout="fill"
                  alt="gallery photo"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default SingleGallery;

import React from "react";
import Image from "next/image";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "./HomeTestimonial.module.css";

import star from "../../../public/star.png";

const HomeTestimonial = () => {
  const sliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    infinite: false,
    lazyLoad: "ondemand",
  };

  return (
    <section
      className={styles.homeTestimonial}
      aria-labelledby="testimonialsHeading"
    >
      <div className="container">
        <div className={styles.homeTestimonialContentWrapper}>
          <div className={styles.homeTestimonialContentTextWrapper}>
            <h2 className={styles.homeTestimonialContentTextTitle}>
              Opinie naszych klientów<span className="red">.</span>
            </h2>
            <div className={styles.homeTestimonialStars}>
              <span className={styles.homeTestimonialStarsNumber}>
                5<span className="white">.</span>0
              </span>
              <span className={styles.homeTestimonialStarsImages}>
                <Image src={star} width="20" height="20" alt="Rated 5 stars" />
                <Image src={star} width="20" height="20" alt="" />
                <Image src={star} width="20" height="20" alt="" />
                <Image src={star} width="20" height="20" alt="" />
                <Image src={star} width="20" height="20" alt="" />
              </span>
              <span className={styles.homeTestimonialStarsEndText}>
                Oceny wszysktich <span className="red">klientów</span>
              </span>
            </div>
          </div>
          <a href="/" className="btn-radius" aria-label="Poznaj nasze usługi">
            Poznaj nasze usługi
          </a>
        </div>
      </div>
      <Slider
        {...sliderSettings}
        className={`homeTestimonialListSlider ${styles.homeTestimonialList}`}
      >
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className={`home-testimonial-list-item ${styles.homeTestimonialListItem}`}
          >
            <h3 className={styles.homeTestimonialListItemTitle}>
              {testimonial.name}
            </h3>
            <span className={styles.homeTestimonialListItemSubtitle}>
              {testimonial.position}
            </span>
            <p className={styles.homeTestimonialListItemParagraph}>
              {testimonial.feedback}
            </p>
          </article>
        ))}
      </Slider>
    </section>
  );
};

const testimonials = [
  {
    name: "Grzesiek Godlewski",
    position: "Broker.auto.pl",
    feedback:
      "Wysyłam tam auta naszych klientów, firma naprawdę godna polecenia.",
  },
  {
    name: "Piotr Woźniak",
    position: "Kar-Matt Sp.J.",
    feedback:
      "Fachowość i zaangażowanie. Polecam wszystkim dbającym o estetykę swojego pojazdu.",
  },
  {
    name: "Tomasz",
    position: "Klient",
    feedback:
      "Mogę jedynie gorąco polecić! Dawno nic na mnie nie zrobiło takiego wrażenia jak praca Pana Adama który przeprowadził renowację kierownicy bez obszywania na nowo skórą.",
  },
  {
    name: "Jakub",
    position: "Klient",
    feedback:
      "Profesjonalna naprawa, pomimo ostrzeżenia, że materiał może nie być taki sam, praktycznie nie widać różnicy. Cena w porządku. Naprawa w ciągu jednego dnia. Szczerze polecam.",
  },
];

export default HomeTestimonial;

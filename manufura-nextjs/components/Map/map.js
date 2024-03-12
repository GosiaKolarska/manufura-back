import React from "react";
import styles from "./map.module.css";

const Map = () => {
  return (
    <section className={styles.mapSection}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1186.2555124323894!2d19.925154833632842!3d50.09441965516743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165a445da09243%3A0x41fb17446299113f!2sHenryka%20Pacho%C5%84skiego%2011%2C%2031-223%20Krak%C3%B3w!5e1!3m2!1sen!2spl!4v1710164627020!5m2!1sen!2spl"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};

export default Map;

import Image from "next/legacy/image";
import React from "react";
import styles from "./footer.module.css";

import Logo from "../../public/logo-manufura.png";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={`container ${styles.footerTop}`}>
        <div className={styles.footerTopLeft}>
          <Image src={Logo} width="141" height="62" alt="Logo" />
          <p className={styles.footerTopLeftContent}>
            Twoje doskonałe rozwiązania w autodetailingu i tapicerstwie
          </p>
        </div>
        <div className={styles.footerTopRight}>
          <div className={styles.footerMenuItem}>
            <h3 className={styles.footerMenuTitle}>O nas</h3>
            <span className={styles.footerMenuTitleDivider}></span>
            <ul className={styles.footerMenuItemList}>
              <li className={styles.footerMenuItemListItem}>Szkolenie</li>
              <li className={styles.footerMenuItemListItem}>Kontakt</li>
            </ul>
          </div>
          <div className={styles.footerMenuItem}>
            <h3 className={styles.footerMenuTitle}>Usługi autodetailingowe</h3>
            <span className={styles.footerMenuTitleDivider}></span>
            <ul className={styles.footerMenuItemList}>
              <li className={styles.footerMenuItemListItem}>
                Malowanie skór samochodowych
              </li>
              <li className={styles.footerMenuItemListItem}>
                Zabezpieczenie lakieru
              </li>
              <li className={styles.footerMenuItemListItem}>
                Polerowanie lakieru
              </li>
              <li className={styles.footerMenuItemListItem}>
                Czyszczenie skór samochodowych
              </li>
              <li className={styles.footerMenuItemListItem}>
                Czyszczenie wnętrz
              </li>
            </ul>
          </div>
          <div className={styles.footerMenuItem}>
            <h3 className={styles.footerMenuTitle}>Usługi tapicerskie</h3>
            <span className={styles.footerMenuTitleDivider}></span>
            <ul className={styles.footerMenuItemList}>
              <li className={styles.footerMenuItemListItem}>
                Malowanie tapicerek meblowych
              </li>
              <li className={styles.footerMenuItemListItem}>
                Czyszczenie tapicerek meblowych
              </li>
              <li className={styles.footerMenuItemListItem}>Tapicerstwo</li>
            </ul>
          </div>
        </div>
      </div>

      <div className={`container ${styles.copy}`}>
        <div className={styles.copyLeft}>
          <div>Wszystkie prawa zastrzeżone © Manufura</div>
          <div>Polityka prywatności</div>
        </div>
        <div className={styles.copyRight}>
          <ul className={styles.socialList}>
            <li className={styles.socialItem}>
              <a
                className={styles.socialItemLink}
                href="https://www.facebook.com/manufura"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="6"
                  height="13"
                  viewBox="0 0 6 13"
                  fill="none"
                >
                  <path
                    d="M6 0H4.36364C3.64032 0 2.94663 0.34241 2.43516 0.951903C1.9237 1.5614 1.63636 2.38805 1.63636 3.25V5.2H0V7.8H1.63636V13H3.81818V7.8H5.45455L6 5.2H3.81818V3.25C3.81818 3.07761 3.87565 2.91228 3.97794 2.79038C4.08023 2.66848 4.21897 2.6 4.36364 2.6H6V0Z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                className={styles.socialItemLink}
                href="https://www.instagram.com/manufura_/"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="white"
                  />
                </svg>
              </a>
            </li>
            <li className={styles.socialItem}>
              <a
                className={styles.socialItemLink}
                href="https://www.tiktok.com/@manufura"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#fff"
                  width="13"
                  height="13"
                  viewBox="0 0 512 512"
                  id="icons"
                >
                  <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;

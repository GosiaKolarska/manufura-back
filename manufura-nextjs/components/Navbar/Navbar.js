import React, { useState, useEffect, useCallback } from "react";
import Image from "next/legacy/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Navbar.module.css";
import client from "@/utils/sanityClient";
import { urlFor } from "@/utils/sanityImageUtils";

import phoneOutgoing from "../../public/phone-outgoing-white.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faHouse } from "@fortawesome/free-solid-svg-icons";

const Dropdown = ({ uslugi }) => {
  if (!uslugi) return null;

  return (
    <div className={styles.dropdown}>
      {uslugi.dropdownCategories.map((category, catIndex) => (
        <div key={catIndex} className={styles.dropdownCategory}>
          <span className={styles.dropdownTitle}>{category.categoryTitle}</span>
          <span className={styles.dropdownDividier}></span>
          <ul className={styles.dropdownMenu}>
            {category.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <Link className={styles.dropdownMenuListItem} href={link.path}>
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const NavbarItem = ({ navItem, isActive }) => {
  const renderLink = useCallback(
    (path, name) => (
      <Link
        href={path}
        className={`${styles.link} ${isActive(path) ? styles.linkActive : ""}`}
      >
        {name}
      </Link>
    ),
    [isActive]
  );

  return (
    <>
      {navItem.home && (
        <li className={styles.linkItem}>
          {renderLink(
            navItem.home.path,
            <svg
              className={styles.linkItemHome}
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="home">
                <path
                  id="Vector"
                  d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M9 22V12H15V22"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          )}
        </li>
      )}
      {navItem.uslugi && (
        <li className={styles.linkItem}>
          {renderLink(
            navItem.uslugi.path,
            <>
              Usługi
              <FontAwesomeIcon icon={faChevronDown} size="xs" />
            </>
          )}
          <Dropdown uslugi={navItem.uslugi} />
        </li>
      )}
      {navItem.o_nas && (
        <li className={styles.linkItem}>
          {renderLink(navItem.o_nas.path, "O nas")}
        </li>
      )}
      {navItem.szkolenie && (
        <li className={styles.linkItem}>
          {renderLink(navItem.szkolenie.path, "Szkolenie")}
        </li>
      )}
      {navItem.kontakt && (
        <li className={styles.linkItem}>
          {renderLink(navItem.kontakt.path, "Kontakt")}
        </li>
      )}
    </>
  );
};

const Navbar = () => {
  const router = useRouter();
  const [navbarData, setNavbarData] = useState(null);

  const isActive = useCallback(
    (pathname) => router.pathname === pathname,
    [router.pathname]
  );

  useEffect(() => {
    const query = `
      *[_type == "navbar"][0]{
        logo,
        navItems[] {
          ...,
          home {
            path
          },
          uslugi {
            path,
            dropdownCategories[] {
              categoryTitle,
              links[] {
                title,
                path
              }
            }
          },
          o_nas {
            path
          },
          szkolenie {
            path
          },
          kontakt {
            path
          }
        },
        contactInfo,
        phoneNumber
      }
    `;
    client
      .fetch(query)
      .then((data) => {
        setNavbarData(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  if (!navbarData) return null;

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        {navbarData.logo && (
          <Link href="/">
            <Image
              src={urlFor(navbarData.logo.asset).url()}
              alt="Logo"
              width="117"
              height="52"
              layout="fixed"
            />
          </Link>
        )}
      </div>
      <ul className={styles.links}>
        {navbarData.navItems.map((item, index) => (
          <NavbarItem key={index} navItem={item} isActive={isActive} />
        ))}
      </ul>
      <div className={styles.contact}>
        <div>
          <div>{navbarData.contactInfo}</div>
          <div className={styles.phone}>{navbarData.phoneNumber}</div>
        </div>
        <div className={styles.contactIcon}>
          <Image
            src={phoneOutgoing}
            width="18"
            height="18"
            alt="Phone outgoing icon"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

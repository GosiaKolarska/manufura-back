import React, { useState, useEffect } from "react";
import styles from "./Socials.module.css";
import client from "@/utils/sanityClient";

const Socials = () => {
  const [socialsData, setSocialsData] = useState(null);

  useEffect(() => {
    client
      .fetch('*[_type == "socials"][0]')
      .then((data) => setSocialsData(data))
      .catch((error) => console.error(error));
  }, []);

  if (!socialsData) return null;

  const socialLinks = [
    {
      name: "Facebook",
      href: socialsData.facebook,
      ariaLabel: "Visit our Facebook page",
    },
    {
      name: "Instagram",
      href: socialsData.instagram,
      ariaLabel: "Visit our Instagram page",
    },
    {
      name: "TikTok",
      href: socialsData.tiktok,
      ariaLabel: "Visit our TikTok page",
    },
  ];

  return (
    <div className={styles.socials}>
      <ul className={styles.socialsList}>
        {socialLinks.map((link, index) => (
          <li key={index} className={styles.socialsListItem}>
            <a
              target="_blank"
              href={link.href}
              className={styles.socialsListItemLink}
              rel="noopener noreferrer"
              aria-label={link.ariaLabel}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;

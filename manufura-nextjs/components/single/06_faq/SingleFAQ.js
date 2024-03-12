import React, { useState } from "react";
import Image from "next/legacy/image";
import styles from "./SingleFAQ.module.css";

const SingleFaq = ({ data }) => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className={styles.singleServiceFAQ}>
      <div className="container">
        <span className={styles.singleServiceSubtitle}>FAQ</span>
        <h2 className={styles.singleServiceTitle}>
          Najczęściej zadawane pytania
        </h2>

        <ul className={styles.singleServiceFAQList}>
          {data.faqs.map((faq, index) => (
            <li key={faq._key} className={styles.singleServiceFAQListItem}>
              <div
                className={styles.singleServiceFAQListItemQuestion}
                onClick={() => toggleFAQ(index)}
              >
                <h4 className={styles.singleServiceFAQListItemTitle}>
                  {faq.question}
                </h4>
                <Image
                  className={`${styles.singleServiceFAQListItemTitleIcon} ${
                    openFAQ === index
                      ? styles.singleServiceFAQListItemTitleIconRotated
                      : ""
                  }`}
                  src="/plus-circle.png"
                  width="24"
                  height="24"
                  alt="Toggle FAQ"
                />
              </div>
              {openFAQ === index && (
                <p
                  className={`${styles.singleServiceFAQListItemAnswer} ${
                    openFAQ === index
                      ? styles.singleServiceFAQListItemAnswerExpanded
                      : ""
                  }`}
                >
                  {faq.answer}
                </p>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SingleFaq;

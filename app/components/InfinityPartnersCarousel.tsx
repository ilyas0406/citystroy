import React from "react";
import Image from "next/image";
import styles from "./InfinityPartnersCarousel.module.css";

import { partners, ministryLogos } from './MinistriesLogos';

const allPartners = [...partners, ...ministryLogos];

export default function InfinityPartnersCarousel() {
  return (
    <div className={`${styles.wrapper} ${styles.carbonBg}`}>
      <h1 className={styles.title}>Партнеры</h1>
      {/* Верхний ряд — министерства, едет влево */}
      <div className={styles.carousel}>
        <div className={styles.track}> 
          {ministryLogos.map((partner, idx) => (
            <div className={styles.logo} key={`top-${partner.title}`}>
              <div>
              <Image
                src={partner.src}
                alt={partner.alt}
                title={partner.title}
                width={180}
                height={180}
                style={{ objectFit: 'contain' }}
              />
              <p>{partner.title}</p>
              </div>
            </div>
          ))}
        </div> 
      </div>
      {/* Второй ряд — вправо */}
      <div className={styles.carousel}>
        <div className={styles.trackReverse}>
          {partners.map((partner, idx) => (
            <div className={styles.logo} key={`top-${partner.title}`}>
              <div className={styles.logo}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  title={partner.title}
                  width={180}
                  height={180}
                  style={{ objectFit: 'contain' }}
                />
                <p>{partner.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

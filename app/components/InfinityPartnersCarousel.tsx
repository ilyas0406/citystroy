import React from "react";
import Image from "next/image";
import styles from "./InfinityPartnersCarousel.module.css";

import { ministryLogos } from './MinistriesLogos';
import { partners } from './PartnersLogos';


export default function InfinityPartnersCarousel() {
  return (
    <div className={`${styles.wrapper} carbonBg`}>
      <h1 className={styles.title}>Партнеры</h1>
      {/* Верхний ряд — министерства, едет влево */}
      <div className={styles.carousel}>
        <div className={styles.trackReverse}> 
          {[...ministryLogos, ...ministryLogos].map((partner, idx) => (
            <div className={styles.logo} key={`top-${partner.title}-${idx}`}>
              <div>
              <Image
                src={partner.src}
                alt={partner.alt}
                title={partner.title}
                width={120}
                height={120}
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
        <div className={styles.track}>
          {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((partner, idx) => (
            <div className={styles.logo} key={`partner-${idx}`} >
              <div className={styles.logo}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={120}
                  height={120}
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

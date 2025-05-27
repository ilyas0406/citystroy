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
              <div className="flex flex-col items-center justify-center h-full">
                <div className="relative w-16 h-16">
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    title={partner.title}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <p className="text-xs mt-1 text-center">{partner.title}</p>
              </div>
            </div>
          ))}
        </div> 
      </div>
      {/* Второй ряд — вправо */}
      <div className={styles.carousel}>
        <div className={styles.track}>
          {[...partners, ...partners, ...partners, ...partners, ...partners, ...partners, ...partners].map((partner, idx) => (
            <div className={styles.logo} key={`partner-${idx}`}>
<div className="relative w-20 h-20">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
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

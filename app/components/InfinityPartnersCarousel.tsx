import React from "react";
import Image from "next/image";
import styles from "./InfinityPartnersCarousel.module.css";

const partners = [
  { src: "/partners/logo-white-theme.png", alt: "Partner 1" },
  { src: "/partners/logoipsum-218.svg", alt: "Partner 2" },
  { src: "/partners/logoipsum-297.svg", alt: "Partner 3" },
  { src: "/partners/logoipsum-311.svg", alt: "Partner 4" },
  { src: "/partners/logoipsum-325.svg", alt: "Partner 5" },
];

export default function InfinityPartnersCarousel() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Партнеры</h1>
      <div className={styles.carousel}>
        <div className={styles.track}>
          {Array(4).fill(partners).flat().map((partner, idx) => (
            <div className={styles.logo} key={idx}>
              <Image src={partner.src} alt={partner.alt} width={200} height={100} objectFit="contain" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

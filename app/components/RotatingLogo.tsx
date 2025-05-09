import React from "react";
import Image from "next/image";
import styles from "./RotatingLogo.module.css";

export default function RotatingLogo() {
  return (
    <div className={styles.logoBaseWrapper}>
      <div className={styles.logoShadow}></div>
      <div className={styles.logoWrapper}>
        <Image src="/logo.avif" alt="Логотип СитиСтрой-2030" width={200} height={200} />
      </div>
    </div>
  );
}

import styles from "./portfolio.module.css";
import React from "react";

export function Image({href, src, alt}) {
  return (
    <>
      <a href={href}>
        <img className={styles.img} src={src} alt={alt} />
      </a>
      <h6>{alt}</h6>
    </>
  );
}

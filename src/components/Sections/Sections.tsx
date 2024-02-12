import { useState } from "react"
import styles from "./Section.module.css";

export default function Sections() {

    const [soon, setsoon] = useState(true);

  return (
    <section className={`${styles.sections} d-flex`}>
        <div className={`${soon ? styles.soon : ""}`}><h2>Trading</h2></div>
        <div className={`${soon ? styles.soon : ""}`}><h2>Automation</h2></div>
        <div className={`${soon ? styles.soon : ""}`}><h2>Portfolio</h2></div>
        <div className={styles.active}><h2>Alerts</h2></div>
        <div className={`${styles["section-title"]}`}><h2>Training</h2></div>
    </section>
  )
}

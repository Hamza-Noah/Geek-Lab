import styles from "./Data.module.css";
import dataImage1 from "../../assets/images/data-1.svg";
import dataImage2 from "../../assets/images/data-2.svg";
import dataImage3 from "../../assets/images/data-3.svg";
import dataImage4 from "../../assets/images/data-4.svg";

export default function Data() {
  const dataAlets = [
    "X company released a short report on $XYZ, High IV option sales opps",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
    "$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.",
  ];
  return (
    <section className={styles.data}>
      <div className={styles.test}>
        <div className={styles["data-info"]}>
          <div className="d-flex justify-content-between">
            <div className={styles["data-stat"]}>
              <i>
                <img src={dataImage1} alt="" />
              </i>
              <h3>$TSLA</h3>
            </div>
            <div className={styles["data-stat"]}>
              <i>
                <img src={dataImage2} alt="" />
              </i>
              <h3>200 Contracts</h3>
            </div>
            <div className={styles["data-stat"]}>
              <i>
                <img src={dataImage3} alt="" />
              </i>
              <h3>17.2%</h3>
            </div>
            <div className={styles["data-stat"]}>
              <i>
                <img src={dataImage4} alt="" />
              </i>
              <h3>High Risk</h3>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.alerts} mt-2`}>
        {dataAlets.map((alert, i) => {
          return (
            <div key={i} className={styles.alert}>
              <p>{alert}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

import styles from "./Filter.module.css";
import check from "../../assets/images/check.svg";

export default function Filter() {
  return (
    <section className={styles.filter}>
      <h3 className="fw-bolder">Filters</h3>
      <form onSubmit={e=> e.preventDefault()}>
        <div className="filter-option mb-4">
          <label htmlFor="">Industry</label>
          <div className={styles["select-option"]}>
            <select>
              <option value="health-care">Health care.</option>
            </select>
          </div>
          <p>Choose something.</p>
        </div>
        <div className="filter-option mb-4">
          <label htmlFor="">Market Cap</label>
          <div className={styles["select-option"]}>
            <select>
              <option value="health-care">Large Cap.</option>
            </select>
          </div>
          <p>Press Apply to see changes.</p>
        </div>
        <div className="filter-option mb-4">
          <label htmlFor="">Risk</label>
          <div className={styles["select-option"]}>
            <select>
              <option value="">Insert Text Here</option>
              <option value="low risk">Low Risk</option>
              <option value="low risk">Mid-Risk</option>
              <option value="low risk">Low Risk</option>
              <option value="low risk">Option text here</option>
            </select>
          </div>
          <p>Choose something.</p>
        </div>
        <div>
          <input type="submit" value="Apply Filters" />
        </div>
      </form>
    </section>
  );
}

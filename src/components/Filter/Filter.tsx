import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <section className={styles.filter}>
      <h3 className="fw-bolder">Filters</h3>
      <form action="">
        <div className="filter-option mb-4">
          <label htmlFor="">Industry</label>
          <div className={styles["select-option"]}>
            <select name="" id="">
              <option value="health-care">Health care.</option>
            </select>
          </div>
          <p>Choose something.</p>
        </div>
        <div className="filter-option mb-4">
          <label htmlFor="">Market Cap</label>
          <div className={styles["select-option"]}>
            <select name="" id="">
              <option value="health-care">Large Cap.</option>
            </select>
          </div>
          <p>Press Apply to see changes.</p>
        </div>
        <div className="filter-option mb-4">
          <label htmlFor="">Risk</label>
          <div className={styles["select-option"]}>
            <select name="" id="">
              <option value="health-care">Insety text here</option>
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

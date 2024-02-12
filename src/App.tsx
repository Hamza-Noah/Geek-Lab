import Navbar from "./components/Navbar/Navbar";
import Sections from "./components/Sections/Sections";
import Filter from "./components/Filter/Filter";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <Sections />
        <div className={`${styles.content} d-flex}`}>
          <div className={styles.filter}>
            <Filter />
          </div>
        </div>
      </div>
    </>
  );
}

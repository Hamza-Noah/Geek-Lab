import Navbar from "./components/Navbar/Navbar";
import Sections from "./components/Sections/Sections";
import Filter from "./components/Filter/Filter";
import styles from "./App.module.css";
import Data from "./components/Data/Data";

export default function App() {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <Sections />
        <div className={`${styles.content}`}>
          <div className="row">
            <div className={`${styles.filter} col-md-4`}>
              <Filter />
            </div>
            <div className={`col`}>
              <Data />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

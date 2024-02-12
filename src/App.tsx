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
        <div className={`${styles.content} container`}>
          <div className="row">
            <div className={`${styles.filter} col-md-4`}>
              <Filter />
            </div>
            <div className={`col-md-8 bg-danger`}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
              ut debitis voluptatum reiciendis distinctio! Aliquid eligendi
              quibusdam atque expedita eum alias nobis nulla ipsam odit maiores
              vitae, iure laborum tempora.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

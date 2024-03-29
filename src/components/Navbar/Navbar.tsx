import logo from "../../assets/images/logo.png";
import notification from "../../assets/images/notification.svg";
import user from "../../assets/images/user.jpg";
import arrowDown from "../../assets/images/chevron-down.svg";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <nav className={`${styles.navbar}`}>
        <div className="d-flex">
          <a href="#" className="me-5">
            <img height="71px" src={logo} alt="" />
          </a>
          <div
            className={`${styles.actions} d-flex flex-grow-1 justify-content-between`}
          >
            <div className={`${styles.search}`}>
              <input type="search" placeholder="search" />
            </div>
            <div className="account d-flex align-items-center">
              <div className="notification me-4">
                <img src={notification} alt="" />
              </div>
              <div className={`${styles.user} d-flex`}>
                <img
                  src={user}
                  alt="user image"
                  className={`${styles["user-image"]} me-4`}
                />
                <div className="user-data">
                  <a className={`${styles.username}`} href="#">
                    Moni Roy
                  </a>
                  <p>Admin</p>
                </div>
              </div>
              <div className={styles.seetings}>
                <button>
                  <i>
                    <img src={arrowDown} alt="" />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

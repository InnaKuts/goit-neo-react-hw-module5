import { Outlet } from "react-router-dom";
import styles from "./MovieDetailsPage.module.css";

const MovieDetailsPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Movie Details</h1>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;

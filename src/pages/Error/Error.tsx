import { useParams } from "react-router-dom";
import styles from "../Main/Main.module.css";

function Error() {
  const { city } = useParams();
  return (
    <div className={styles["wrap"]}>
      <div className={styles["header-city"]}>
        <img src="/geo-icon.svg" alt="иконка геолокации" />
        {city}
      </div>
      <div>Город не найден</div>
    </div>
  );
}

export default Error;

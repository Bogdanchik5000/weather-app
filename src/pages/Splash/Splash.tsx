import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./Spash.module.css";
import { ChangeEvent, useState } from "react";

function Splash() {
  const [city, setCity] = useState<string>("");
  const [btnIsDisable, setBtnIsDisable] = useState<boolean>(true);
  const navigate = useNavigate();

  function changeCity(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.value !== "") {
      setBtnIsDisable(false);
    }
    setCity(e.target.value);
  }

  function checkWeather() {
    navigate(`/${city}`);
  }

  return (
    <div className={styles["wrap"]}>
      <div className={styles["header"]}>
        <img className={styles["logo-icon"]} src="/logo.svg" alt="Логотип" />
        <div className={styles["logo-text"]}>
          weather
          <br />
          App
        </div>
      </div>
      <div className={styles["weather-logo"]}>
        <img
          className={styles["icon"]}
          src="/weather-icon.svg"
          alt="Картинка погоды"
          width="150"
        />
      </div>
      <div className={styles["footer-form"]}>
        <input type="text" placeholder="Введите город" onChange={changeCity} />
        <Button disabled={btnIsDisable} onClick={checkWeather}>
          check
        </Button>
      </div>
    </div>
  );
}

export default Splash;

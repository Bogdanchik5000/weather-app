import { useLoaderData, useNavigate } from "react-router-dom";
import { IWeather } from "../../interfaces/geo.interface";
import styles from "./Main.module.css";
import { API_GET_ICON } from "../../helpers/API";
import Button from "../../components/Button/Button";

function Main() {
  const { main, name, weather, wind } = useLoaderData() as IWeather;
  const navigate = useNavigate();

  //Первая буква заглавная
  const desc =
    weather[0].description[0].toUpperCase() + weather[0].description.slice(1);

  return (
    <div className={styles["wrap"]}>
      <div className={styles["header-city"]}>
        <img src="/geo-icon.svg" alt="Иконка геолокации" />
        {name}
      </div>

      <div className={styles["weather-icon"]}>
        <img
          src={`${API_GET_ICON}${weather[0].icon}@2x.png`}
          alt="Иконка погоды"
        />
      </div>

      <div className={styles["temp-main"]}>
        <div className={styles["temp"]}>{main.temp}°</div>
        <div className={styles["temp-info"]}>
          <div className={styles["temp-desc"]}>{desc}</div>
          <div className={styles["temp-range"]}>
            <div>Максимум: {main.temp_max}°</div>
            <div>Минимум: {main.temp_min}°</div>
          </div>
        </div>
      </div>

      <div className={styles["temp-footer"]}>
        <span>Ощущается {main.feels_like}°</span>
        <span>Ветер {wind.speed} км/с</span>
      </div>

      <Button className={styles["btn-prev"]} onClick={() => navigate("/")}>
        На главную
      </Button>
    </div>
  );
}

export default Main;

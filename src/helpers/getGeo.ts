import axios from "axios";
import { API_KEY, PREFIX_API } from "./API";
import { IGeo, IWeather } from "../interfaces/geo.interface";

async function getGeo(city: string): Promise<IWeather> {
  const { data } = await axios.get<IGeo>(
    `${PREFIX_API}q=${city}&appid=${API_KEY}`
  );

  const { lat, lon } = data.coord;

  const weather = await axios.get(
    `${PREFIX_API}lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=ru`
  );
  return weather.data;
}

export default getGeo;

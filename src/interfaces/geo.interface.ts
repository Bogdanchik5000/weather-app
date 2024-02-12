export interface IGeo {
  coord: {
    lon: number;
    lat: number;
  };
}

export interface IWeather {
  main: {
    feels_like: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: [
    {
      description: string;
      icon: string;
    }
  ];
  wind: {
    speed: number;
  };
  name: string;
}

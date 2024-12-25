export interface ILocation {
  latitude: number | string;
  longitude: number | string;
}
export interface IWeather {
  description: string;
  icon: string;
}

export interface IWeatherData {
  temp: string;
  weather: IWeather;
  datetime: string;
}

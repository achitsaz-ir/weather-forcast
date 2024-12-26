/**
 * Interface representing a geographical location.
 *
 * @property {number | string} latitude - The latitude of the location.
 * @property {number | string} longitude - The longitude of the location.
 */
export interface ILocation {
  latitude: number | string;
  longitude: number | string;
}

/**
 * Interface representing weather information.
 *
 * @property {string} description - The description of the weather.
 * @property {string} icon - The icon representing the weather.
 */
export interface IWeather {
  description: string;
  icon: string;
}

/**
 * Interface representing weather data for a specific date.
 *
 * @property {string} temp - The temperature for the specific date.
 * @property {IWeather} weather - The weather information for the specific date.
 * @property {string} datetime - The date and time of the weather data.
 */
export interface IWeatherData {
  temp: string;
  weather: IWeather;
  datetime: string;
}

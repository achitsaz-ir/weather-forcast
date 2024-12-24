/**
 * Interface representing a location with latitude and longitude.
 */
export interface ILocation {
    latitude: number | string;
    longitude: number | string;
}

/**
 * Interface representing weather data with dynamic keys.
 */
export interface IWeather {
    [key: string]: string | number;
}

/**
 * Interface representing detailed weather information.
 */
export interface IWeatherDetails {
    icon: string;
    description: string;
}

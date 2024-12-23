export interface ILocation {
    latitude: number | string;
    longitude: number | string;
}

export interface IWeather {
    [key: string]: string | number;
}

export interface IWeatherDetails {
    icon: string;
    description: string;
}

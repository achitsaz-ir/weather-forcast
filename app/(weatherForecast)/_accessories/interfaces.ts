export interface ILocation {
    latitude: number | string;
    longitude: number | string;
}

export interface IWeather {
    [key: string]: string | number;
}

import { create } from 'zustand';

import { IWeather } from '../interfaces';

interface IWeatherState {
    forecasts: IWeather[];
    city: string;
}

interface IWeatherActions {
    setWeatherForecasts: (weather: IWeather[]) => void;
    setCityOfLocation: (city: string) => void;
}

export interface IWeatherStore extends IWeatherActions, IWeatherState {}

const defaultState = (): IWeatherState => ({ forecasts: [] }) as unknown as IWeatherState;

export const createWeatherStore = (initState: () => IWeatherState = defaultState) =>
    create<IWeatherStore>()((set) => ({
        ...initState(),
        setWeatherForecasts(weather) {
            set(() => ({ forecasts: weather }));
        },
        setCityOfLocation(city) {
            set(() => ({ city }));
        }
    }));

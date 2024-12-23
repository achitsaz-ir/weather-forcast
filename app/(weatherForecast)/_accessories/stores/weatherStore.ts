import { create } from 'zustand';

import { IWeather } from '../interfaces';

interface IWeatherState {
    today: IWeather;
}

interface IWeatherActions {
    setTodayWeather: (weather: IWeather) => void;
}

export interface IWeatherStore extends IWeatherActions, IWeatherState {}

const defaultState = (): IWeatherState => ({ today: {} }) as IWeatherState;

export const createWeatherStore = (initState: () => IWeatherState = defaultState) =>
    create<IWeatherStore>()((set) => ({
        ...initState(),
        setTodayWeather(weather) {
            set(() => ({ today: weather }));
        }
    }));

import { create } from 'zustand';

import { IWeather } from '../interfaces';

/**
 * Interface representing the state of the weather store.
 */
interface IWeatherState {
    forecasts: IWeather[];
    city: string;
}

/**
 * Interface representing the actions for the weather store.
 */
interface IWeatherActions {
    setWeatherForecasts: (weather: IWeather[]) => void;
    setCityOfLocation: (city: string) => void;
}

/**
 * Interface representing the weather store, combining state and actions.
 */
export interface IWeatherStore extends IWeatherActions, IWeatherState {}

/**
 * Default state for the weather store.
 *
 * @returns {IWeatherState} The default state.
 */
const defaultState = (): IWeatherState => ({
    forecasts: [],
    city: ''
});

/**
 * Creates a weather store with the given initial state.
 *
 * @param {() => IWeatherState} [initState=defaultState] - Function to return the initial state.
 * @returns {IWeatherStore} The created weather store.
 */
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

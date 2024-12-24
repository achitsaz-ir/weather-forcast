'use client';

import { JSX, ReactNode, createContext, useRef } from 'react';

import { createWeatherStore } from '../stores/weatherStore';

/**
 * Interface representing the API of the weather store.
 */
interface IWeatherStoreApi extends ReturnType<typeof createWeatherStore> {}

/**
 * Interface representing the props for the WeatherStoreProvider component.
 */
interface IWeatherStoreProviderProps {
    children: ReactNode;
}

/**
 * Context for the weather store.
 */
export const WeatherStoreContext = createContext<IWeatherStoreApi | undefined>(undefined);

/**
 * WeatherStoreProvider component to provide the weather store context to its children.
 *
 * @param {IWeatherStoreProviderProps} props - The component props.
 * @param {ReactNode} props.children - The child components to be rendered within the provider.
 * @returns {JSX.Element} The rendered component.
 */
export function WeatherStoreProvider({ children }: IWeatherStoreProviderProps): JSX.Element {
    const storeRef = useRef<IWeatherStoreApi | undefined>(undefined);

    if (!storeRef.current) {
        storeRef.current = createWeatherStore();
    }

    const stateApi = storeRef.current;

    return <WeatherStoreContext.Provider value={stateApi}>{children}</WeatherStoreContext.Provider>;
}

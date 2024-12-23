'use client';

import { ReactNode, createContext, useRef } from 'react';

import { createWeatherStore } from '../stores/weatherStore';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface IWeatherStoreApi extends ReturnType<typeof createWeatherStore> {}

interface IWeatherStoreProviderProps {
    children: ReactNode;
}

export const WeatherStoreContext = createContext<IWeatherStoreApi | undefined>(undefined);

export function WeatherStoreProvider({ children }: IWeatherStoreProviderProps) {
    const storeRef = useRef<IWeatherStoreApi>(undefined);

    if (!storeRef.current) {
        storeRef.current = createWeatherStore();
    }

    const stateApi = storeRef.current;

    return <WeatherStoreContext.Provider value={stateApi}>{children}</WeatherStoreContext.Provider>;
}

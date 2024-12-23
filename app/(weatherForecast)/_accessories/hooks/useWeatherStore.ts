'use client';

import { use } from 'react';

import { useStore } from 'zustand';

import { WeatherStoreContext } from '../providers/WeatherStoreProvider';
import { IWeatherStore } from '../stores/weatherStore';

const useWeatherStore = <T>(selector: (store: IWeatherStore) => T): T => {
    const weatherStoreContext = use(WeatherStoreContext);

    if (!weatherStoreContext) {
        throw new Error(`useWeatherStore must be used within WeatherStoreProvider`);
    }

    return useStore(weatherStoreContext, selector);
};

export default useWeatherStore;

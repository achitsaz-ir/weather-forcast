'use client';

import { useContext } from 'react';

import { useStore } from 'zustand';

import { WeatherStoreContext } from '../providers/WeatherStoreProvider';
import { IWeatherStore } from '../stores/weatherStore';

/**
 * Custom hook to access the weather store.
 *
 * This hook uses the useContext hook to retrieve the weather store context
 * and the useStore hook from Zustand to select a specific part of the store.
 *
 * @param {function} selector - Function to select a specific part of the weather store.
 * @returns {T} The selected part of the weather store.
 * @throws {Error} If the hook is used outside of the WeatherStoreProvider.
 */
const useWeatherStore = <T>(selector: (store: IWeatherStore) => T): T => {
    const weatherStoreContext = useContext(WeatherStoreContext);

    if (!weatherStoreContext) {
        throw new Error('useWeatherStore must be used within WeatherStoreProvider');
    }

    return useStore(weatherStoreContext, selector);
};

export default useWeatherStore;

import { useSearchParams } from 'next/navigation';

import handleCatchError from '@/utils/handleCatchError';

import { ILocation } from '../interfaces';
import useWeatherStore from './useWeatherStore';

/**
 * Custom hook to fetch weather data from the WeatherBit API.
 *
 * This hook provides a function to fetch the weather data for a given location
 * and update the weather store with the fetched data.
 *
 * @returns {object} An object containing the getTodayWeather function.
 */
export default function useWeatherBit(): {
  getTodayWeather: ({ latitude, longitude }: ILocation) => Promise<void>;
} {
  const searchParams = useSearchParams();
  const setCityOfLocation = useWeatherStore((state) => state.setCityOfLocation);
  const setWeatherForecasts = useWeatherStore((state) => state.setWeatherForecasts);

  const weatherUnit = searchParams.get('unit');

  /**
   * Fetches the weather data for today from the WeatherBit API.
   *
   * @param {ILocation} location - The location for which to fetch the weather data.
   */
  const getTodayWeather = async ({ latitude, longitude }: ILocation) => {
    try {
      const urlQueries = buildWeatherBitQuery(latitude, longitude, weatherUnit);
      const todayWeatherRes = await fetch(urlQueries);
      if (!todayWeatherRes.ok) {
        throw new Error(`Error! Response status: ${todayWeatherRes.status}`);
      }

      const weatherBitData = await todayWeatherRes.json();
      setWeatherForecasts(weatherBitData?.data);
      setCityOfLocation(weatherBitData.city_name);
    } catch (error) {
      handleCatchError(error instanceof Error ? error : new Error('An unknown error occurred'));
    }
  };

  return { getTodayWeather };
}

/**
 * Builds the query URL for the WeatherBit API.
 *
 * @param {number | string} latitude - The latitude of the location.
 * @param {number | string} longitude - The longitude of the location.
 * @param {string | null} weatherUnit - The unit of measurement for the weather data.
 * @returns {string} The query URL for the WeatherBit API.
 */
function buildWeatherBitQuery(latitude: number | string, longitude: number | string, weatherUnit: string | null): string {
  const BASE_URL = 'https://api.weatherbit.io/v2.0/forecast/daily';
  const API_KEY = process.env.NEXT_PUBLIC_WEATHERBIT_API_KEY;

  if (!API_KEY) {
    throw new Error('API key for WeatherBit is not set');
  }

  const url = new URL(BASE_URL);
  url.searchParams.append('days', '8');
  url.searchParams.append('lat', latitude.toString());
  url.searchParams.append('lon', longitude.toString());
  url.searchParams.append('key', API_KEY);

  if (weatherUnit) {
    url.searchParams.append('units', weatherUnit);
  }

  return url.toString();
}

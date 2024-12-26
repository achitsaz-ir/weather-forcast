import { useParams } from 'next/navigation';

/**
 * Custom hook to get the weather index from the URL search parameters.
 * The weather index is used to identify and retrieve specific weather data
 * for a particular day from the weather forecasts stored in the weather store.
 * @returns {number} The weather index.
 */
const useWeatherIndex = (): number => {
  const params = useParams();
  const weatherIndexParam = params?.weatherIndex as string | undefined;
  const weatherIndex = parseInt(weatherIndexParam ?? '0', 10);

  return weatherIndex;
};

export default useWeatherIndex;

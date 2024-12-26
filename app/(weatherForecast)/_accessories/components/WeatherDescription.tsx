import React, { JSX, useMemo } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherIndex from '../hooks/useWeatherIndex';
import useWeatherStore from '../hooks/useWeatherStore';

/**
 * WeatherDescription component displays the weather description for the specific day indicated by the URL.
 * @returns {JSX.Element} The rendered component.
 */
const WeatherDescription: React.FC = (): JSX.Element => {
  const weatherIndex = useWeatherIndex();
  const weatherDescription = useWeatherStore((state) => state?.forecasts?.[weatherIndex]?.weather?.description);

  const descriptionDisplay = useMemo(() => {
    if (weatherDescription === undefined || weatherDescription === null) {
      return <Skeleton className="rounded w-40 h-6" />;
    }
    return <span>{weatherDescription}</span>;
  }, [weatherDescription]);

  return (
    <div className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 text-center my-5 flex items-center justify-center">
      {descriptionDisplay}
    </div>
  );
};

export default WeatherDescription;

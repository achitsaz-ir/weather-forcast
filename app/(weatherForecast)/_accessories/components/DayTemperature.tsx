import React, { JSX } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherIndex from '../hooks/useWeatherIndex';
import useWeatherStore from '../hooks/useWeatherStore';

/**
 * DayTemperature component displays the temperature for the specific day indicated by the URL.
 * @returns {JSX.Element} The rendered component.
 */
const DayTemperature: React.FC = (): JSX.Element => {
  const weatherIndex = useWeatherIndex();
  const dayTemperature = useWeatherStore(
    (state) => state?.forecasts?.[weatherIndex]?.temp,
  );

  return (
    <div className="font-bold text-3xl sm:text-4xl text-gray-900 dark:text-gray-100 text-center my-5 flex items-center justify-center">
      {!dayTemperature ? (
        <Skeleton className="rounded w-20 h-10" />
      ) : (
        <span>{dayTemperature}</span>
      )}
    </div>
  );
};

export default DayTemperature;

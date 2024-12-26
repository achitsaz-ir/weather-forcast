import React, { JSX, useMemo } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherIndex from '../hooks/useWeatherIndex';
import useWeatherStore from '../hooks/useWeatherStore';
import Unit from './Unit';

/**
 * DayTemperature component displays the temperature for the specific day indicated by the URL.
 * @returns {JSX.Element} The rendered component.
 */
const DayTemperature: React.FC = (): JSX.Element => {
  const weatherIndex = useWeatherIndex();
  const dayTemperature = useWeatherStore((state) => state?.forecasts?.[weatherIndex]?.temp);

  const temperatureDisplay = useMemo(() => {
    if (dayTemperature === undefined || dayTemperature === null) {
      return <Skeleton className="rounded w-20 h-10" />;
    }
    return (
      <>
        <div className="font-extrabold text-6xl sm:text-9xl">{dayTemperature}</div>
        <Unit />
      </>
    );
  }, [dayTemperature]);

  return (
    <div className="flex font-bold text-3xl sm:text-4xl text-gray-900 dark:text-gray-100 text-center my-5">{temperatureDisplay}</div>
  );
};

export default DayTemperature;

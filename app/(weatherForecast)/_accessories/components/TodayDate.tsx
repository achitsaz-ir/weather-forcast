import React, { JSX } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherIndex from '../hooks/useWeatherIndex';
import useWeatherStore from '../hooks/useWeatherStore';

/**
 * TodayDate component displays the current date.
 * @returns {JSX.Element} The rendered component.
 */
const TodayDate: React.FC = (): JSX.Element => {
  const weatherIndex = useWeatherIndex();
  const forecastDateTime = useWeatherStore(
    (state) => state?.forecasts?.[weatherIndex]?.datetime,
  );

  if (!forecastDateTime) {
    return <Skeleton className="rounded w-40 h-6" />;
  }

  const date = new Date(forecastDateTime);
  const dayName = date.toLocaleString('default', { weekday: 'long' });
  const monthName = date.toLocaleString('default', { month: 'long' });
  const dayOfMonth = date.getDate();
  const year = date.getFullYear();
  const formattedDate = `${dayName}, ${monthName} ${dayOfMonth}, ${year}`;

  return (
    <div className="font-extralight text-lg sm:text-2xl text-gray-500 text-center my-5 flex items-center justify-center">
      {formattedDate}
    </div>
  );
};

export default TodayDate;

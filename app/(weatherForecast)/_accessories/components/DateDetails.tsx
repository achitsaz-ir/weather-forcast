import React, { JSX, useMemo } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherIndex from '../hooks/useWeatherIndex';
import useWeatherStore from '../hooks/useWeatherStore';
import formatDate from '../utils/formatDate';

/**
 * DateDetails component displays the current date.
 * @returns {JSX.Element} The rendered component.
 */
const DateDetails: React.FC = (): JSX.Element => {
  const weatherIndex = useWeatherIndex();
  const forecastDateTime = useWeatherStore((state) => state?.forecasts?.[weatherIndex]?.datetime);

  const formattedDate = useMemo(() => {
    if (forecastDateTime) {
      return formatDate(forecastDateTime);
    }
    return null;
  }, [forecastDateTime]);

  if (!formattedDate) {
    return <Skeleton className="rounded w-40 h-6" />;
  }

  return <div className="font-extralight text-lg sm:text-2xl text-gray-500 text-center my-5">{formattedDate}</div>;
};

export default DateDetails;

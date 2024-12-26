import React, { JSX } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherStore from '../hooks/useWeatherStore';

/**
 * Component to display the city of the current location.
 *
 * This component retrieves the city name from the weather store and displays it.
 * If the city name is not available, it shows a loading skeleton.
 *
 * @returns {JSX.Element} The rendered CityOfLocation component.
 */
export default function CityOfLocation(): JSX.Element {
  const city = useWeatherStore((state) => state?.city);

  if (!city) {
    return <Skeleton className="rounded w-40 h-6" />;
  }

  return (
    <div className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 text-center my-5 flex items-center justify-start">
      {city}
      Current Location
    </div>
  );
}

import React, { JSX, useMemo } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherStore from '../hooks/useWeatherStore';
import ForecastThumbnail from './ForecastThumbnail';

/**
 * Component to display the weather forecasts.
 *
 * This component retrieves the weather forecasts from the weather store and displays them.
 * If the forecasts are not available, it shows loading skeletons.
 *
 * @returns {JSX.Element} The rendered Forecasts component.
 */
const Forecasts: React.FC = (): JSX.Element => {
  const forecasts = useWeatherStore((state) => state?.forecasts);

  const forecastDisplay = useMemo(() => {
    if (!forecasts || forecasts.length === 0) {
      return <LoadingSkeleton count={8} />;
    }
    return forecasts.map((weatherDetails, index) => (
      <ForecastThumbnail
        key={index}
        index={index}
        icon={weatherDetails.weather.icon}
        description={weatherDetails.weather.description}
        temp={weatherDetails.temp as string}
      />
    ));
  }, [forecasts]);

  return <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">{forecastDisplay}</div>;
};

/**
 * Component to display loading skeletons.
 *
 * This component renders a specified number of loading skeletons.
 *
 * @param {object} props - The component props.
 * @param {number} props.count - The number of loading skeletons to render.
 * @returns {JSX.Element} The rendered LoadingSkeleton component.
 */
const LoadingSkeleton: React.FC<{ count: number }> = ({ count }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <Skeleton key={index} className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32" />
      ))}
    </>
  );
};

export default Forecasts;

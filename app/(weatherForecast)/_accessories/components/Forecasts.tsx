import React, { JSX } from 'react';

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
export default function Forecasts(): JSX.Element {
  const forecasts = useWeatherStore((state) => state?.forecasts);

  return (
    <div className="flex flex-wrap items-center justify-center gap-4 my-5">
      {forecasts.length ? (
        forecasts.map((weatherDetails, index) => (
          <ForecastThumbnail
            key={index}
            index={index}
            icon={weatherDetails.weather.icon}
            description={weatherDetails.weather.description}
            temp={weatherDetails.temp as string}
          />
        ))
      ) : (
        <LoadingSkeleton count={8} />
      )}
    </div>
  );
}

/**
 * Component to display loading skeletons.
 *
 * This component renders a specified number of loading skeletons.
 *
 * @param {object} props - The component props.
 * @param {number} props.count - The number of loading skeletons to render.
 * @returns {JSX.Element} The rendered LoadingSkeleton component.
 */
function LoadingSkeleton({ count }: { count: number }): JSX.Element {
  return (
    <>
      {[...new Array(count)].map((_, index) => (
        <Skeleton key={index} className="w-32 h-32" />
      ))}
    </>
  );
}

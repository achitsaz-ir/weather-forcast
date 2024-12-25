import React, { JSX, useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';

import useLocation from '../hooks/useLocation';
import useWeatherBit from '../hooks/useWeatherBit';
import ChangeMeasurement from './ChangeMeasurement';
import CityOfLocation from './CityOfLocation';

/**
 * Header component displays the header with location and measurement change options.
 * @returns {JSX.Element} The rendered component.
 */
const Header: React.FC = (): JSX.Element => {
  const searchParams = useSearchParams();
  const { getTodayWeather } = useWeatherBit();
  const { latitude, longitude, refresh } = useLocation();

  useEffect(() => {
    if (latitude !== undefined && longitude !== undefined) {
      getTodayWeather({ latitude, longitude });
    }
  }, [getTodayWeather, latitude, longitude, searchParams]);

  return (
    <header className="border-b p-5 shadow-none flex flex-col sm:flex-row items-center justify-between bg-white dark:bg-gray-800">
      <div className="font-extrabold flex gap-2 items-center text-gray-900 dark:text-gray-100 mb-4 sm:mb-0">
        <CityOfLocation />
      </div>
      <div className="flex gap-3">
        <ChangeMeasurement />
        <Button onClick={refresh} variant="outline" aria-label="Refresh weather data">
          Refresh
        </Button>
      </div>
    </header>
  );
};

export default Header;

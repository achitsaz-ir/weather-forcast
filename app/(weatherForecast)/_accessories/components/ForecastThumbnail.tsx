import React from 'react';

import Link from 'next/link';

import useWeatherIndex from '../hooks/useWeatherIndex';
import { IWeather } from '../interfaces';
import WeatherIcon from './WeatherIcon';

interface IForecastThumbnailProps extends IWeather {
  temp: string;
  index: number;
}

/**
 * ForecastThumbnail component displays a weather forecast thumbnail with a link.
 * @param {IForecastThumbnailProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered component.
 */
const ForecastThumbnail: React.FC<IForecastThumbnailProps> = ({ icon, temp, description, index }) => {
  const weatherIndex = useWeatherIndex();
  const isCurrent = weatherIndex === index;

  return (
    <Link href={index > 0 ? `/forecast/${index}` : '/'}>
      <div
        className={`p-3 w-24 h-24 sm:w-36 sm:h-36 border ${isCurrent ? 'border-blue-700 border-2' : 'border-gray-300'} rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105`}
      >
        <span className="text-sm sm:text-lg font-bold">{temp}</span>
        <div className="relative h-8 w-8 sm:h-10 sm:w-10">
          <WeatherIcon iconCode={icon} altText={description} />
        </div>
        <span className="text-xs sm:text-sm text-gray-500">{description}</span>
      </div>
    </Link>
  );
};

export default ForecastThumbnail;

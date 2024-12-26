import React, { JSX } from 'react';

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
const ForecastThumbnail: React.FC<IForecastThumbnailProps> = ({
  icon,
  temp,
  description,
  index,
}: IForecastThumbnailProps): JSX.Element => {
  const weatherIndex = useWeatherIndex();
  const isCurrent = weatherIndex === index;

  return (
    <Link href={index > 0 ? `/forecast/${index}` : '/'}>
      <div
        className={`p-3 w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 border ${isCurrent ? 'border-blue-700 border-2' : 'border-gray-300'} rounded-md flex flex-col items-center justify-center transition-transform transform hover:scale-105`}
      >
        <span className="text-xs sm:text-sm md:text-base lg:text-lg font-bold">{temp}</span>
        <div className="relative h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 lg:h-12 lg:w-12">
          <WeatherIcon iconCode={icon} altText={description} />
        </div>
      </div>
    </Link>
  );
};

export default ForecastThumbnail;

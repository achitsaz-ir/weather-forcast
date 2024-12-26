import React, { useMemo } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherIndex from '../hooks/useWeatherIndex';
import useWeatherStore from '../hooks/useWeatherStore';

/**
 * WeatherIcon component displays the weather icon based on the provided icon code and description.
 * @param {WeatherIconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered component.
 */
interface WeatherIconProps {
  iconCode?: string;
  altText?: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode, altText }) => {
  const weatherIndex = useWeatherIndex();
  const weatherIcon = useWeatherStore((state) => state?.forecasts?.[weatherIndex]?.weather?.icon);

  const iconSrc = useMemo(() => {
    return `https://cdn.weatherbit.io/static/img/icons/${iconCode ?? weatherIcon}.png`;
  }, [iconCode, weatherIcon]);

  if (!iconCode && !weatherIcon) {
    return <Skeleton className="w-16 h-16 sm:w-24 sm:h-24" />;
  }

  return <img src={iconSrc} alt={altText ?? 'Weather icon'} className="w-full h-full object-contain" />;
};

export default WeatherIcon;

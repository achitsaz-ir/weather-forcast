import React, { JSX } from 'react';

import DateDetails from './DateDetails';
import DayTemperature from './DayTemperature';
import Forecasts from './Forecasts';
import WeatherDescription from './WeatherDescription';
import WeatherIcon from './WeatherIcon';

/**
 * WeatherDetails component displays detailed weather information for the specific day indicated by the URL.
 * It shows the date, temperature, weather description, and a forecast for the upcoming days.
 * @returns {JSX.Element} The rendered component.
 */
const WeatherDetails: React.FC = (): JSX.Element => {
  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-white dark:bg-gray-800 shadow-none flex flex-col items-center justify-center">
      <DateDetails />
      <DayTemperature />
      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
        <WeatherIcon />
      </div>
      <WeatherDescription />
      <Forecasts />
    </div>
  );
};

export default WeatherDetails;

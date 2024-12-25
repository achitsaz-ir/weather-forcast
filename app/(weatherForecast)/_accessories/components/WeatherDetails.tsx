import React from 'react';

import DayTemperature from './DayTemperature';
import Forecasts from './Forecasts';
import TodayDate from './TodayDate';
import WeatherDescription from './WeatherDescription';

/**
 * WeatherDetails component displays detailed weather information for the specific day indicated by the URL.
 * It shows the date, temperature, weather description, and a forecast for the upcoming days.
 * @returns {JSX.Element} The rendered component.
 */
const WeatherDetails: React.FC = () => {
  return (
    <div className="p-5 bg-white dark:bg-gray-800 rounded-md shadow-md">
      <TodayDate />
      <DayTemperature />
      <WeatherDescription />
      <Forecasts />
    </div>
  );
};

export default WeatherDetails;

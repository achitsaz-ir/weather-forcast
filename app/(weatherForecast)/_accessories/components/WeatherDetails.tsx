import React from 'react';

import Forecasts from './Forecasts';
import TodayDate from './TodayDate';
import TodayTemperature from './TodayTemperature';
import WeatherDescription from './WeatherDescription';

export default function WeatherDetails() {
    return (
        <div>
            <TodayDate />
            <TodayTemperature />
            <WeatherDescription />
            <Forecasts />
        </div>
    );
}

'use client';

import TodayDate from './_accessories/components/TodayDate';
import TodayTemperature from './_accessories/components/TodayTemperature';
import WeatherDescription from './_accessories/components/WeatherDescription';

export default function Home() {
    return (
        <div>
            <TodayDate />
            <TodayTemperature />
            <WeatherDescription />
        </div>
    );
}

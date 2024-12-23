import React from 'react';

import useWeatherStore from '../hooks/useWeatherStore';
import Unit from './Unit';

export default function TodayTemperature() {
    const temperature = useWeatherStore((state) => state?.today?.temp);

    return (
        <div className="flex flex-nowrap items-start my-5 justify-center">
            <div className="font-extrabold text-9xl">{temperature}</div>
            <Unit />
        </div>
    );
}

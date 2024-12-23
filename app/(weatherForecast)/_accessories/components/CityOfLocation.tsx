import React from 'react';

import useWeatherStore from '../hooks/useWeatherStore';

export default function CityOfLocation() {
    const city = useWeatherStore((state) => state?.today?.city_name);

    return (
        <div>
            <div className="font-extrabold text-lg">{city ?? 'In Progress...'}</div>
            <div className="font-light text-gray-600 text-sm">Current Location</div>
        </div>
    );
}

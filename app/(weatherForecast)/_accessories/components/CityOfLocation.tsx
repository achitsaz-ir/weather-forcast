import React, { JSX } from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherStore from '../hooks/useWeatherStore';

/**
 * Component to display the city of the current location.
 *
 * This component retrieves the city name from the weather store and displays it.
 * If the city name is not available, it shows a loading skeleton.
 *
 * @returns {JSX.Element} The rendered CityOfLocation component.
 */
export default function CityOfLocation(): JSX.Element {
    const city = useWeatherStore((state) => state?.city);

    return (
        <div>
            {!city ? <Skeleton className="h-6 w-24 rounded" /> : <div className="font-extrabold text-lg">{city}</div>}
            <div className="font-light text-gray-600 text-sm">Current Location</div>
        </div>
    );
}

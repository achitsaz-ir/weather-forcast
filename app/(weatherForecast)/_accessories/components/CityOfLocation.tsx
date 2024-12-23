import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherStore from '../hooks/useWeatherStore';

export default function CityOfLocation() {
    const city = useWeatherStore((state) => state?.city);

    return (
        <div>
            {!city ? <Skeleton className="h-6 w-24 rounded" /> : <div className="font-extrabold text-lg">{city}</div>}
            <div className="font-light text-gray-600 text-sm">Current Location</div>
        </div>
    );
}

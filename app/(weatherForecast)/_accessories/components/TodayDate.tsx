import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherIndex from '../hooks/useWeatherIndex';
import useWeatherStore from '../hooks/useWeatherStore';

export default function TodayDate() {
    const weatherIndex = useWeatherIndex();
    const datetime = useWeatherStore((state) => state?.forecasts?.[weatherIndex]?.datetime);
    const [dayName, month, day, year] = new Date(datetime).toString().split(' ');
    const today = `${dayName}, ${day} ${month} ${year}`;

    return (
        <div className="font-extralight text-2xl text-gray-500 text-center my-5 flex items-center justify-center">
            {!datetime ? <Skeleton className="rounded w-40 h-6" /> : <>{today}</>}
        </div>
    );
}

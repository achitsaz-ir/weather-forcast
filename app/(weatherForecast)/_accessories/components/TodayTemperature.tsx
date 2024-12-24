import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherIndex from '../hooks/useWeatherIndex';
import useWeatherStore from '../hooks/useWeatherStore';
import Unit from './Unit';

export default function TodayTemperature() {
    const weatherIndex = useWeatherIndex();
    const temperature = useWeatherStore((state) => state?.forecasts?.[weatherIndex]?.temp);

    return (
        <div className="flex flex-nowrap items-start my-5 justify-center">
            {!temperature ? (
                <Skeleton className="rounded w-44 h-40" />
            ) : (
                <>
                    <div className="font-extrabold text-9xl">{temperature}</div>
                    <Unit />
                </>
            )}
        </div>
    );
}

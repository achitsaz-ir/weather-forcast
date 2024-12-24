import React from 'react';

import Image from 'next/image';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherIndex from '../hooks/useWeatherIndex';
import useWeatherStore from '../hooks/useWeatherStore';

export default function WeatherDescription() {
    const weatherIndex = useWeatherIndex();
    const weatherDetails = useWeatherStore((state) => state?.forecasts?.[weatherIndex]?.weather) as unknown as
        | { icon: string; description: string }
        | undefined;

    return (
        <div className="flex flex-col gap-0 items-center justify-center my-5">
            {!weatherDetails ? (
                <Skeleton className="rounded-full w-48 h-48" />
            ) : (
                <>
                    <div className="size-44 relative">
                        {weatherDetails?.icon && (
                            <Image
                                src={`https://cdn.weatherbit.io/static/img/icons/${weatherDetails?.icon}.png`}
                                alt={weatherDetails?.description ?? ''}
                                fill
                            />
                        )}
                    </div>
                    <div className="font-extralight text-3xl text-gray-500">{weatherDetails?.description}</div>
                </>
            )}
        </div>
    );
}

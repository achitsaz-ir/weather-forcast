import React from 'react';

import { Skeleton } from '@/components/ui/skeleton';

import useWeatherStore from '../hooks/useWeatherStore';
import { IWeatherDetails } from '../interfaces';
import ForecastThumbnail from './ForecastThumbnail';

export default function Forecasts() {
    const forecasts = useWeatherStore((state) => state?.forecasts);
    return (
        <div className="flex flex-wrap items-center justify-center gap-4">
            {forecasts.length ? (
                <>
                    {forecasts?.map((weatherDetails, index) => (
                        <ForecastThumbnail
                            key={index}
                            index={index}
                            icon={(weatherDetails.weather as unknown as IWeatherDetails).icon}
                            description={(weatherDetails.weather as unknown as IWeatherDetails).description}
                            temp={weatherDetails.temp as string}
                        />
                    ))}
                </>
            ) : (
                <>
                    {[...new Array(8)].map((el) => (
                        <Skeleton key={el} className="w-32 h-32" />
                    ))}
                </>
            )}
        </div>
    );
}

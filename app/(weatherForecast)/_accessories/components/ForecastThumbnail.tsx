import React from 'react';

import Link from 'next/link';

import useWeatherIndex from '../hooks/useWeatherIndex';
import { IWeatherDetails } from '../interfaces';
import WeatherIcon from './WeatherIcon';

interface IForecastThumbnailProps extends IWeatherDetails {
    temp: string;
    index: number;
}
export default function ForecastThumbnail({ icon, temp, description, index }: IForecastThumbnailProps) {
    const weatherIndex = useWeatherIndex();
    const isCurrent = weatherIndex === index;

    return (
        <Link href={index > 0 ? `/forecast/${index}` : '/'}>
            <div
                className={`py-3 w-36 h-36 border-[1px] ${isCurrent && 'border-blue-700 border-2'} rounded-md flex flex-col items-center justify-center`}
            >
                {temp}
                <div className="relative h-10 w-10">
                    <WeatherIcon icon={icon} description={description} />
                </div>
                {description}
            </div>
        </Link>
    );
}

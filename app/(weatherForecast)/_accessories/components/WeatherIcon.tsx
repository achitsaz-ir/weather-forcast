import React from 'react';

import Image from 'next/image';

import { IWeatherDetails } from '../interfaces';

export default function WeatherIcon({ icon, description }: IWeatherDetails) {
    return <Image src={`https://cdn.weatherbit.io/static/img/icons/${icon}.png`} alt={description ?? ''} fill />;
}

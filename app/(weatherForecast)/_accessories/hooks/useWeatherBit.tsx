import { useSearchParams } from 'next/navigation';

import handleCatchError from '@/utils/handleCatchError';

import { ILocation } from '../interfaces';
import useWeatherStore from './useWeatherStore';

export default function useWeatherBit() {
    const searchParams = useSearchParams();
    const setCityOfLocation = useWeatherStore((state) => state.setCityOfLocation);
    const setWeatherForecasts = useWeatherStore((state) => state.setWeatherForecasts);

    const weatherUnit = searchParams.get('unit');

    const getTodayWether = async ({ latitude, longitude }: ILocation) => {
        // you need to get api key from weatherbit.io and set it to .env with key NEXT_PUBLIC_WEATHERBIT_API_KEY
        const urlQueries = `key=${process.env.NEXT_PUBLIC_WEATHERBIT_API_KEY}&units=${weatherUnit}&lat=${latitude}&lon=${longitude}&days=8`;
        try {
            const todayWeatherRes = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?${urlQueries}`);
            if (!todayWeatherRes.ok) {
                throw new Error(`Error! Response status: ${todayWeatherRes.status}`);
            }

            const weatherBitData = await todayWeatherRes.json();
            setWeatherForecasts(weatherBitData?.data);
            setCityOfLocation(weatherBitData.city_name);
        } catch (error) {
            handleCatchError(error);
        }
    };

    return { getTodayWether };
}

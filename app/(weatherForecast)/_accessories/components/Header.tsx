import React, { useEffect } from 'react';

import { Button } from '@/components/ui/button';

import useLocation from '../hooks/useLocation';
import useWeatherBit from '../hooks/useWeatherBit';
import CityOfLocation from './CityOfLocation';

export default function Header() {
    const { latitude, longitude, refresh } = useLocation();
    const { getTodayWether } = useWeatherBit();

    useEffect(() => {
        if (latitude !== undefined && longitude !== undefined) {
            getTodayWether({ latitude, longitude });
        }
    }, [getTodayWether, latitude, longitude]);

    return (
        <div className="border-b-[1px] p-5 shadow-none flex  items-center justify-between flex-wrap">
            <div className="font-extrabold flex gap-2 items-center">
                <CityOfLocation />
            </div>
            <Button onClick={refresh} variant="outline">
                Refresh
            </Button>
        </div>
    );
}

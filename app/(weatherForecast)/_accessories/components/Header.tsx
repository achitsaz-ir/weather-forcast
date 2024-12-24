import React, { useEffect } from 'react';

import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';

import useLocation from '../hooks/useLocation';
import useWeatherBit from '../hooks/useWeatherBit';
import ChangeMeasurement from './ChangeMeasurement';
import CityOfLocation from './CityOfLocation';

export default function Header() {
    const searchParams = useSearchParams();
    const { getTodayWether } = useWeatherBit();
    const { latitude, longitude, refresh } = useLocation();

    useEffect(() => {
        if (latitude !== undefined && longitude !== undefined) {
            getTodayWether({ latitude, longitude });
        }
    }, [getTodayWether, latitude, longitude, searchParams]);

    return (
        <div className="border-b-[1px] p-5 shadow-none flex  items-center justify-between flex-wrap">
            <div className="font-extrabold flex gap-2 items-center">
                <CityOfLocation />
            </div>
            <div className="flex gap-3">
                <ChangeMeasurement />
                <Button onClick={refresh} variant="outline">
                    Refresh
                </Button>
            </div>
        </div>
    );
}

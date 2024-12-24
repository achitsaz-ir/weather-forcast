import React, { useEffect } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { EWeatherBitUnits } from '../enums';
import useWeatherStore from '../hooks/useWeatherStore';

export default function ChangeMeasurement() {
    const searchParams = useSearchParams();
    const setWeatherForecasts = useWeatherStore((state) => state.setWeatherForecasts);
    const unit = searchParams.get('unit');

    useEffect(() => {
        setWeatherForecasts([]);
    }, [unit]);

    return (
        <div className="flex gap-3">
            <Link href={`?unit=${EWeatherBitUnits[EWeatherBitUnits.M]}`}>
                <Button
                    variant="outline"
                    className={!unit || unit === EWeatherBitUnits[EWeatherBitUnits.M] ? 'border-blue-600' : ''}
                >
                    &#8451;
                </Button>
            </Link>
            <Link href={`?unit=${EWeatherBitUnits[EWeatherBitUnits.S]}`}>
                <Button
                    variant="outline"
                    className={unit === EWeatherBitUnits[EWeatherBitUnits.S] ? 'border-blue-600' : ''}
                >
                    &#8490;
                </Button>
            </Link>
            <Link href={`?unit=${EWeatherBitUnits[EWeatherBitUnits.I]}`}>
                <Button
                    variant="outline"
                    className={unit === EWeatherBitUnits[EWeatherBitUnits.I] ? 'border-blue-600' : ''}
                >
                    &#8457;
                </Button>
            </Link>
        </div>
    );
}

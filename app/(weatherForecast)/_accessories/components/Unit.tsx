import React from 'react';

import { useSearchParams } from 'next/navigation';

import { EWeatherBitUnits } from '../enums';

export default function Unit() {
    const searchParams = useSearchParams();

    const unitDefiner = () => {
        switch (searchParams.get('unit') as keyof typeof EWeatherBitUnits | undefined) {
            case 'M':
                return <span>&#8451;</span>;
            case 'S':
                return <span>&#8490;</span>;
            case 'I':
                return <span>&#8457;</span>;

            default:
                return <span>&#8451;</span>;
        }
    };

    return <div className="font-extrabold text-5xl">{unitDefiner()}</div>;
}

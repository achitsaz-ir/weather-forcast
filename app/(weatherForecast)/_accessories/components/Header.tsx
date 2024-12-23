import React, { useEffect } from 'react';

import { CloudMoonIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';

import useLocation from '../hooks/useLocation';

export default function Header() {
    const { latitude, longitude, refresh } = useLocation();

    useEffect(() => {
        console.log({ latitude, longitude });
    }, [latitude, longitude]);

    return (
        <div className="border-b-[1px] p-5 shadow-none flex  items-center justify-between flex-wrap">
            <div className="font-extrabold flex gap-2 items-center">
                <CloudMoonIcon />
                Forecast Weather
            </div>
            <Button onClick={refresh}>Refresh</Button>
        </div>
    );
}

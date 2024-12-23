'use client';

import React, { Suspense } from 'react';

import { Toaster } from 'sonner';

import Header from './_accessories/components/Header';
import { WeatherStoreProvider } from './_accessories/providers/WeatherStoreProvider';

export default function WeatherForecastTemplate({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <WeatherStoreProvider>
            <Suspense>
                <Header />
                <div className="px-36">{children}</div>
                <Toaster />
            </Suspense>
        </WeatherStoreProvider>
    );
}

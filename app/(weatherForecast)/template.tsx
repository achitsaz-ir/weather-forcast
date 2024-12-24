'use client';

import React, { JSX, Suspense } from 'react';

import { Toaster } from 'sonner';

import Header from './_accessories/components/Header';
import { WeatherStoreProvider } from './_accessories/providers/WeatherStoreProvider';

/**
 * WeatherForecastTemplate component to provide layout and context for the weather forecast app.
 *
 * @param {object} props - The component props.
 * @param {React.ReactNode} props.children - The child components to be rendered within the layout.
 * @returns {JSX.Element} The rendered component.
 */

export default function WeatherForecastTemplate({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <WeatherStoreProvider>
            <Suspense fallback={<div>Loading...</div>}>
                <Header />
                <div className="px-36">{children}</div>
                <Toaster />
            </Suspense>
        </WeatherStoreProvider>
    );
}

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
      <Suspense fallback={<LoadingFallback />}>
        <Header />
        <main className="px-36">{children}</main>
        <Toaster />
      </Suspense>
    </WeatherStoreProvider>
  );
}

/**
 * LoadingFallback component to display a loading state while the main content is being loaded.
 *
 * @returns {JSX.Element} The rendered LoadingFallback component.
 */
function LoadingFallback(): JSX.Element {
  return <div>Loading...</div>;
}

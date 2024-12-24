'use client';

import { JSX } from 'react';

import WeatherDetails from './_accessories/components/WeatherDetails';

/**
 * Home component that serves as the main entry point for the weather forecast page.
 * It renders the WeatherDetails component which contains the main content of the page.
 *
 * @returns {JSX.Element} The rendered Home component.
 */
export default function Home(): JSX.Element {
    return <WeatherDetails />;
}

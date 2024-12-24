'use client';

import { useParams } from 'next/navigation';

/**
 * Custom hook to get the weather index from the URL parameters.
 *
 * This hook uses the useParams hook from next/navigation to retrieve the weather index
 * from the URL parameters and returns it as a number.
 *
 * @returns {number} The weather index from the URL parameters.
 */
export default function useWeatherIndex(): number {
    const params = useParams<{ weatherIndex?: string }>();

    return Number(params?.weatherIndex ?? 0);
}

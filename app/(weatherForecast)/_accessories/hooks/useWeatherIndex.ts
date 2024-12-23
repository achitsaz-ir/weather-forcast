'use client';

import { useParams } from 'next/navigation';

export default function useWeatherIndex() {
    const params = useParams<{ weatherIndex?: string }>();

    return Number(params?.weatherIndex ?? 0);
}

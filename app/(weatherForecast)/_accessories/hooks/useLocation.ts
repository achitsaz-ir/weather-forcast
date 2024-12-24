'use client';

import { useLayoutEffect, useState } from 'react';

import { toast } from 'sonner';

import handleCatchError from '@/utils/handleCatchError';

import { ILocation } from '../interfaces';

/**
 * Custom hook to get the user's location.
 *
 * @returns {object} The user's location and a function to refresh the location.
 */
export default function useLocation() {
    const [userLocation, setUserLocation] = useState<ILocation | null>(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                },
                async (getPositionError: GeolocationPositionError) => {
                    try {
                        // You need to get an API key from ipgeolocation.io and set it to .env with key NEXT_PUBLIC_IP_GEOLOCATION_API_KEY
                        const apiKey = process.env.NEXT_PUBLIC_IP_GEOLOCATION_API_KEY;
                        if (!apiKey) {
                            throw new Error('API key for ipgeolocation.io is not set');
                        }

                        const webLocationRes = await fetch(`https://api.ipgeolocation.io/ipgeo?apiKey=${apiKey}`);

                        if (!webLocationRes.ok) {
                            throw new Error(`Error! Response status: ${webLocationRes.status}`);
                        }

                        const data = await webLocationRes.json();
                        setUserLocation({ latitude: data.latitude, longitude: data.longitude });
                    } catch (error) {
                        if (error instanceof Error) {
                            handleCatchError(error);
                        } else {
                            handleCatchError('An unknown error occurred');
                        }
                    }

                    // Handle specific geolocation errors
                    switch (getPositionError.code) {
                        case getPositionError.PERMISSION_DENIED:
                            toast('Permission denied. We need your location for the calculation.');
                            break;
                        case getPositionError.POSITION_UNAVAILABLE:
                            toast('Position unavailable. Please try again.');
                            break;
                        case getPositionError.TIMEOUT:
                            toast('Request timed out. Please try again.');
                            break;
                        default:
                            toast('An unknown error occurred while fetching your location.');
                            break;
                    }
                },
                {
                    enableHighAccuracy: true,
                    maximumAge: 1000,
                    timeout: 1000
                }
            );
        } else {
            toast('Geolocation is not supported by this browser');
        }
    };

    useLayoutEffect(() => {
        getUserLocation();
    }, []);

    return { ...userLocation, refresh: getUserLocation };
}

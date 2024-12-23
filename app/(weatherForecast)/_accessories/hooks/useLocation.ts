'use client';

import { useLayoutEffect, useState } from 'react';

import { toast } from 'sonner';

import handleCatchError from '@/utils/handleCatchError';

import { ILocation } from '../interfaces';

export default function useLocation() {
    const [userLocation, setUserLocation] = useState<ILocation | null>(null);

    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;

                    setUserLocation({ latitude, longitude });
                },

                async (getPositionError) => {
                    try {
                        // you need to get api key from ipgeolocation.io and set it to .env with key NEXT_PUBLIC_IP_GEOLOCATION_API_KEY
                        const webLocationRes = await fetch(
                            `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.NEXT_PUBLIC_IP_GEOLOCATION_API_KEY}`
                        );
                        if (!webLocationRes.ok) {
                            throw new Error(`Error! Response status: ${webLocationRes.status}`);
                        }

                        if (webLocationRes.status !== 200) {
                            switch (getPositionError.code) {
                                case 1:
                                    toast('We need your location for the calculation');
                                    return;

                                default:
                                    toast('There is an error in calculating your location. Please try again');
                                    return;
                            }
                        }

                        const data = await webLocationRes.json();
                        setUserLocation({
                            latitude: data.latitude,
                            longitude: data.longitude
                        });
                    } catch (error) {
                        handleCatchError(error);
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

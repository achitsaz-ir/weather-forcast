'use client';

import { useLayoutEffect, useState } from 'react';

import { toast } from 'sonner';

export default function useLocation() {
    const [userLocation, setUserLocation] = useState<{
        latitude: number;
        longitude: number;
    } | null>(null);

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
                        let message = 'Error while get online location';

                        if (error instanceof Error) {
                            message = error.message;
                        } else {
                            message = String(error);
                        }

                        toast(message);
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

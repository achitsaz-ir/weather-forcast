'use client';

import { useEffect, useState } from 'react';

import { toast } from 'sonner';

import handleCatchError from '@/utils/handleCatchError';

import { ILocation } from '../interfaces';

/**
 * Custom hook to get the user's location.
 *
 * This hook uses the Geolocation API to get the user's current location.
 * If the Geolocation API is not available or the user denies permission,
 * it falls back to using the ipgeolocation.io API.
 *
 * @returns {object} The user's location and a function to refresh the location.
 */
export default function useLocation(): { latitude: string | number | null; longitude: string | number | null; refresh: () => void } {
  const [userLocation, setUserLocation] = useState<ILocation | null>(null);

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        async (getPositionError: GeolocationPositionError) => {
          await handleGeolocationError(getPositionError, setUserLocation);
        },
        {
          enableHighAccuracy: true,
          maximumAge: 1000,
          timeout: 1000,
        },
      );
    } else {
      toast('Geolocation is not supported by this browser');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return { latitude: userLocation?.latitude ?? null, longitude: userLocation?.longitude ?? null, refresh: getUserLocation };
}

/**
 * Handles errors from the Geolocation API.
 *
 * If the Geolocation API fails, this function attempts to get the user's location
 * using the ipgeolocation.io API. It also handles specific geolocation errors
 * and displays appropriate messages to the user.
 *
 * @param {GeolocationPositionError} getPositionError - The error object from the Geolocation API.
 * @param {Function} setUserLocation - Function to set the user's location.
 */
async function handleGeolocationError(getPositionError: GeolocationPositionError, setUserLocation: (location: ILocation) => void) {
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
    handleCatchError(error instanceof Error ? error : new Error('An unknown error occurred'));
  }

  handleSpecificGeolocationErrors(getPositionError);
}

/**
 * Handles specific geolocation errors and displays appropriate messages to the user.
 *
 * @param {GeolocationPositionError} getPositionError - The error object from the Geolocation API.
 */
function handleSpecificGeolocationErrors(getPositionError: GeolocationPositionError) {
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
}

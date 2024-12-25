import React, { JSX, useEffect } from 'react';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Button } from '@/components/ui/button';

import { EWeatherBitUnits } from '../enums';
import useWeatherStore from '../hooks/useWeatherStore';
import UnitSymbol from './UnitSymbol';

/**
 * Component to change the measurement unit for the weather data.
 *
 * This component provides buttons to switch between different measurement units
 * (Celsius, Kelvin, Fahrenheit) and updates the weather store accordingly.
 *
 * @returns {JSX.Element} The rendered ChangeMeasurement component.
 */
export default function ChangeMeasurement(): JSX.Element {
  const searchParams = useSearchParams();
  const setWeatherForecasts = useWeatherStore((state) => state.setWeatherForecasts);
  const unit = searchParams.get('unit');

  useEffect(() => {
    setWeatherForecasts([]);
  }, [unit, setWeatherForecasts]);

  return (
    <div className="flex gap-3">
      <MeasurementButton unit={EWeatherBitUnits.M} currentUnit={unit} />
      <MeasurementButton unit={EWeatherBitUnits.S} currentUnit={unit} />
      <MeasurementButton unit={EWeatherBitUnits.I} currentUnit={unit} />
    </div>
  );
}

/**
 * Component for a measurement button.
 *
 * This component renders a button for a specific measurement unit and highlights
 * the button if it is the currently selected unit.
 *
 * @param {object} props - The component props.
 * @param {EWeatherBitUnits} props.unit - The measurement unit for the button.
 * @param {string | null} props.currentUnit - The currently selected measurement unit.
 * @returns {JSX.Element} The rendered MeasurementButton component.
 */
function MeasurementButton({ unit, currentUnit }: { unit: EWeatherBitUnits; currentUnit: string | null }): JSX.Element {
  const isActive = currentUnit === unit;

  return (
    <Link href={`?unit=${unit}`}>
      <Button variant="outline" className={isActive ? 'border-blue-600' : ''}>
        <UnitSymbol specificUnit={unit} />
      </Button>
    </Link>
  );
}

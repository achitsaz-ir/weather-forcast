import { JSX } from 'react';

import { useSearchParams } from 'next/navigation';

import { EWeatherBitUnits } from '../enums';

/**
 * Determines the temperature unit based on the URL search parameters.
 * @returns {JSX.Element} The temperature unit symbol.
 */
const UnitSymbol = ({ specificUnit }: { specificUnit?: EWeatherBitUnits }): JSX.Element => {
  const searchParams = useSearchParams();
  const unit = specificUnit ?? (searchParams.get('unit') as keyof typeof EWeatherBitUnits | undefined);

  switch (unit) {
    case EWeatherBitUnits.M:
      return <span>&#8451;</span>; // Celsius
    case EWeatherBitUnits.S:
      return <span>&#8490;</span>; // Kelvin
    case EWeatherBitUnits.I:
      return <span>&#8457;</span>; // Fahrenheit
    default:
      return <span>&#8451;</span>; // Default to Celsius
  }
};

export default UnitSymbol;

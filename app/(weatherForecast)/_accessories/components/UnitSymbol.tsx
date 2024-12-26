import React, { JSX } from 'react';

import { useSearchParams } from 'next/navigation';

import { EWeatherBitUnits } from '../enums';

/**
 * Determines the temperature unit based on the URL search parameters.
 * @returns {JSX.Element} The temperature unit symbol.
 */
const UnitSymbol: React.FC<{ specificUnit?: EWeatherBitUnits }> = ({ specificUnit }): JSX.Element => {
  const searchParams = useSearchParams();
  const unit = specificUnit ?? (searchParams.get('unit') as keyof typeof EWeatherBitUnits | undefined);

  const getUnitSymbol = (unit: keyof typeof EWeatherBitUnits | undefined): string => {
    switch (unit) {
      case EWeatherBitUnits.M:
        return '℃'; // Celsius
      case EWeatherBitUnits.S:
        return 'K'; // Kelvin
      case EWeatherBitUnits.I:
        return '℉'; // Fahrenheit
      default:
        return '℃'; // Default to Celsius
    }
  };

  return <span>{getUnitSymbol(unit)}</span>;
};

export default UnitSymbol;

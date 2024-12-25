import React from 'react';

import UnitSymbol from './UnitSymbol';

/**
 * Unit component displays the temperature unit based on the URL search parameters.
 * @returns {JSX.Element} The rendered component.
 */
const Unit: React.FC = () => {
  return (
    <div className="font-extrabold text-3xl sm:text-5xl">
      <UnitSymbol />
    </div>
  );
};

export default Unit;

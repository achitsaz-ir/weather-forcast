import React from 'react';

/**
 * WeatherIcon component displays the weather icon based on the provided icon code and description.
 * @param {WeatherIconProps} props - The properties for the component.
 * @returns {JSX.Element} The rendered component.
 */
interface WeatherIconProps {
  iconCode: string;
  altText: string;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ iconCode, altText }) => {
  return (
    <img src={`https://cdn.weatherbit.io/static/img/icons/${iconCode}.png`} alt={altText} className="w-full h-full object-contain" />
  );
};

export default WeatherIcon;

import React from 'react';

export default function TodayDate() {
    const [dayName, month, day, year] = new Date().toString().split(' ');
    const today = `${dayName}, ${day} ${month} ${year}`;

    return <div className="font-extralight text-4xl text-gray-500 text-center my-5">{today}</div>;
}

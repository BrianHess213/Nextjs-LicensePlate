'use client';

import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

export default function YearColorUpdaterPage() {
  // Define a base year and year colors
  const baseYear = 2024; 
  const yearColors = [
    "bg-blue-400", "bg-green-400", "bg-red-400",
    "bg-yellow-400", "bg-pink-400", "bg-purple-400",
    "bg-blue-800", "bg-green-800", "bg-red-800",
    "bg-yellow-800", "bg-pink-800", "bg-purple-800",
  ];

  const calculateYearColor = () => {
    const now = DateTime.local();
    const currentYear = now.year;
    // Calculate the difference in years from the base year, model the length of the color array
    const yearsSinceBase = (currentYear - baseYear) % yearColors.length;
    return yearColors[yearsSinceBase];
  };

  const [bgColor, setBgColor] = useState(calculateYearColor);

  useEffect(() => {
    // Calculate the background color based on the year whenever this effect runs
    setBgColor(calculateYearColor());
    console.log("Year component background color updated.");
  }, []);  

  return (
    <div className={`${bgColor} h-20 w-full`}></div>
  );
}
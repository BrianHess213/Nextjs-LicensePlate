'use client'
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';


export default function YearColorUpdaterPage() {
  // Define a base year and year colors
  const baseYear = 2024; // Change this to your chosen starting year
  const yearColors = [
    "bg-red-400", "bg-green-400", "bg-blue-400",
    "bg-yellow-400", "bg-pink-400", "bg-purple-400",
    "bg-red-700", "bg-green-700", "bg-blue-700",
    "bg-yellow-700", "bg-pink-700", "bg-purple-700",
  ];

  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    const now = DateTime.local();
    const currentYear = now.year;
    // Calculate the difference in years from the base year, modulo the length of the color array
    const yearsSinceBase = (currentYear - baseYear) % yearColors.length;

    setBgColor(yearColors[yearsSinceBase]); // Set the background color based on the index
    console.log("Year component background color updated.");

    // Note: This setup does not use setInterval or localStorage
    // as the color is determined solely by the current year, 
    // which changes less frequently and doesn't require periodic checks.
  }, []);

  return (
      <div className={`${bgColor} h-8 w-full`}></div>
  );
}

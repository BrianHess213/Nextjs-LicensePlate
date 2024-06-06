'use client';

import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

export default function MonthColorUpdaterPage() {
  const [bgColor, setBgColor] = useState(() => {
    // Set color based on the current month as default
    const monthColors = [
      "bg-red-400", "bg-green-400", "bg-blue-400",
      "bg-yellow-400", "bg-pink-400", "bg-purple-400",
      "bg-red-700", "bg-green-700", "bg-blue-700",
      "bg-yellow-700", "bg-pink-700", "bg-purple-700",
    ];
    const now = DateTime.local();
    const monthIndex = (now.month - 1) % monthColors.length;
    return monthColors[monthIndex];
  });

  useEffect(() => {
    const checkMonthAndUpdateColor = () => {
      const now = DateTime.local();
      const lastChecked = DateTime.fromISO(localStorage.getItem('lastCheckedMonth') || '');

      if (!lastChecked.isValid || now.month !== lastChecked.month) {
        const monthColors = [
          "bg-red-400", "bg-green-400", "bg-blue-400",
          "bg-yellow-400", "bg-pink-400", "bg-purple-400",
          "bg-red-700", "bg-green-700", "bg-blue-700",
          "bg-yellow-700", "bg-pink-700", "bg-purple-700",
        ];

        const monthIndex = (now.month - 1) % monthColors.length;
        setBgColor(monthColors[monthIndex]);
        console.log("Month has changed! Updating color...");
        localStorage.setItem('lastCheckedMonth', now.toISO());
      }
    };

    // Initial check
    checkMonthAndUpdateColor();

    // Set an interval to check every 24 hours
    const intervalId = setInterval(checkMonthAndUpdateColor, 86400000);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className={`${bgColor} h-20 flex items-center justify-center`}>
      <h1 className="text-center text-[40px] p-5">License Plate</h1>
    </div>
  );
}
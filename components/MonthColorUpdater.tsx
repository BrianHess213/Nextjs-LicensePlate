'use client'
import { useEffect, useState } from 'react';
import { DateTime } from 'luxon';

export default function MonthColorUpdaterPage() {
  const [bgColor, setBgColor] = useState('bg-blue-400'); // Default background color

  useEffect(() => {
    const checkMonthAndUpdateColor = () => {
      const lastChecked = DateTime.fromISO(localStorage.getItem('lastCheckedMonth') || DateTime.local().toISO());
      const now = DateTime.local();

      if (now.month > lastChecked.month || (now.month === 1 && lastChecked.month === 12)) {
        const monthColors = [
          "bg-red-400", "bg-green-400", "bg-blue-400",
          "bg-yellow-400", "bg-pink-400", "bg-purple-400",
          "bg-red-700", "bg-green-700", "bg-blue-700",
          "bg-yellow-700", "bg-pink-700", "bg-purple-700",
        ];
        const monthIndex = (now.month - 1) % monthColors.length;
        setBgColor(monthColors[monthIndex]);
        console.log("Month has changed! Updating color...");
      }

      localStorage.setItem('lastCheckedMonth', now.toISO());
    };

    checkMonthAndUpdateColor();
    const intervalId = setInterval(checkMonthAndUpdateColor, 86400000); // Check every 24 hours

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={`${bgColor} h-9 flex items-center justify-center`}>
      <h1 className="text-center text-[40px] p-5 ">License Plate</h1>
    </div>
  );
}

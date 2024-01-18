'use client'

import React, { useState, ChangeEvent } from 'react';

export default function ColorPicker() {
    const [yearColor, setYearColor] = useState(localStorage.getItem("YearColor") || "#000000");
    const [monthColor, setMonthColor] = useState(localStorage.getItem("MonthColor") || "#ffffff");

    function handleYearColorChange(e: ChangeEvent<HTMLInputElement>) {
        const newYearColor = e.target.value;
        setYearColor(newYearColor);
        localStorage.setItem("YearColor", newYearColor);
    }

    function handleMonthColorChange(e: ChangeEvent<HTMLInputElement>) {
        const newMonthColor = e.target.value;
        setMonthColor(newMonthColor);
        localStorage.setItem("MonthColor", newMonthColor);
    }

    return (
        <main className="flex justify-center items-center print:hidden">
            <label htmlFor="year-color-input" className="p-5 block text-sm font-medium mb-2 dark:text-black">Year Color Picker: RGB Color - (48, 187, 223)</label>
            <input
                type="color"
                className="h-15 w-20 block cursor-pointer w-10 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                id="year-color-input"
                value={yearColor}
                onChange={handleYearColorChange}
            />

            <label htmlFor="month-color-input" className="p-5 block text-sm font-medium mb-2 dark:text-black">Month Color Picker: RGB Color - (87, 242, 13)</label>
            <input
                type="color"
                className="h-15 w-20 block cursor-pointer w-10 rounded-lg disabled:opacity-50 disabled:pointer-events-none"
                id="month-color-input"
                value={monthColor}
                onChange={handleMonthColorChange}
            />
        </main>
    );
}
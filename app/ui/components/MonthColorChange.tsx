'use client'

import React, { useEffect } from 'react';

export default function MonthColorChange() {

    useEffect(() => {
        // This effect will run once after the component mounts
        const monthColor = localStorage.getItem("MonthColor");
        const monthColorDiv = document.getElementById("monthColor");
        if (monthColorDiv && monthColor) {
            monthColorDiv.style.backgroundColor = monthColor;
        }
    }, []); // The empty dependency array means this effect runs once after the initial render

    return (
        <main>
            <div id='monthColor' className='w-full h-24'>
                <h1 className="text-center text-[48px] p-5">License Plate</h1>
            </div>
        </main>
    )
}
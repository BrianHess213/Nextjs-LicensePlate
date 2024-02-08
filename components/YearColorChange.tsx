'use client'

import React, { useEffect } from 'react';

export default function YearColorChange() {

    useEffect(() => {
        // This effect will run once after the component mounts
        const yearColor = localStorage.getItem("YearColor");
        const yearColorDiv = document.getElementById("yearColor");
        if (yearColorDiv && yearColor) {
            yearColorDiv.style.backgroundColor = yearColor;
        }
    }, []); // The empty dependency array means this effect runs once after the initial render

    return (
        <main>
            <div id='yearColor'></div>
        </main>
    )
}
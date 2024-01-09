'use client'

import React, { useState } from 'react';
import Image from "next/image"

export default function BarcodeInputComponent() {
  const [inputValue, setInputValue] = useState('');
  
  // In Item file
    const TestingVariable = "I'm Not the JSON you were expecting LOL";

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = async (event) => {
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
      // Prevent form submission if part of a form
      event.preventDefault();

      try {
        //const response = await fetch("/api/fetch-item", {method: "POST", body: "1"})
        console.log("Before the Post Request", TestingVariable);
        const response = await fetch('/api/fetch-item', { // Your API route
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ barcode: inputValue }), // Send the barcode value
        });

        if (response.ok) {
          const data = await response.json();
          // Handle success
          console.log('Barcode processed:', data);
          // Optionally reset the input value
          //setInputValue('');
        } else {
          // Handle errors
          console.error('Barcode processing error:', response.status);
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    }
  };

  return (
    <>
     <div className="mb-6">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown} // Handle the Enter key event
        className="text-sm rounded-lg block w-full p-2.5 text-center"
        placeholder="Scan barcode..."
      />
      </div>


      <Image
        src={`https://barcode.orcascan.com/?data=${inputValue}`}
        unoptimized
        width={200}
        height={200}
        alt="Image of a barcode for Item Number"
      />



    </>
  );
}
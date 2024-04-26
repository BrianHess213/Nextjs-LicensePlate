'use client'

import React, { useState, ChangeEvent, KeyboardEvent } from 'react';
import Image from "next/image"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

export default function BarcodeInputComponent({ placeholder }: { placeholder: string }) {
  const [inputValue, setInputValue] = useState('');

  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  
  // In Item file
  const TestingVariable = "I'm Not the JSON you were expecting LOL";


     
  const handleSearch = useDebouncedCallback((term) => {
    console.log(`Searching... ${term}`);
   
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);




  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleKeyDown = async (event: KeyboardEvent<HTMLInputElement>) => {
    // Check if the Enter key was pressed
    if (event.key === 'Enter') {
      // Prevent form submission if part of a form
      event.preventDefault();

      try {
        console.log("Before the Post Request", TestingVariable);
        const response = await fetch('/api/fetch-item', { // Your API route
          method: 'POST',
          body: JSON.stringify({barcode: inputValue}),
          headers: {
            'content-type': 'text/plain'
          }
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
    
    
    <div className="relative flex flex-1 flex-shrink-0">
            <label htmlFor="search" className="sr-only">
                Search
            </label>
            <input
                className="text-lg rounded-lg block w-full p-2.5 text-center"
                placeholder={placeholder}
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
                defaultValue={searchParams.get('query')?.toString()}
            />
           
        </div>

 
    </>
  );
}
'use client'
import React, { useEffect } from 'react';
import moment from 'moment';

export default function CurrentDate() {


        // Use useEffect to update the DOM after the component mounts
        useEffect(() => {
          // Grab the element by ID once available in the DOM (client-side)
          const currentDateElement = document.getElementById("currentDate");
      
          // Check if the element exists to avoid null reference errors
          if (currentDateElement) {
            // Format the current date with moment and set it to the element's innerHTML
            currentDateElement.innerHTML = moment().format('llll');
          }
        }, []); // The empty dependency array makes sure this effect only runs once after initial render
      
        // Return a span with an ID that will be targeted by the useEffect hook
        return <span id="currentDate"></span>;
   
}
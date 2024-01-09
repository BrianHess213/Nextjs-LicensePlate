'use client'

import React, { useState } from 'react';
import Image from "next/image"


export default function Item() {
    const [inputValue, setInputValue] = useState('Item');

    const handleChange = (event) => {
        setInputValue(event.target.value);
      };
    


        return (
            <>
             <div className="mb-6">
              <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                className="text-sm rounded-lg block w-full p-2.5 text-center"
                placeholder="Input Item..."
              />
              </div>
        
              <div className="flex justify-around">
              <Image
                src={`https://barcode.orcascan.com/?data=${inputValue}`}
                unoptimized
                width={200}
                height={200}
                className=''
                alt="Image of a barcode for Item Number"
              />
          </div>
        
        
            </>
          );

}
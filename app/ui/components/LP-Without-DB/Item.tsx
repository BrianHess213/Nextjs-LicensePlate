'use client'

import React, { useState, ChangeEvent } from 'react';
import Image from "next/image";

export default function Item() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <div className="mb-6">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    className="text-[48px] rounded-lg block w-full p-2.5 text-center"
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
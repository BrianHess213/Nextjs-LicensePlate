'use client';

import Image from "next/image";
import React, { useState } from 'react'; // Import useEffect

const CaseQTY = () => {
  const [ caseQty, setCaseQty ] = useState('');

  const handleCaseQtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaseQty(event.target.value); 
  };

  return (
    <>
      <div>
        <input
          type="number"
          id="case-qty-input"
          value={caseQty}
          onChange={handleCaseQtyChange}
          className="text-6xl rounded-lg border-none block w-full text-center"
          placeholder="Cases on Pallet"
          required
        />
      </div>
      <div className="flex justify-center">
        <Image
          src={`https://barcode.orcascan.com/?data=${caseQty || 0}`}
          unoptimized
          width={200}
          height={200}
          alt="Image of a barcode for Case Count"
        />
      </div>
    </>
  );
};

export default CaseQTY;
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
          className="text-4xl rounded-lg border-none block w-full p-2.5 text-center"
          placeholder="Case QTY"
          required
        />
      </div>
      <div className="flex justify-center pt-1">
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
'use client'

import Image from "next/image"
import React, { useContext } from 'react';
import { CaseQtyContext } from '../LP-With-DB/CaseQtyContext'; // Adjust the import path as necessary

const CaseQTY = () => {
  const { caseQty, setCaseQty } = useContext(CaseQtyContext);

  const handleCaseQtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCaseQty(Number(event.target.value) || 0); // Update the caseQty in the context
  };

  return (
    <>
      <div className="mb-6">
        <input
          type="number"
          id="case-qty-input"
          value={caseQty}
          onChange={handleCaseQtyChange}
          className="peer block w-full rounded-md border border-gray-50 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500 text-center"
          placeholder="Enter Case Quantity"
        />
      </div>
      <div className="flex justify-center">
        <Image
          src={`https://barcode.orcascan.com/?data=${caseQty}`}
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
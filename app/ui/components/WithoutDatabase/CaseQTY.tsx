'use client'

import Image from "next/image"
import React, { useContext } from 'react';
import { CaseQtyContext } from '../WithoutDatabase/CaseQtyContext'; // Adjust the import path as necessary

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
        className="text-sm rounded-lg block w-full p-2.5 text-center"
        placeholder="Enter Case Quantity.."
      />
    </div>
    <div className="flex justify-around">
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
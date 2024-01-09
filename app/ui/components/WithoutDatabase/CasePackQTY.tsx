'use client'
import { Dropdown } from "flowbite-react";
import Image from "next/image"
import React, { useContext } from 'react';
import { CaseQtyContext } from '../WithoutDatabase/CaseQtyContext'; // Adjust the import path as necessary

const CasePackQTY = () => {
  const { casePackQTY, setcasePackQTY } = useContext(CaseQtyContext);

  const handleCaseQtyChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setcasePackQTY(Number(event.target.value) || 0); // Update the caseQty in the context
  };

  return (
    <>

    <div className="mb-6">
      <input
        type="number"
        id="case-qty-input"
        value={casePackQTY}
        onChange={handleCaseQtyChange}
        className="text-sm rounded-lg block w-full p-2.5 text-center"
        placeholder="Enter Case Quantity"
      />
    </div>
    </>
  );
};

export default CasePackQTY;
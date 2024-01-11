'use client'
import { Dropdown } from "flowbite-react";
import Image from "next/image"
import React, { useContext } from 'react';
import { CaseQtyContext } from '../WithoutDatabase/CaseQtyContext'; // Adjust the import path as necessary


const CasePackQTY = () => {
  const { casePackQTY, setcasePackQTY } = useContext(CaseQtyContext);

  const handleCaseQtyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setcasePackQTY(Number(event.target.value) || 0); // Update the casePackQTY in the context
  };

  return (
    <>
      <div className="flex justify-center mb-6">
        <select 
          className=" text-[25px] appearance-none row-start-1 col-start-1 bg-slate-50"
          value={casePackQTY} // Bind the select value to the casePackQTY state
          onChange={handleCaseQtyChange} // Update the state when there's a change
        >
          <option value="12">12</option>
          <option value="24">24</option>
          <option value="30">30</option>
          <option value="48">48</option>
          <option value="144">144</option>
        </select>
      </div>
    </>
  );
};

export default CasePackQTY;
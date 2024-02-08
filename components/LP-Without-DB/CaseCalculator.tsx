'use client'

import Image from "next/image"
import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { CaseQtyContext } from './CaseQtyContext'; // Adjust the import path as necessary


const CaseCalculated = () => {
  const { caseQty } = useContext(CaseQtyContext);
  const { casePackQTY } = useContext(CaseQtyContext);
  const [caseValue, setCaseValue] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (casePackQTY !== undefined && caseQty !== undefined) {
      const calculatedResult = casePackQTY * caseQty;
      setCaseValue(calculatedResult);
    }
  }, [casePackQTY, caseQty]);

 
  return (
    <>
    <div className="text-[25px] flex justify-center">
      {caseValue !== undefined ? caseValue : 'No result'}
    </div>

    <div className="flex justify-center">
        <Image
          src={`https://barcode.orcascan.com/?data=${caseValue}`}
          unoptimized
          width={200}
          height={200}
          
          alt="Image of a barcode for Case Count"
        />
      </div>



    </>
  );
};

export default CaseCalculated;
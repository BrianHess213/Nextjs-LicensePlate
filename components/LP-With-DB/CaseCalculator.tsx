'use client'

import Image from "next/image"
import React, { useContext, useEffect, useState } from 'react';
import useSWR from 'swr';
import { CaseQtyContext } from '../LP-With-DB/CaseQtyContext'; // Adjust the import path as necessary

const fetcher = (url: string) => fetch(url).then(res => res.json());

const CaseCalculated = () => {
  const { caseQty } = useContext(CaseQtyContext);
  const { data, error } = useSWR('/api/fetch-item', fetcher);
  const [caseValue, setCaseValue] = useState<number | undefined>(undefined);

  useEffect(() => {
    if (data && data.result && data.result.length > 0 && caseQty !== undefined) {
      const casePackQTY = data.result[0].casepackqty;
      const calculatedResult = casePackQTY * caseQty;
      setCaseValue(calculatedResult);
    }
  }, [data, caseQty]);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <>
    <div className="flex justify-center">
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
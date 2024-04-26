import React, { useState } from 'react';
import Image from "next/image"


import CurrentDate from '@/components/LP-With-DB/CurrentDate';
import PrintButton from '@/components/PrintButton';
import GetItem from '@/components/LP-With-DB/Get-Item';
import UserName from '@/components/User/user-name';
import CaseCalculated from '@/components/LP-With-DB/CaseCalculator';
import CaseQTY from '@/components/LP-With-DB/CaseQTY';
import ItemComponent from '@/components/LP-With-DB/Item';


import { CaseQtyProvider } from '../../../components/LP-With-DB/CaseQtyContext';


import { getXataClient } from "@/src/xata"
const xata = getXataClient();



export default async function Create({
  searchParams,
}: {
  searchParams?: {
    query?: string,
  },
}) {

  const query = searchParams?.query || '';

  //const numGTIN = searchParams;

  //const numGTIN = new URLSearchParams(searchParams);



  const numGTIN = + query;



  const records = await xata.db.ItemSKU.filter({ Case_GTIN: numGTIN || 0 }).getMany();




  return (
    <CaseQtyProvider>
      <main>
        <h1 className="text-center text-[48px] p-5">License Plate</h1>
        <div className="text-center p-5 grid grid-cols-2 grid-flow-col gap-4 ">
          <div className="mb-6">
            {records[0].Item_Name}

            <ItemComponent placeholder='Use scanner to scan box barcode!' />
            <div className='flex justify-center'>
              <Image
                src={`https://barcode.orcascan.com/?data=${numGTIN}`}
                unoptimized
                width={200}
                height={200}
                alt="Image of a barcode for Item Number"
              />
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-red-900 dark:text-black">Case Count</label>
            <CaseQTY />
          </div>

        </div>
        <div className="flex justify-around ">

        </div>

        <div className="flex justify-center">Case QTY</div>
        <div className='flex justify-center'>{records[0].Case_Pack_QTY}</div>
        <div className="flex justify-center">Eaches</div>
        <div className='flex justify-center'>

        </div>

        <div className="text-center grid grid-cols-2 grid-flow-col gap-4 ">
          <UserName />
          <CurrentDate />
        </div>

        <PrintButton />

      </main>
    </CaseQtyProvider>


  );
}

import React, { useState } from 'react';
import Image from "next/image"


import CurrentDate from '../../../ui/components/WithoutDatabase/CurrentDate';
import PrintButton from '../../../ui/components/WithoutDatabase/PrintButton';
import Item from '../../../ui/components/WithoutDatabase/Item';
import CaseQTY from '../../../ui/components/WithoutDatabase/CaseQTY';
import CasePackQTY from '../../../ui/components/WithoutDatabase/CasePackQTY';
import CaseCalculator from '../../../ui/components/WithoutDatabase/CaseCalculator';

import { CaseQtyProvider } from '../../../ui/components/WithoutDatabase/CaseQtyContext'; 

import UserName from '../../../ui/components/User/user-name';






export default function Create() {


  return (
    <CaseQtyProvider>
    <main>
        <h1 className="text-center text-[48px] p-5">License Plate</h1>
      <div className="text-center p-5 grid grid-cols-2 grid-flow-col gap-4 ">
        <div className="mb-6">
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-red-900 dark:text-black ">Item Number</label>

          <Item />
      
        </div>

        <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-red-900 dark:text-black">Case Count</label>
              <CaseQTY />
        </div>

      </div>
      <div className="flex justify-around ">

      </div>

      <div className="flex justify-center">Case QTY</div>
      <CasePackQTY />
      <div className="flex justify-center">Eaches</div>
      <CaseCalculator />

      <div className="text-center grid grid-cols-2 grid-flow-col gap-4 ">
        <UserName />
        <CurrentDate />
      </div>

        <PrintButton />

    </main>
    </CaseQtyProvider>
  );
}
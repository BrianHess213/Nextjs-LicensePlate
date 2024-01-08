
import React, { useState } from 'react';
import Image from "next/image"


import CurrentDate from '../../ui/components/CurrentDate';
import PrintButton from '../../ui/components/PrintButton';
import GetItem from '../../ui/components/Get-Item';
import GetCasePackQTY from '../../ui/components/Get-CasePackQTY';
import UserName from '../components/User/user-name';
import CaseCalculated from '../../ui/components/CaseCalculator';
import CaseQTY from '../../ui/components/CaseQTY';
import ItemComponent from '../components/Item';


import { CaseQtyProvider } from '../components/CaseQtyContext'; 


export default function Create() {


  return (
    <CaseQtyProvider>
    <main>
        <h1 className="text-center text-[48px] p-5">License Plate</h1>
      <div className="text-center p-5 grid grid-cols-2 grid-flow-col gap-4 ">
        <div className="mb-6">
  
          <GetItem />
          <ItemComponent />
        </div>

        <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-red-900 dark:text-black">Case Count</label>
            <CaseQTY />
        </div>

      </div>
      <div className="flex justify-around ">

      </div>

      <div className="flex justify-center">Case QTY</div>
      <GetCasePackQTY />
      <div className="flex justify-center">Eaches</div>
      <CaseCalculated />

      <div className="text-center grid grid-cols-2 grid-flow-col gap-4 ">
        <UserName />
        <CurrentDate />
      </div>

        <PrintButton />

    </main>
    </CaseQtyProvider>
  );
}
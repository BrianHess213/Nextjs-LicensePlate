
import React, { useState } from 'react';
import Image from "next/image"


import CurrentDate from '../../../ui/components/WithoutDatabase/CurrentDate';
import PrintButton from '../../../ui/components/WithoutDatabase/PrintButton';
import GetItem from '../../../ui/components/WithoutDatabase/Get-Item';
import GetCasePackQTY from '../../../ui/components/WithoutDatabase/Get-CasePackQTY';
import UserName from '../../../ui/components/User/user-name';
import CaseCalculated from '../../../ui/components/WithoutDatabase/CaseCalculator';
import CaseQTY from '../../../ui/components/WithoutDatabase/CaseQTY';
import ItemComponent from '../../../ui/components/WithoutDatabase/Item';


import { CaseQtyProvider } from '../../components/WithoutDatabase/CaseQtyContext'; 


export default function Create() {


  return (
    <CaseQtyProvider>
    <main>
        <h1 className="text-center text-[48px] p-5">License Plate</h1>
      <div className="text-center p-5 grid grid-cols-2 grid-flow-col gap-4 ">
        <div className="mb-6">
  
          
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
import Image from "next/image"
import CurrentDate from '@/components/LP-With-DB/CurrentDate';
import PrintButton from '@/components/DB_PrintButton';
import UserName from '@/components/User/user-name';
import CaseQTY from '@/components/LP-With-DB/CaseQTY';
import ItemComponent from '@/components/LP-With-DB/Item';
import MonthColorUpdaterPage from "@/components/DB_MonthColorUpdater";
import YearColorUpdaterPage from "@/components/DB_YearColorUpdater";
import ReloadPages from "@/components/ReloadPage";
import { Button } from "flowbite-react";

import 'dotenv/config'


const BaseURL = process.env.BASE_URL;


import { getXataClient } from "@/src/xata"
const xata = getXataClient();



export default async function Create({
  searchParams,
}: {
  searchParams?: {
    query?: string,
  },


}) {

  let records;

  try {

    const query = searchParams?.query || '';

    const numGTIN = + query;
    console.log("This is on the Main Page Search", numGTIN)
    records = await xata.db.ItemSKU.filter({
      $any: {
        Item_Name: numGTIN,
        Case_GTIN: numGTIN,
      },
    }).getMany();

    return (
      <main className="py-10">

        <div className="pb-8">
          <MonthColorUpdaterPage />
        </div>

        <div className="text-center p-5 grid grid-cols-2 grid-flow-col gap-4 ">
          <div className="mb-6">
            <ItemComponent placeholder='Scan box barcode!' />

            <div className="text-6xl">
              {records[0].Item_Name}
            </div>

            <div className='flex justify-center pt-6'>

              <Image
                src={`https://barcode.orcascan.com/?data=${records[0].Case_GTIN}`}
                unoptimized
                width={200}
                height={200}
                alt="Image of a barcode for Item Number"
              />
            </div>

          </div>

          <div className="mb-6">
            <label htmlFor="default-input" className="block text-2xl mb-1 font-medium text-gray-900 dark:text-black text-center">Case Count</label>
            <CaseQTY />
          </div>

        </div>
        <div className="flex justify-around ">

        </div>

        <div className="flex justify-center text-2xl pt-10">Case QTY</div>
        <div className='flex justify-center text-4xl pb-10'>{records[0].Case_Pack_QTY}</div>

        <div className="text-center text-xl grid grid-cols-2 grid-flow-col gap-4 ">
          <UserName />
          <CurrentDate />
        </div>

        <YearColorUpdaterPage />

        <div className='pt-3'>
          <PrintButton />
        </div>


      </main>
    );

  } catch (error) {

    console.error('Failed to fetch item data:', error);
    return (
        <main className="flex justify-center h-full items-center">
            <div className="grid grid-cols-1 gap-5">
                <h1 className="text-xl text-red-500 text-center">Failed To Fetch Item Data</h1>
                <h1 className="text-xl text-red-500 text-center">Click Return Button to go back to the previous page</h1>


                <Button href={`${BaseURL}/dashboard/lp-with-db`} pill>Return</Button>

            </div>
        </main>
    );




  }


}
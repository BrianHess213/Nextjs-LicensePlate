import Image from "next/image"
import CurrentDate from '@/components/LP-With-DB/CurrentDate';
import PrintButton from '@/components/PrintButton';
import UserName from '@/components/User/user-name';
import CaseQTY from '@/components/LP-With-DB/CaseQTY';
import ItemComponent from '@/components/LP-With-DB/Item';
import MonthColorUpdaterPage from "@/components/MonthColorUpdater";
import YearColorUpdaterPage from "@/components/YearColorUpdater";

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

  const numGTIN = + query;
  const records = await xata.db.ItemSKU.filter({ Case_GTIN: numGTIN || 0 }).getMany();

  return (
    <main>

      <div className="pt-7">
        <MonthColorUpdaterPage />
      </div>

      <div className="text-center p-5 grid grid-cols-2 grid-flow-col gap-4 ">
        <div className="mb-6">
          <div className="text-2xl">
            {records[0].Item_Name}
          </div>

          <ItemComponent placeholder='Scan box barcode!' />
          <div className='flex justify-center pt-1'>
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
          <label htmlFor="default-input" className="block text-2xl mb-1 font-medium text-gray-900 dark:text-black text-center">Case Count</label>
          <CaseQTY />
        </div>

      </div>
      <div className="flex justify-around ">

      </div>

      <div className="flex justify-center">Case QTY</div>
      <div className='flex justify-center'>{records[0].Case_Pack_QTY}</div>

      <div className="text-center grid grid-cols-2 grid-flow-col gap-4 ">
        <UserName />
        <CurrentDate />
      </div>

      <YearColorUpdaterPage />

      <div className='pt-3'>
        <PrintButton />
      </div>

    </main>
  );
}
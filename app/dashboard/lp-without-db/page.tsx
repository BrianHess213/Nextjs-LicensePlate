import CurrentDate from '@/components/LP-Without-DB/CurrentDate';
import PrintButton from '@/components/LP-Without-DB/PrintButton';
import Item from '@/components/LP-Without-DB/Item';
import CaseQTY from '@/components/LP-Without-DB/CaseQTY';
import CasePackQTY from '@/components/LP-Without-DB/CasePackQTY';
import CaseCalculator from '@/components/LP-Without-DB/CaseCalculator';
import MonthColorUpdaterPage from "@/components/MonthColorUpdater";
import YearColorUpdaterPage from "@/components/YearColorUpdater";
import { CaseQtyProvider } from '../../../components/LP-Without-DB/CaseQtyContext';
import UserName from '../../../components/User/user-name';

export default function Create() {
  return (
    <CaseQtyProvider>
      <main>
        <div className="pt-7">
          <MonthColorUpdaterPage />
        </div>

        <div className="text-center p-5 grid grid-cols-2 grid-flow-col gap-4 ">
          <div className="mb-1">
            <label htmlFor="default-input" className="block mb-2 text-lg font-large dark:text-black ">Item Number</label>
            <Item />
          </div>

          <div className="mb-1">
            <label htmlFor="default-input" className="block mb-2 text-lg font-large dark:text-black ">Case Count</label>
            <CaseQTY />
          </div>

        </div>
        <div className="flex justify-around ">

        </div>

        <div className="flex justify-center text-lg font-large">Case QTY</div>
        <CasePackQTY />
        <div className="flex justify-center text-lg font-large">Eaches</div>
        <CaseCalculator />

        <div className="w-full h-16 text-center grid grid-cols-2 grid-flow-col gap-4 ">
          <UserName />
          <CurrentDate />
        </div>

        <YearColorUpdaterPage />

     
        <PrintButton />
     
        
      </main>
    </CaseQtyProvider>
  );
}
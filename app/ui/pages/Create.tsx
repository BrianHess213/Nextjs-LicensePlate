import Image from "next/image"


import CurrentDate from '../../ui/components/CurrentDate';
import PrintButton from '../../ui/components/PrintButton';




export default function Create() {


  return (
    <main>
        <h1 className="text-center text-[48px] p-5">License Plate</h1>
      <div className="text-center p-5 grid grid-cols-2 grid-flow-col gap-4 ">
        <div className="mb-6">
          <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-red-900 dark:text-black">Item Number</label>
          <input type="text" id="default-input" className="text-sm rounded-lg block w-full p-2.5 text-center" placeholder="Scan Item"></input>
        </div>

        <div className="mb-6">
          <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-red-900 dark:text-black">Case Count</label>
          <input type="text" id="default-input" className="text-sm rounded-lg block w-full p-2.5 text-center" placeholder="Enter Case Count"></input>
        </div>
      </div>
      <div className="flex justify-around ">

        <Image
          src="https://barcode.orcascan.com/?data=EnterItemNumber"
          unoptimized
          width={200}
          height={200}
          alt="Image of a barcode for Item Number"
        />
        <Image
          src="https://barcode.orcascan.com/?data=EnterItemNumber"
          unoptimized
          width={200}
          height={200}
          alt="Image of a barcode for Case Count"
        />

      </div>

      <div className="flex justify-center">Case QTY</div>
      <div className="flex justify-center">48</div>
      <div className="flex justify-center">Eaches</div>
      <div className="flex justify-center">0</div>

      <div className="flex justify-center">
        <Image
          src="https://barcode.orcascan.com/?data=EnterItemNumber"
          unoptimized
          width={200}
          height={200}
          alt="Image of a barcode for Case Count"
        />
      </div>


      <div className="text-center grid grid-cols-2 grid-flow-col gap-4 ">
        <div className="bg-red-500 p-3 ">Name</div>
        <CurrentDate />
      </div>

        <PrintButton />

    </main>
  );
}
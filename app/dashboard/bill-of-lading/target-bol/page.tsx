'use client'

import PrintButton from '../../../ui/components/PrintButton';
import Image from "next/image";



export default function TargetBOL() {

  return (
    <>

      <div className="grid grid-cols-3 divide-x">

        <div className='print:hidden mt-20 flex justify-start items-start'>
          <p>fields go here</p>
        </div>

        <div className='flex justify-end items-end'>
          <Image
            src={`/Target_BOL.png`}
            unoptimized
            width={700}
            height={500}
            className='mt-10'
            alt="Image of a barcode for Item Number"
          />
        </div>
      </div>

      <PrintButton />

    </>
  )
}

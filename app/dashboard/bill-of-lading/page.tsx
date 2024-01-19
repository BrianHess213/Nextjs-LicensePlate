'use client'

import 'dotenv/config'

export default function BillOfLading() {

    const BaseURL = process.env.BASE_URL;

    return (
        <main className="mt-10">
            <p className=" flex justify-center items-center">Main Page for the BOL's</p>
            <a href={`${BaseURL}/dashboard/bill-of-lading/target-bol`}>
            <button type="button" className="mt-10 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Target BOL</button>
            </a>
    
        </main>
    )
}
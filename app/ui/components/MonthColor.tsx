'use client'

export default function MonthColor() {

    return (
        <main className="flex justify-center items-center print:hidden mb-5">
            <label htmlFor="hs-color-input" className="pr-5 block text-sm font-medium mb-2 dark:text-black">Month Color Picker: </label>
            <input type="color" className=" h-15 w-20 block cursor-pointer w-10 rounded-lg disabled:opacity-50 disabled:pointer-events-none" id="hs-color-input"></input>
        </main>
    )

}
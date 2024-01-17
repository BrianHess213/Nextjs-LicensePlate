'use client'

export default function YearColor() {

    function changeColor() {
        document.getElementById("colorChoice").addEventListener('change', (e) => {
            let yearColor = e.target.value;
            document.getElementById('bgColor').style.backgroundColor = yearColor;

            localStorage.setItem("YearColor", yearColor);
        });
    };

    return (
        <main className="flex justify-center items-center print:hidden">
            <label htmlFor="hs-color-input" className="pr-5 block text-sm font-medium mb-2 dark:text-black">Year Color Picker: </label>
            <input type="color" className=" h-15 w-20 block cursor-pointer w-10 rounded-lg disabled:opacity-50 disabled:pointer-events-none" id="colorChoice" onChange={changeColor}></input>

            <div id="bgColor"></div>
        </main>
    )

}
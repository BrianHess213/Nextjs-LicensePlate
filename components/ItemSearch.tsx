import { getXataClient } from "@/src/xata"
const xata = getXataClient();


export default async function ItemSearchPage({
    searchParams,
}: {
    searchParams?: {
        query?: string,
    },
}) {

    
    const query = searchParams?.query || '';
    const numGTIN = +query;
    console.log("This is the console log for numGTIN: ", numGTIN);


    const records = await xata.db.ItemSKU.filter({ Item_Name: numGTIN || 7501 }).getMany();


    console.log(records);






    return (
        <main className="grid grid-cols-5 gap-10 py-5">

        <h1 className="text-4xl text-black">Item Number: {records[0].Item_Name}</h1>
        <h1 className="text-4xl text-black">Description: {records[0].Description}</h1>
        <h1 className="text-4xl text-black">Case Pack QTY: {records[0].Case_Pack_QTY}</h1>
        <h1 className="text-4xl text-black">Case GTIN: {records[0].Case_GTIN}</h1>
        <h1 className="text-4xl text-black">Case GTIN: {records[0].End_Of_Life}</h1>


        </main>
    )
}
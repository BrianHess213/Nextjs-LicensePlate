import ItemSetupPage from "@/app/dashboard/ItemSetup/page";
import { getXataClient } from "@/src/xata"

const xata = getXataClient();

interface SearchParams {
    searchParams?: {
        item?: string
    }
}

export default async function DeleteItemPage({ searchParams }: SearchParams) {
    // Log full component props for debugging purposes
    console.log("Component Props:", { searchParams });


        // Check the full searchParams dictionary
        console.log("Full searchParams object:", searchParams);

        // Extract the item query parameter
        const query = searchParams?.item || '';
        console.log("Extracted query string:", query);

        let Item = +query;

        const records = await xata.db.ItemSKU.filter({ Item_Name: Item || 0 }).getMany();


        console.log(records);

        return(

            <main className="py-10">
                <h1>Delete Item Page: {records[0].Item_Name} {records[0].id}</h1>

            </main>
        )
}
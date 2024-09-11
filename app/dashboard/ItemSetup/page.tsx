import CreateItemPage from "@/components/CreateItem"
import SearchBar from "@/components/ItemSetupSearchBar"
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, Button } from "flowbite-react";
import { getXataClient } from "@/src/xata"
import 'dotenv/config'



const xata = getXataClient();

interface SearchParams {
    searchParams?: {
        item?: string
    }
}

const BaseURL = process.env.BASE_URL;

export default async function ItemSearchPage({ searchParams }: SearchParams) {
    // Log full component props for debugging purposes
    console.log("Component Props:", { searchParams });

    try {
        // Check the full searchParams dictionary
        console.log("Full searchParams object:", searchParams);

        // Extract the item query parameter
        const query = searchParams?.item || '';
        console.log("Extracted query string:", query);

        let Item = +query;

        const records = await xata.db.ItemSKU.filter({ Item_Name: Item || 0 }).getMany();


        console.log(records);
       

        const itemNumber = parseInt(query, 10);
        console.log('Parsed item number:', itemNumber);

       
        return (
            <main className="py-10">
                <h1 className="flex justify-center text-4xl">Item Setup</h1>
                <CreateItemPage />
                <SearchBar placeholder="Search Item Here!" />

                <div className="overflow-x-auto py-5">
                    <Table hoverable>
                        <TableHead>
                            <TableHeadCell>Item Number</TableHeadCell>
                            <TableHeadCell>Description</TableHeadCell>
                            <TableHeadCell>Case GTIN</TableHeadCell>
                            <TableHeadCell>Case Pack QTY</TableHeadCell>
                            <TableHeadCell>Record ID</TableHeadCell>

                            <TableHeadCell>
                                <span className="sr-only">Edit</span>
                            </TableHeadCell>
                        </TableHead>
                        <TableBody className="divide-y">
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {records[0].Item_Name}
                                </TableCell>
                                <TableCell>{records[0].Description}</TableCell>
                                <TableCell>{records[0].Case_GTIN}</TableCell>
                                <TableCell>{records[0].Case_Pack_QTY}</TableCell>
                                <TableCell>{records[0].id}</TableCell>
                                <TableCell>
                                    <a href={`${BaseURL}/dashboard/DeleteItem`} className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Edit
                                    </a>
                                    
                                </TableCell>
                            </TableRow>
                            <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
                
                <div className="flex justify-center">

                

                
                </div>

            </main>
        );
    } catch (error) {
        console.error('Failed to fetch item data:', error);
        return (
            <main className="flex justify-center h-full items-center">
                <div className="grid grid-cols-1 gap-5">
                <h1 className="text-xl text-red-500 text-center">Failed To Fetch Item Data</h1>
                <h1 className="text-xl text-red-500 text-center">Item Doesnt Exist Try Typing It In Again Or Adding The New Item.</h1>


                <Button href={`${BaseURL}/dashboard/ItemSetup`} pill>Return</Button>

                </div>
            </main>
        );
    }
}
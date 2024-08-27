
import CreateItemPage from "@/components/CreateItem"
import ItemSearchPage from "@/components/ItemSearch"
import SearchBar from "@/components/ItemSetupSearchBar"
export default function ItemSetupPage(){

    return(

        <main className="py-10">
            <h1 className="flex justify-center text-4xl">Item Setup</h1>
            <CreateItemPage />
            <SearchBar placeholder="Search Items Here"/>
            {/* <ItemSearchPage /> */}

        </main>
    )
}
import { getXataClient } from '@/src/xata';
const xata = getXataClient();


export async function POST(request: Request) {


    const body = await request.json();
    

    const Item = +body.Search;

    

    const records = await xata.db.ItemSKU.filter("Item_Name", Item)
    .select([
      "Item_Name",
      "Description",
      "Case_Pack_QTY",
      "Case_GTIN",
      "End_Of_Life",
      "Image",
    ])
    .getAll();


    console.log(records);
    
 
    return Response.json({ message: 'Searched Completed', records});

}
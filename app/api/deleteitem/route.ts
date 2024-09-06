import { getXataClient } from '@/src/xata';
const xata = getXataClient();

interface SearchParams {
    searchParams?: {
        item?: string
    }
}


export async function POST(request: Request, { searchParams }: SearchParams) {

       // Extract the item query parameter
       const query = searchParams?.item || '';
       console.log("This is in the Route.ts: ", query);

       let Item = query;




    const body = await request.json();
    console.log('body', body);
    
    // const record = await xata.db.ItemSKU.delete(Item.id);
 
    return Response.json({ message: 'Record Deleted'});

}
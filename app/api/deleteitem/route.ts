import { getXataClient } from '@/src/xata';
const xata = getXataClient();


export async function POST(request: Request) {


    const body = await request.json();
    console.log('body', body);
    
    const ItemID = body.Item_Name;

    const record = await xata.db.ItemSKU.delete(ItemID);

 
    return Response.json({ message: 'Recored Deleted'});

}
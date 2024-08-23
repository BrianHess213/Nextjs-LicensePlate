import { getXataClient } from '@/src/xata';
const xata = getXataClient();


export async function POST(request: Request) {


    const body = await request.json();
    console.log('body', body);
    
    const record = await xata.db.ItemSKU.delete(body.id);
 
    return Response.json({ message: 'Record Deleted'});

}
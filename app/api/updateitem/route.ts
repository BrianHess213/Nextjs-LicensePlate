import { getXataClient } from '@/src/xata';
const xata = getXataClient();


export async function POST(request: Request) {


    const body = await request.json();
    console.log('body', body);
    
    const record = await xata.db.ItemSKU.update(body.id, {
        Item_Name: body.item,
        Description: body.description,
        Case_Pack_QTY: body.casePackQTY,
        Case_GTIN: body.caseGTIN,
        End_Of_Life: body.endOfLife,
      });
 
    return Response.json({ message: 'Updated Record'});

}
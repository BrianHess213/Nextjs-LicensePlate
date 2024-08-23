import { getXataClient } from '@/src/xata';
const xata = getXataClient();


export async function POST(request: Request) {


    const body = await request.json();
    console.log('body', body);
  
    const records = await xata.db.ItemSKU.create({
        Item_Name: body.item,
        Description: body.description,
        Case_Pack_QTY: body.casePackQTY,
        Case_GTIN: body.caseGTIN,
        End_Of_Life: body.endOfLife,
    
    });

    console.log(records);
    
 
    return Response.json({ message: 'Record Created'});

}
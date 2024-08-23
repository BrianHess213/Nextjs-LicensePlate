import { getXataClient } from '@/src/xata';
const xata = getXataClient();


export async function POST(request: Request) {


    const body = await request.json();
    

    const Item = +body.Item_Name;
    const description = body.Description;
    const casePackQTY = +body.Case_Pack_QTY;
    const caseGTIN = +body.Case_GTIN;
    

    const records = await xata.db.ItemSKU.create({
        Item_Name: Item,
        Description: description,
        Case_Pack_QTY: casePackQTY,
        Case_GTIN: caseGTIN,
        End_Of_Life: body.endOfLife,
    
    });


    console.log(records);
    
 
    return Response.json({ message: 'Record Created'});

}
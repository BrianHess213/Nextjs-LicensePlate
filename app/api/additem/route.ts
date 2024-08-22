import { getXataClient } from '@/src/xata';
const xata = getXataClient();


export async function POST(request: Request) {

    const Item = 9001;
    const CasePackQTY = 99;
    const CaseGTIN = 123456789;
    
    const record = await xata.db.ItemSKU.create({
        Item_Name: Item,
        Description: 'This is the Description',
        Case_Pack_QTY: CasePackQTY,
        Case_GTIN: CaseGTIN,
        End_Of_Life: false,
    
    });
    
    console.log(record);
    

    return Response.json({ message: 'Record Created'});

}
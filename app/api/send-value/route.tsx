import { getXataClient } from '@/src/xata';
const xata = getXataClient();


export async function POST(request: Request) {


    const body = await request.json();
    const caseQty = body
    const qty = caseQty.Value;

    console.log("New Value", qty);
    

    const record = await xata.db.CasePackQTY.update("rec_comppb5msqsm2pfa00l0", {
        Value: qty,
      });


    return Response.json({ message: 'Value Counted'});

}
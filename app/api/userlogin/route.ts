import { getXataClient } from '@/src/xata';
const xata = getXataClient();


export async function POST(request: Request) {


    const body = await request.json();
    console.log('body', body);


    const records = await xata.db.ItemSKU.filter({
        Description: body.Description,
        Case_GTIN: +body.Case_GTIN,
      }).getMany();

      console.log("This is a good record",records);

      let isLoggedIn = false;

  

      if (records[0]){

        return Response.json({ message: 'Received Successful'});

        isLoggedIn = true;


      }else{

        return Response.json({ message: 'Received Unsuccessful'});

        isLoggedIn = false;


      }

      
    

    //This is the correct one to use one you can pull you new table from you database for know the top one is to get everthing working
    // const records = await xata.db.Users.filter({
    //     Email: body.Email,
    //     Password: body.Passwordassword,
    // }).getMany();

}
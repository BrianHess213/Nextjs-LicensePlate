




export async function POST(request: Request) {

    const body = await request.json();
    console.log('body', body);
    const { CasePack } = body;


    return Response.json({ message: 'Item Send Successfully'});

}
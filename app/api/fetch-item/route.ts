import prisma from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

//import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextApiRequest, res: NextApiResponse) {
  // const hi = await req.body;
  // console.log(hi);
  // return Response.json({ data: `New hi ${hi}` })  
    try {
      const hi = await req.body.barcode;
      const hello = await req.body;

      

      const result = await prisma.items.findMany({
        where: { casegtin: "1" },
      });

      // Correctly return the response using `res.status().json()`
      //res.status(200).json({ hi });
      return Response.json({ hi }, { status: 201 });
    } catch (error) {
      // Correctly handle errors with `res.status().json()`
      return Response.json({ error: error }, { status: 500 });

    }
 



}


import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

//import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest, res: NextResponse) {

//  const data = await req.body;

//  console.log("Ayooooo what's up",data);

//  return NextResponse.json(data);

 if (req.method === 'POST') {
    try {
      const Barcode = await req.body;

      const result = await prisma.items.findMany({
        where: { casegtin: "1" },
      });

      // Correctly return the response using `res.status().json()`

      return NextResponse.json({data: Barcode }, { status: 201});
    } catch (error) {
      // Correctly handle errors with `res.status().json()`
      return NextResponse.json({ error: error}, { status: 500 });
     
    }
  } else {
    // Correctly handle other methods

  }

}


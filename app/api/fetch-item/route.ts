import { NextResponse } from 'next/server';
import prisma from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

//import { NextRequest, NextResponse } from 'next/server'

export async function POST(req,res) {

 const data = await req.json;

 console.log(data);

 return NextResponse.json(data);

}


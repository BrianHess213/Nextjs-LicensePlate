import prisma from '../../lib/prisma';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
         const item = await prisma.items.findUnique({
            where: {
                id: 2,
            },
          })
    return NextResponse.json({ item }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
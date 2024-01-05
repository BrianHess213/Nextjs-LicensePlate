import prisma from '../../lib/prisma';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result = await prisma.items.findMany({
      where: {
        casegtin: {
          search: '7501',
        },
      },
    })
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
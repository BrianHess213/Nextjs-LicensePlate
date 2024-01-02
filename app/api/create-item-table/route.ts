import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  try {
    const result =
      await sql`CREATE TABLE Items ( 
        ItemName varchar(255), 
        Description varchar(255),
        CasePackQty varchar(255),
        CaseGTIN varchar(255),
        EOL varchar(255)
         );`;
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
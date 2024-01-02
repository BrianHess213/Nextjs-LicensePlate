import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const itemName = searchParams.get('ItemName');
  const description = searchParams.get('Description');
  const casePackQty = searchParams.get('CasePackQty');
  const caseGTIN = searchParams.get('CaseGTIN');
  const eol = searchParams.get('EOL');
 
  try {
    if (!itemName || !description || !casePackQty || !caseGTIN || !eol) throw new Error('ItemName, Description, CasePackQty, CaseGTIN, EOL required');
    await sql`INSERT INTO Items (ItemName, Description, CasePackQty, CaseGTIN, EOL) VALUES (${itemName}, ${description}, ${casePackQty}, ${caseGTIN}, ${eol});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const item = await sql`SELECT * FROM Items;`;
  return NextResponse.json({ item }, { status: 200 });
}
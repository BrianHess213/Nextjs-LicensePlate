import type { NextApiRequest, NextApiResponse } from 'next';

//import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === 'POST') {
        // Process the POST request
        const data = req.body;
        console.log('Received data:', data);
    
        // Send an appropriate response back to the client
        res.status(200).json({ message: 'Data received successfully', data });
      } else {
        // Handle any other HTTP methods
        res.setHeader('Allow', ['POST']);
        //res.status(405).end(`Method ${req.method} Not Allowed`);
      }


}
import prisma from '../../lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';


export default async function post(req: NextApiRequest, res: NextApiResponse) {

  if (req.method === 'POST') {
    try {
      const { barcode } = req.body;

      const result = await prisma.items.findMany({
        where: { casegtin: barcode },
      });

      // Correctly return the response using `res.status().json()`
      res.status(200).json({ result });
    } catch (error) {
      // Correctly handle errors with `res.status().json()`
      res.status(500).json({ error: error.message });
    }
  } else {
    // Correctly handle other methods
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}
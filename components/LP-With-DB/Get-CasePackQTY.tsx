
import axios from "axios"

import { getXataClient } from "@/src/xata"
const xata = getXataClient();


export default async function Create({
  searchParams,
}: {
  searchParams?: {
    query?: string,
  },
}) {

  const query = searchParams?.query || '';
  const numGTIN = + query;

  const records = await xata.db.ItemSKU.filter({ Case_GTIN: numGTIN || 0 }).getMany();

  axios.post("http://localhost:3000/fetch-item", {
    CasePack: numGTIN
  })
  .then((response) => {
    console.log(response);
  });

  return(
    <main>


    </main>
  )
}
// ./app/page.tsx

import { SanityDocument } from "next-sanity";

import Posts from "@/components/Posts";
import { loadQuery } from "@/sanity/lib/store";
import { POSTS_QUERY } from "@/sanity/lib/queries";

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(POSTS_QUERY);

  return(
    <main className="mt-20">
        <Posts posts={initial.data} />

    </main>
  ) 
}
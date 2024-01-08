'use client'

import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function GetItem() {
  const { data, error } = useSWR('', fetcher);

  if (error) return <div>Failed to load.</div>;
  if (!data) return <div>Loading...</div>; // Correctly handle loading state

  // Make sure 'result' and 'itemname' are the expected response keys
  return (
    <div className="block mb-2 text-sm font-medium text-red-900 dark:text-black">
      {data.result?.[0]?.casepackqty ?? 'Item name not available'}
    </div>
  );
}
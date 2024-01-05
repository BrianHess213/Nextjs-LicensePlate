'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json());


export default function GetItem() {
  const { data, isLoading, error } = useSWR('/api/fetch-item', fetcher)

  //console.log(data.result[0].itemname);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <>
      <div className="block mb-2 text-sm font-medium text-red-900 dark:text-black">{data.result[0].itemname}</div>
    </>
  )
}
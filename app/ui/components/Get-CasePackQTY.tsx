'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json());


export default function GetItem() {
  const { data, isLoading, error } = useSWR('', fetcher)

  //console.log(data.item.itemname);

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <>
      <div className="flex justify-center">{data.result[0].casepackqty}</div>
    </>
  )
}
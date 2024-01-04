'use client'

import useSWR from 'swr'

const fetcher = (url: string) => fetch(url).then(res => res.json());


export default function GetItem() {
  //const { data, error, isLoading } = useSWR('/api/fetch-item', fetcher)
  const { data, isLoading, error } = useSWR('/api/fetch-item', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello here is the data = {data.id}</div>
}
import useSWR from 'swr'

export default function GetItem() {
  const { data, error, isLoading } = useSWR('/api/fetch-item', fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return <div>hello {data.itemname}!</div>
}
export default async function ApiClient<T>(url: string, options?: RequestInit): Promise<T> {
  const res = await fetch(url, options)

  return res.json()
}
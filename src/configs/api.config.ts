
const ApiConfig = {
  post: {
    method: "POST",
    headers: { "Content-Type": "application/json"},
  }
} satisfies Record<string, RequestInit>

export type Method = keyof typeof ApiConfig

export default ApiConfig
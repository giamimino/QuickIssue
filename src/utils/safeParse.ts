export default function safeParse<T, E>(value: string, fallBack: E): T | E {
  try {
    return JSON.parse(value) as T;
  } catch {
    return fallBack as E;
  }
}

/**
 * Parse marketing stat display strings for optional count-up.
 * Only pure integer + optional trailing "+" (e.g. "40+", "380") animate.
 * Ranges like "4–7 MW" stay static.
 */
export type ParsedStatValue =
  | { kind: "count"; target: number; suffix: string }
  | { kind: "static"; display: string }

export function parseStatValue(value: string): ParsedStatValue {
  const trimmed = value.trim()
  const match = /^(\d+)(\+)?$/.exec(trimmed)
  if (!match) return { kind: "static", display: value }
  return {
    kind: "count",
    target: Number(match[1]),
    suffix: match[2] ?? "",
  }
}

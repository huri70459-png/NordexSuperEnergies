import assert from "node:assert/strict"
import { parseStatValue } from "./parseStatValue"

assert.deepEqual(parseStatValue("40+"), {
  kind: "count",
  target: 40,
  suffix: "+",
})
assert.deepEqual(parseStatValue("380+"), {
  kind: "count",
  target: 380,
  suffix: "+",
})
assert.deepEqual(parseStatValue("30"), {
  kind: "count",
  target: 30,
  suffix: "",
})
assert.deepEqual(parseStatValue("4–7 MW"), {
  kind: "static",
  display: "4–7 MW",
})
assert.deepEqual(parseStatValue("  99+  "), {
  kind: "count",
  target: 99,
  suffix: "+",
})

console.log("parseStatValue: ok")

import { inquirySchema, isTimeTrap, TIME_TRAP_MS } from "./inquiry"

const valid = {
  fullName: "Ada Lovelace",
  email: "ada@example.com",
  company: "Analytical Engines",
  capacityMw: 50,
  message: "We need a 50 MW proposal for coastal sites.",
  company_website: "",
}

console.assert(inquirySchema.safeParse(valid).success, "valid ok")
console.assert(
  !inquirySchema.safeParse({ ...valid, message: "too short" }).success,
  "message min 20"
)
console.assert(isTimeTrap(0, TIME_TRAP_MS - 1) === true, "trap under 3s")
console.assert(isTimeTrap(0, TIME_TRAP_MS + 1) === false, "pass over 3s")
console.log("inquiry tests passed")

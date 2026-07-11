import { z } from "zod"

export const inquirySchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(1),
  capacityMw: z.number().min(10).max(500).multipleOf(10),
  message: z.string().min(20),
  company_website: z.string().max(0).optional().or(z.literal("")),
})

export type InquiryInput = z.infer<typeof inquirySchema>

export const TIME_TRAP_MS = 3000

export function isTimeTrap(
  firstFocusAt: number | null,
  submitAt: number
): boolean {
  if (firstFocusAt == null) return true
  return submitAt - firstFocusAt < TIME_TRAP_MS
}

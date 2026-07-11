type AllowedProps = {
  location?: "header" | "hero" | "turbines" | "services" | "signature"
  capacityMw?: number
  intent?: "technical" | "proposal"
  modelId?: "n149" | "n163" | "n175"
  blockedReason?: "honeypot" | "time_trap"
}

export type AnalyticsEvent =
  | "cta_click"
  | "form_submit_attempt"
  | "form_submit_success"
  | "form_submit_blocked"
  | "turbine_tab_change"

export function track(event: AnalyticsEvent, props: AllowedProps = {}) {
  // ponytail: Phase 1 console only — swap provider in Phase 2 without changing call sites
  if (process.env.NODE_ENV !== "production") {
    console.debug("[analytics]", event, props)
  }
}

"use client"

import { useEffect } from "react"

import { Button } from "@/components/ui/button"

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string }
  unstable_retry: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-24 sm:px-6">
      <h1 className="text-h1 text-foreground">Something went wrong</h1>
      <p className="max-w-md text-body text-muted-foreground">
        An unexpected error occurred. You can try again or return later.
      </p>
      <Button type="button" className="min-h-11" onClick={() => unstable_retry()}>
        Try again
      </Button>
    </div>
  )
}

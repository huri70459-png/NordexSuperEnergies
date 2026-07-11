import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-24 sm:px-6">
      <h1 className="text-h1 text-foreground">Page not found</h1>
      <p className="max-w-md text-body text-muted-foreground">
        The page you requested does not exist or has been moved.
      </p>
      <Button asChild className="min-h-11">
        <Link href="/">Return home</Link>
      </Button>
    </div>
  )
}

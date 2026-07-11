import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 bg-background p-8">
      <div className="max-w-xl space-y-3 text-center">
        <p className="text-small text-muted-foreground">PR1 scaffold smoke</p>
        <h1 className="text-display text-foreground">Nordex Super Energies</h1>
        <p className="text-body text-muted-foreground">
          Arctic Trust tokens, shadcn Button + Card, Next App Router.
        </p>
      </div>

      <Card className="w-full max-w-md shadow-sm">
        <CardHeader>
          <CardTitle className="text-h3">Scaffold check</CardTitle>
          <CardDescription className="text-body">
            Button and Card render with primary teal and institutional chrome.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-mono text-muted-foreground">
            primary #0f766e · radius-md 0.625rem
          </p>
        </CardContent>
        <CardFooter className="gap-3">
          <Button type="button">Primary CTA</Button>
          <Button type="button" variant="outline">
            Secondary
          </Button>
        </CardFooter>
      </Card>
    </main>
  );
}

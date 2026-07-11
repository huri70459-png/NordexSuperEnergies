import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faq, faqItems } from "@/content/faq"
import { cn } from "@/lib/utils"

type FaqAccordionProps = {
  className?: string
}

/** Light-surface FAQ only — never place on signature/dark bands. */
export function FaqAccordion({ className }: FaqAccordionProps) {
  return (
    <section
      aria-labelledby="faq-title"
      className={cn("border-b border-border bg-background", className)}
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="mb-10 max-w-2xl">
          <p className="text-small font-medium text-primary">{faq.eyebrow}</p>
          <h2 id="faq-title" className="mt-3 text-h2 text-foreground">
            {faq.title}
          </h2>
          <p className="mt-3 text-body text-muted-foreground">{faq.intro}</p>
        </div>

        <Accordion type="single" collapsible className="w-full max-w-3xl">
          {faqItems.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-body text-foreground">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-body text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

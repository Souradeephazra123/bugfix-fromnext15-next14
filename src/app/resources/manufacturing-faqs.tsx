import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ManufacturingFAQs() {
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Manufacturing Financial FAQs
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How is accounting different for manufacturers?
            </AccordionTrigger>
            <AccordionContent>
              Manufacturing accounting requires specialized knowledge of
              inventory valuation, cost accounting, production efficiency
              metrics, and capital investment analysis that general accountants
              often lack.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How can you help us compete with overseas manufacturers?
            </AccordionTrigger>
            <AccordionContent>
              We focus on identifying efficiency improvements, automation
              opportunities, and strategic pricing approaches that allow you to
              compete effectively despite higher domestic labor costs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you understand our specific manufacturing niche?
            </AccordionTrigger>
            <AccordionContent>
              We've worked with manufacturers across numerous specialties, from
              plastics and metals to food processing and packaging. Our approach
              adapts to your specific manufacturing processes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How quickly can we expect to see results?
            </AccordionTrigger>
            <AccordionContent>
              Many of our manufacturing clients see initial improvements within
              3-6 months, with more substantial results developing over 12-18
              months as strategic changes are fully implemented.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Do you help with equipment financing?
            </AccordionTrigger>
            <AccordionContent>
              Yes, we have relationships with 21 banks and financing sources
              specifically experienced with manufacturing equipment loans and
              leases.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Can you help with tax incentives specific to manufacturing?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. We specialize in identifying and maximizing
              manufacturing-specific tax incentives, including R&D credits,
              Section 179 deductions, and state-specific manufacturing
              incentives.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}

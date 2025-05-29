import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section id="faq" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold">FAQ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Find answers to common questions about our platform
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-3xl py-12">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is invoice discounting?</AccordionTrigger>
              <AccordionContent>
                Invoice discounting is a financial service that allows businesses to convert their unpaid invoices into
                immediate cash. Instead of waiting for 30-90 days for your customers to pay, you can get up to 80% of
                the invoice value upfront from TEVANI, helping you maintain healthy cash flow.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Who can apply for invoice discounting?</AccordionTrigger>
              <AccordionContent>
                TEVANI serves MSMEs and startups across India, including those in tier-2 and tier-3 cities. To qualify,
                your business should have been operational for at least 6 months, have a valid GST registration, and
                have invoices issued to creditworthy customers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What documents do I need to submit?</AccordionTrigger>
              <AccordionContent>
                You'll need to provide business registration documents, GST certificate, bank statements for the last 6
                months, KYC documents of directors/proprietors, and the invoices you wish to discount along with
                supporting documents like purchase orders or contracts.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How much funding can I get?</AccordionTrigger>
              <AccordionContent>
                You can receive up to 80% of your invoice value upfront, depending on the risk assessment of your
                invoice. The remaining amount (minus our fees) is transferred to you once your customer pays the
                invoice.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What are the fees and charges?</AccordionTrigger>
              <AccordionContent>
                Our fees typically range from 1.5% to 3% per month of the invoice value, depending on factors like
                invoice amount, payment terms, and the creditworthiness of your customer. We maintain complete
                transparency with no hidden charges.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>How do investors earn returns?</AccordionTrigger>
              <AccordionContent>
                Investors earn returns from the discount fee charged to businesses. The returns typically range from
                12-18% p.a., depending on the risk tier of the invoices they fund. Returns are distributed once the
                invoice is paid by the end customer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-7">
              <AccordionTrigger>Is my investment safe?</AccordionTrigger>
              <AccordionContent>
                We implement multiple layers of security including thorough verification of all invoices, escrow-backed
                funding, and comprehensive risk assessment. However, like all investments, there are inherent risks. We
                recommend diversifying your investments across multiple invoices and risk categories.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-8">
              <AccordionTrigger>How long does the approval process take?</AccordionTrigger>
              <AccordionContent>
                Once you've completed the onboarding process, invoice approvals typically take 24-48 hours. After
                approval, funds are disbursed within the next business day.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

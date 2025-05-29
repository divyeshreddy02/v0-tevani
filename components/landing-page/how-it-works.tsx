export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold">Process</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Simple, transparent, and efficient process for all parties
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
          <div className="rounded-lg border bg-card p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-primary">For Businesses</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Register & Verify</h4>
                  <p className="text-sm text-muted-foreground">Complete digital KYC and business verification</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Upload Invoice</h4>
                  <p className="text-sm text-muted-foreground">Submit invoice details and supporting documents</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Get Approved</h4>
                  <p className="text-sm text-muted-foreground">
                    Our team verifies the invoice and assigns a risk score
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Receive Funds</h4>
                  <p className="text-sm text-muted-foreground">Get up to 80% of invoice value within 24-48 hours</p>
                </div>
              </li>
            </ol>
          </div>
          <div className="rounded-lg border bg-card p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 text-primary">For Investors</h3>
            <ol className="space-y-4">
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                  1
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Register & Fund</h4>
                  <p className="text-sm text-muted-foreground">Complete KYC and add funds to your wallet</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                  2
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Browse Marketplace</h4>
                  <p className="text-sm text-muted-foreground">
                    View verified invoices with risk scores and expected returns
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                  3
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Invest</h4>
                  <p className="text-sm text-muted-foreground">
                    Choose invoices to fund or set up auto-invest criteria
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold">
                  4
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold">Earn Returns</h4>
                  <p className="text-sm text-muted-foreground">Receive principal plus returns when invoice is paid</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

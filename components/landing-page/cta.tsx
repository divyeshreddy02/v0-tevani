import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to Transform Your Finances?
            </h2>
            <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join thousands of businesses and investors on TEVANI's platform
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href="/register?role=business">
              <Button size="lg" variant="secondary" className="gap-2 text-primary">
                Register as Business
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/register?role=investor">
              <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                Register as Investor
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

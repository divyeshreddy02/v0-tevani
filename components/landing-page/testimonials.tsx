import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm font-semibold">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Trusted by Businesses & Investors
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our satisfied users across India
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>RK</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Rajesh Kumar</div>
                  <div className="text-sm text-muted-foreground">Founder, TechSolutions Pvt Ltd</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "TEVANI helped us overcome cash flow challenges during our growth phase. The quick funding against our
                  invoices was a game-changer for our business operations."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>SP</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Sunita Patel</div>
                  <div className="text-sm text-muted-foreground">CEO, GreenHarvest Organics</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "As a growing MSME in a tier-2 city, access to working capital was always a challenge. TEVANI's
                  platform is transparent and their team is extremely supportive."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>AM</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Amit Mehta</div>
                  <div className="text-sm text-muted-foreground">Individual Investor</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "I've been investing through TEVANI for over a year now. The returns are consistent and their risk
                  assessment system gives me confidence in my investments."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>PG</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Priya Gupta</div>
                  <div className="text-sm text-muted-foreground">Founder, FashionFirst</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "The digital onboarding process was smooth and the verification was quick. We received funding within
                  2 days of invoice approval."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>VS</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Vikram Singh</div>
                  <div className="text-sm text-muted-foreground">CFO, BuildRight Construction</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "TEVANI has become an integral part of our financial strategy. Their platform helps us maintain
                  healthy cash flow despite long payment cycles in our industry."
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Avatar>
                  <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Avatar" />
                  <AvatarFallback>NJ</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold">Neha Joshi</div>
                  <div className="text-sm text-muted-foreground">Angel Investor</div>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-sm text-muted-foreground">
                  "The auto-invest feature is brilliant. I can set my risk preferences and investment criteria, and the
                  platform does the rest. Highly recommended for passive income."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

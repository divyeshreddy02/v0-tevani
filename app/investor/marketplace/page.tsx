import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Filter, Search } from "lucide-react"

export default function MarketplacePage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar role="investor" />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h1 className="text-lg font-semibold md:text-2xl">Invoice Marketplace</h1>
              <p className="text-sm text-muted-foreground">Browse and invest in verified invoices</p>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full md:w-auto">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Search invoices..." className="w-full md:w-[200px] pl-8 pr-4" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filter</span>
              </Button>
            </div>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Filter Options</CardTitle>
              <CardDescription>Customize your investment criteria</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <div className="space-y-2">
                  <Label htmlFor="roi-range">ROI Range</Label>
                  <div className="flex items-center justify-between text-sm">
                    <span>12%</span>
                    <span>18%</span>
                  </div>
                  <Slider id="roi-range" defaultValue={[12, 18]} max={20} min={10} step={0.5} className="py-2" />
                </div>
                <div className="space-y-2">
                  <Label>Risk Score</Label>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      A
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      B
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      C
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      D
                    </Button>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="term-range">Term (Days)</Label>
                  <div className="flex items-center justify-between text-sm">
                    <span>30</span>
                    <span>90</span>
                  </div>
                  <Slider id="term-range" defaultValue={[30, 90]} max={120} min={15} step={5} className="py-2" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="amount-range">Amount Range (₹)</Label>
                  <div className="flex items-center justify-between text-sm">
                    <span>50K</span>
                    <span>5L</span>
                  </div>
                  <Slider
                    id="amount-range"
                    defaultValue={[50000, 500000]}
                    max={1000000}
                    min={10000}
                    step={10000}
                    className="py-2"
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-end gap-2">
                <Button variant="outline">Reset</Button>
                <Button>Apply Filters</Button>
              </div>
            </CardContent>
          </Card>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Invoices</TabsTrigger>
              <TabsTrigger value="tier-a">Tier A</TabsTrigger>
              <TabsTrigger value="tier-b">Tier B</TabsTrigger>
              <TabsTrigger value="tier-c">Tier C</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">TechCorp Ltd.</CardTitle>
                          <CardDescription>INV-2023-006</CardDescription>
                        </div>
                      </div>
                      <div className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-600">A</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">₹3,20,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ROI</p>
                        <p className="font-medium text-green-600">14.5% p.a.</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Term</p>
                        <p className="font-medium">45 days</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Maturity</p>
                        <p className="font-medium">15 Aug 2023</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Funding Progress</span>
                        <span className="font-medium">65%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[65%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Invest Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">Innovate Systems</CardTitle>
                          <CardDescription>INV-2023-007</CardDescription>
                        </div>
                      </div>
                      <div className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-600">
                        B
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">₹2,50,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ROI</p>
                        <p className="font-medium text-green-600">16.2% p.a.</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Term</p>
                        <p className="font-medium">60 days</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Maturity</p>
                        <p className="font-medium">30 Aug 2023</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Funding Progress</span>
                        <span className="font-medium">40%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[40%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Invest Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">Global Solutions Inc.</CardTitle>
                          <CardDescription>INV-2023-008</CardDescription>
                        </div>
                      </div>
                      <div className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-600">A</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">₹4,80,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ROI</p>
                        <p className="font-medium text-green-600">13.8% p.a.</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Term</p>
                        <p className="font-medium">30 days</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Maturity</p>
                        <p className="font-medium">10 Aug 2023</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Funding Progress</span>
                        <span className="font-medium">85%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[85%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Invest Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">Prime Industries</CardTitle>
                          <CardDescription>INV-2023-009</CardDescription>
                        </div>
                      </div>
                      <div className="rounded-full bg-blue-500/20 px-2 py-1 text-xs font-medium text-blue-600">C</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">₹1,75,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ROI</p>
                        <p className="font-medium text-green-600">17.5% p.a.</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Term</p>
                        <p className="font-medium">90 days</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Maturity</p>
                        <p className="font-medium">20 Sep 2023</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Funding Progress</span>
                        <span className="font-medium">25%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[25%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Invest Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">Future Enterprises</CardTitle>
                          <CardDescription>INV-2023-010</CardDescription>
                        </div>
                      </div>
                      <div className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-600">
                        B
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">₹3,60,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ROI</p>
                        <p className="font-medium text-green-600">15.8% p.a.</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Term</p>
                        <p className="font-medium">45 days</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Maturity</p>
                        <p className="font-medium">25 Aug 2023</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Funding Progress</span>
                        <span className="font-medium">50%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[50%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Invest Now</Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                          <Building className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <CardTitle className="text-base">BuildRight Construction</CardTitle>
                          <CardDescription>INV-2023-011</CardDescription>
                        </div>
                      </div>
                      <div className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-600">A</div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <p className="text-muted-foreground">Amount</p>
                        <p className="font-medium">₹5,20,000</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">ROI</p>
                        <p className="font-medium text-green-600">14.2% p.a.</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Term</p>
                        <p className="font-medium">60 days</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Maturity</p>
                        <p className="font-medium">05 Sep 2023</p>
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Funding Progress</span>
                        <span className="font-medium">70%</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-muted">
                        <div className="h-full w-[70%] rounded-full bg-primary"></div>
                      </div>
                    </div>
                    <Button className="mt-4 w-full">Invest Now</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

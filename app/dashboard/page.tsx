import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Download, TrendingUp, Upload } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar role="business" />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Amount Raised</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹24,50,000</div>
                <p className="text-xs text-muted-foreground">+20.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Invoices Approved</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+180.1% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2" />
                  <path d="M2 10h20" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">+19% from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Payout Due</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">₹5,20,000</div>
                <p className="text-xs text-muted-foreground">Due in 15 days</p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Invoice Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">INV-2023-001</div>
                        <div className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-600">
                          Funded
                        </div>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">₹3,50,000</div>
                    </div>
                    <Progress value={100} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">INV-2023-002</div>
                        <div className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-600">
                          Pending
                        </div>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">₹2,75,000</div>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">INV-2023-003</div>
                        <div className="rounded-full bg-blue-500/20 px-2 py-1 text-xs font-medium text-blue-600">
                          Verified
                        </div>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">₹1,80,000</div>
                    </div>
                    <Progress value={80} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="flex items-center gap-2">
                        <div className="font-semibold">INV-2023-004</div>
                        <div className="rounded-full bg-red-500/20 px-2 py-1 text-xs font-medium text-red-600">
                          Rejected
                        </div>
                      </div>
                      <div className="ml-auto text-sm text-muted-foreground">₹4,20,000</div>
                    </div>
                    <Progress value={0} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Upload a new invoice or check status</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-6">
                <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Upload className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Upload Invoice</h3>
                  <p className="text-center text-sm text-muted-foreground">Upload a new invoice to get funded</p>
                  <Link href="/dashboard/upload">
                    <Button className="mt-2">Upload Now</Button>
                  </Link>
                </div>
                <div className="flex flex-col items-center gap-2 rounded-lg border border-dashed p-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Download className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">Download Reports</h3>
                  <p className="text-center text-sm text-muted-foreground">Download your invoice and payment reports</p>
                  <Button variant="outline" className="mt-2">
                    Download
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  )
}

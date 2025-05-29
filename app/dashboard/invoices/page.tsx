import { Header } from "@/components/dashboard/header"
import { Sidebar } from "@/components/dashboard/sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, Eye } from "lucide-react"

export default function InvoicesPage() {
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <Sidebar role="business" />
      <div className="flex flex-col">
        <Header />
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold md:text-2xl">Invoice Status</h1>
            <Button variant="outline" size="sm" className="ml-auto">
              <Download className="mr-2 h-4 w-4" />
              Export
            </Button>
          </div>
          <Tabs defaultValue="all" className="space-y-4">
            <TabsList>
              <TabsTrigger value="all">All Invoices</TabsTrigger>
              <TabsTrigger value="pending">Pending</TabsTrigger>
              <TabsTrigger value="verified">Verified</TabsTrigger>
              <TabsTrigger value="funded">Funded</TabsTrigger>
              <TabsTrigger value="rejected">Rejected</TabsTrigger>
            </TabsList>
            <TabsContent value="all" className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle>All Invoices</CardTitle>
                  <CardDescription>View all your invoices and their current status</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Invoice ID</TableHead>
                        <TableHead>Buyer</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Due Date</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Risk Tier</TableHead>
                        <TableHead>Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="font-medium">INV-2023-001</TableCell>
                        <TableCell>TechCorp Ltd.</TableCell>
                        <TableCell>₹3,50,000</TableCell>
                        <TableCell>15 Jun 2023</TableCell>
                        <TableCell>
                          <div className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-600">
                            Funded
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-600">
                            A
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV-2023-002</TableCell>
                        <TableCell>Global Solutions Inc.</TableCell>
                        <TableCell>₹2,75,000</TableCell>
                        <TableCell>22 Jun 2023</TableCell>
                        <TableCell>
                          <div className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-600">
                            Pending
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-600">
                            B
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV-2023-003</TableCell>
                        <TableCell>Innovate Systems</TableCell>
                        <TableCell>₹1,80,000</TableCell>
                        <TableCell>30 Jun 2023</TableCell>
                        <TableCell>
                          <div className="rounded-full bg-blue-500/20 px-2 py-1 text-xs font-medium text-blue-600">
                            Verified
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="rounded-full bg-blue-500/20 px-2 py-1 text-xs font-medium text-blue-600">
                            B
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV-2023-004</TableCell>
                        <TableCell>Future Enterprises</TableCell>
                        <TableCell>₹4,20,000</TableCell>
                        <TableCell>05 Jul 2023</TableCell>
                        <TableCell>
                          <div className="rounded-full bg-red-500/20 px-2 py-1 text-xs font-medium text-red-600">
                            Rejected
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="rounded-full bg-red-500/20 px-2 py-1 text-xs font-medium text-red-600">D</div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="font-medium">INV-2023-005</TableCell>
                        <TableCell>Prime Industries</TableCell>
                        <TableCell>₹2,10,000</TableCell>
                        <TableCell>12 Jul 2023</TableCell>
                        <TableCell>
                          <div className="rounded-full bg-green-500/20 px-2 py-1 text-xs font-medium text-green-600">
                            Funded
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="rounded-full bg-yellow-500/20 px-2 py-1 text-xs font-medium text-yellow-600">
                            B
                          </div>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building, Users } from "lucide-react"
import { useEffect, useState } from "react"

export default function RegisterPage() {
  const searchParams = useSearchParams()
  const role = searchParams.get("role")
  const [activeTab, setActiveTab] = useState("business")

  useEffect(() => {
    if (role === "investor") {
      setActiveTab("investor")
    } else if (role === "business") {
      setActiveTab("business")
    }
  }, [role])

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted p-4">
      <div className="w-full max-w-md">
        <Link href="/" className="flex items-center justify-center mb-8">
          <span className="font-poppins text-2xl font-bold text-primary">TEVANI</span>
        </Link>
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
            <CardDescription className="text-center">Choose your account type and enter your details</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="business" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>Business</span>
                </TabsTrigger>
                <TabsTrigger value="investor" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>Investor</span>
                </TabsTrigger>
              </TabsList>
              <TabsContent value="business">
                <div className="mb-4 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    MSME / Startup
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Register as a business to unlock working capital by discounting your unpaid invoices.
                  </p>
                </div>
                <form>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First name</Label>
                        <Input id="first-name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last name</Label>
                        <Input id="last-name" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company-name">Company name</Label>
                      <Input id="company-name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gstin">GSTIN</Label>
                      <Input id="gstin" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-business">Email</Label>
                      <Input id="email-business" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-business">Password</Label>
                      <Input id="password-business" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Register as Business
                    </Button>
                  </div>
                </form>
              </TabsContent>
              <TabsContent value="investor">
                <div className="mb-4 p-4 bg-muted rounded-lg">
                  <h3 className="font-semibold mb-2 flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    Investor
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Register as an investor to fund verified invoices and earn attractive returns.
                  </p>
                </div>
                <form>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name-investor">First name</Label>
                        <Input id="first-name-investor" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name-investor">Last name</Label>
                        <Input id="last-name-investor" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pan">PAN Number</Label>
                      <Input id="pan" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email-investor">Email</Label>
                      <Input id="email-investor" type="email" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="password-investor">Password</Label>
                      <Input id="password-investor" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                      Register as Investor
                    </Button>
                  </div>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-primary hover:underline">
                Login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

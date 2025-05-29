"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { BarChart3, Building, FileText, HelpCircle, Home, LogOut, Settings, Upload, User } from "lucide-react"

interface SidebarProps {
  role: "business" | "investor"
}

export function Sidebar({ role }: SidebarProps) {
  const pathname = usePathname()

  const businessLinks = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: Home,
    },
    {
      title: "Upload Invoice",
      href: "/dashboard/upload",
      icon: Upload,
    },
    {
      title: "Invoice Status",
      href: "/dashboard/invoices",
      icon: FileText,
    },
    {
      title: "Help Center",
      href: "/dashboard/help",
      icon: HelpCircle,
    },
  ]

  const investorLinks = [
    {
      title: "Dashboard",
      href: "/investor",
      icon: Home,
    },
    {
      title: "Marketplace",
      href: "/investor/marketplace",
      icon: Building,
    },
    {
      title: "My Portfolio",
      href: "/investor/portfolio",
      icon: BarChart3,
    },
    {
      title: "Auto-Invest",
      href: "/investor/auto-invest",
      icon: Settings,
    },
    {
      title: "Help Center",
      href: "/investor/help",
      icon: HelpCircle,
    },
  ]

  const links = role === "business" ? businessLinks : investorLinks

  return (
    <div className="flex h-screen flex-col border-r bg-card">
      <div className="flex h-14 items-center border-b px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="font-poppins text-xl font-bold text-primary">TEVANI</span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto py-2">
        <nav className="grid items-start px-2 text-sm font-medium">
          {links.map((link, index) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={index}
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all ${
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <link.icon className="h-4 w-4" />
                {link.title}
              </Link>
            )
          })}
        </nav>
      </div>
      <div className="mt-auto border-t p-4">
        <div className="flex items-center gap-2 rounded-lg p-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
            <User className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <p className="text-xs font-medium leading-none">John Doe</p>
            <p className="text-xs text-muted-foreground">john@example.com</p>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto">
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}

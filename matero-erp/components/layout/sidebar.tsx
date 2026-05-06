"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/ventas", label: "Ventas" },
  { href: "/stock", label: "Stock" },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 border-r bg-white">
      <div className="flex h-16 items-center px-6 border-b">
        <h2 className="text-lg font-semibold tracking-tight">
          Bien Matero
        </h2>
      </div>

      <nav className="p-4 space-y-1">
        {links.map((link) => {
          const isActive = pathname === link.href

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "block rounded-md px-3 py-2 text-sm transition-colors",
                isActive
                  ? "bg-gray-900 text-white"
                  : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
              )}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
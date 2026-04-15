import "./globals.css"
import { ReactNode } from "react"
import Sidebar from "@/components/layout/sidebar"
import Header from "@/components/layout/header"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900 antialiased">
        <div className="flex min-h-screen">

          {/* Sidebar */}
          <Sidebar />

          {/* Main area */}
          <div className="flex flex-1 flex-col">

            {/* Header */}
            <Header />

            {/* Content */}
            <main className="flex-1 p-6">
              <div className="mx-auto max-w-6xl">
                {children}
              </div>
            </main>

          </div>
        </div>
      </body>
    </html>
  )
}
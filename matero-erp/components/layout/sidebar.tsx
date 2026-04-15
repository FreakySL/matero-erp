import Link from "next/link"

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r p-4">
      <h2 className="text-xl font-semibold mb-6">Bien Matero</h2>

      <nav className="flex flex-col gap-2">
        <Link href="/dashboard" className="hover:bg-gray-100 p-2 rounded">
          Dashboard
        </Link>

        <Link href="/sales" className="hover:bg-gray-100 p-2 rounded">
          Ventas
        </Link>

        <Link href="/stock" className="hover:bg-gray-100 p-2 rounded">
          Stock
        </Link>
      </nav>
    </aside>
  )
}
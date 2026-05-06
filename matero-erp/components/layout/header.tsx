export default function Header() {
  return (
    <header className="h-16 border-b bg-white flex items-center px-6">
      <div className="flex items-center justify-between w-full">
        
        <h1 className="text-sm font-medium text-gray-600">
          Dashboard
        </h1>

        {/* espacio para acciones futuras */}
        <div className="flex items-center gap-2">
          {/* ejemplo: botón, usuario, etc */}
        </div>

      </div>
    </header>
  )
}
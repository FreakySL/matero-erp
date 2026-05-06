import AIInsights from "@/features/ai/components/ai-insights";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <AIInsights />

      <div>
        <h2 className="text-2xl font-semibold tracking-tight">
          Dashboard
        </h2>
        <p className="text-sm text-gray-500">
          Resumen general del negocio
        </p>
      </div>

      {/* placeholder */}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="bg-white p-4 rounded-lg border">
          Card 1
        </div>

        <div className="bg-white p-4 rounded-lg border">
          Card 2
        </div>
      </div>
    </div>
  )
}
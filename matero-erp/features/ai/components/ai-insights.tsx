import { getBusinessSummary } from "../skills/getBusinessSummary"

export default async function AIInsights() {
  const data = await getBusinessSummary()

  return (
    <div className="bg-white p-4 rounded-lg border">
      <h3 className="font-semibold mb-2">Insights</h3>
      <p className="text-sm text-gray-600">{data.message}</p>
      <p className="text-sm mt-2">{data.highlight}</p>
    </div>
  )
}
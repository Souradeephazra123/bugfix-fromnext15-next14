import { EquipmentCalculator } from "@/components/equipment-calculator";

export default function EquipmentFinancingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <EquipmentCalculator />
      </div>
    </main>
  );
}

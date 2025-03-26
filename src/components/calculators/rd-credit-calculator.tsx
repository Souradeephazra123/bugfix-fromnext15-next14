"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function RDCreditCalculator() {
  const [annualRevenue, setAnnualRevenue] = useState<number>(1000000);
  const [rdExpensePercent, setRdExpensePercent] = useState<number>(8);
  const [qualifyingPercent, setQualifyingPercent] = useState<number>(60);
  const [industry, setIndustry] = useState<string>("manufacturing");
  const [calculatedCredit, setCalculatedCredit] = useState<number | null>(null);

  const handleCalculate = () => {
    // Simple calculation for demonstration
    const rdExpenses = annualRevenue * (rdExpensePercent / 100);
    const qualifyingExpenses = rdExpenses * (qualifyingPercent / 100);
    const creditRate = 0.14; // 14% is a common rate for the federal R&D credit
    const estimatedCredit = qualifyingExpenses * creditRate;

    setCalculatedCredit(estimatedCredit);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="industry">Industry</Label>
          <Select value={industry} onValueChange={setIndustry}>
            <SelectTrigger id="industry" className="w-full">
              <SelectValue placeholder="Select Industry" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="manufacturing">Manufacturing</SelectItem>
                <SelectItem value="food">Food Processing</SelectItem>
                <SelectItem value="plastics">Plastics & Polymers</SelectItem>
                <SelectItem value="metal">Metal Fabrication</SelectItem>
                <SelectItem value="packaging">Packaging</SelectItem>
                <SelectItem value="other">Other Industry</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="annual-revenue">Annual Revenue</Label>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500">$</span>
            <Input
              id="annual-revenue"
              type="number"
              min="0"
              value={annualRevenue}
              onChange={(e) => setAnnualRevenue(Number(e.target.value))}
              className="flex-1"
            />
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <Label htmlFor="rd-expense-percent">
              R&D Expenses (% of Revenue)
            </Label>
            <span className="text-sm font-medium">{rdExpensePercent}%</span>
          </div>
          <Slider
            id="rd-expense-percent"
            min={1}
            max={30}
            step={1}
            value={[rdExpensePercent]}
            onValueChange={(value) => setRdExpensePercent(value[0])}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>1%</span>
            <span>15%</span>
            <span>30%</span>
          </div>
        </div>

        <div>
          <div className="flex justify-between">
            <Label htmlFor="qualifying-percent">
              Qualifying Activities (%)
            </Label>
            <span className="text-sm font-medium">{qualifyingPercent}%</span>
          </div>
          <Slider
            id="qualifying-percent"
            min={0}
            max={100}
            step={5}
            value={[qualifyingPercent]}
            onValueChange={(value) => setQualifyingPercent(value[0])}
            className="mt-2"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>0%</span>
            <span>50%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      <Button
        onClick={handleCalculate}
        className="w-full bg-brand-gold hover:bg-brand-gold-dark text-white"
        size="lg"
      >
        Calculate R&D Credit
      </Button>

      {calculatedCredit !== null && (
        <Card className="p-4 bg-amber-50 border-amber-200 mt-4">
          <h3 className="text-lg font-bold text-amber-800 mb-2">
            Estimated R&D Tax Credit
          </h3>
          <div className="text-3xl font-bold text-amber-900">
            $
            {calculatedCredit.toLocaleString(undefined, {
              maximumFractionDigits: 0,
            })}
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Based on $
            {(annualRevenue * (rdExpensePercent / 100)).toLocaleString(
              undefined,
              { maximumFractionDigits: 0 },
            )}{" "}
            in R&D expenses with
            {qualifyingPercent}% qualifying activities.
          </p>
          <div className="mt-4">
            <Button
              variant="outline"
              className="w-full border-amber-700 text-amber-800 hover:bg-amber-100"
              asChild
            >
              <a href="/contact">Discuss Your R&D Credits With an Expert</a>
            </Button>
          </div>
        </Card>
      )}
    </div>
  );
}

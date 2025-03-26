"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface SensitivityAnalysisProps {
  baseValue: number;
  adjustedEbitda: number;
  baseMultiple: number;
  formatCurrency: (value: number) => string;
}

export function SensitivityAnalysis({
  baseValue = 0,
  adjustedEbitda = 0,
  baseMultiple = 0,
  formatCurrency,
}: SensitivityAnalysisProps) {
  const [multipleVariation, setMultipleVariation] = useState(0);
  const [ebitdaVariation, setEbitdaVariation] = useState(0);

  // Ensure we have valid numbers to work with
  const safeBaseValue = typeof baseValue === "number" ? baseValue : 0;
  const safeAdjustedEbitda =
    typeof adjustedEbitda === "number" ? adjustedEbitda : 0;
  const safeBaseMultiple = typeof baseMultiple === "number" ? baseMultiple : 0;

  // Calculate the adjusted values based on the variations
  const adjustedMultiple = safeBaseMultiple * (1 + multipleVariation / 100);
  const adjustedEbitdaValue = safeAdjustedEbitda * (1 + ebitdaVariation / 100);
  const newValue = adjustedEbitdaValue * adjustedMultiple;
  const valueDifference = newValue - safeBaseValue;
  const percentChange =
    safeBaseValue !== 0 ? (valueDifference / safeBaseValue) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sensitivity Analysis</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="multiple">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="multiple">Multiple Sensitivity</TabsTrigger>
            <TabsTrigger value="ebitda">EBITDA Sensitivity</TabsTrigger>
          </TabsList>

          <TabsContent value="multiple" className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>Multiple Adjustment</Label>
                <span className="font-medium">
                  {multipleVariation > 0 ? "+" : ""}
                  {multipleVariation}%
                </span>
              </div>
              <Slider
                value={[multipleVariation]}
                min={-30}
                max={30}
                step={5}
                onValueChange={(value) => setMultipleVariation(value[0])}
              />
              <div className="grid grid-cols-3 text-xs text-gray-500">
                <div>-30%</div>
                <div className="text-center">0%</div>
                <div className="text-right">+30%</div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Base Multiple:</span>
                <span className="font-medium">
                  {safeBaseMultiple.toFixed(2)}x
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Adjusted Multiple:</span>
                <span className="font-medium">
                  {adjustedMultiple.toFixed(2)}x
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Base Value:</span>
                <span className="font-medium">
                  {formatCurrency(safeBaseValue)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>New Value:</span>
                <span className="font-medium">{formatCurrency(newValue)}</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t">
                <span>Value Change:</span>
                <span
                  className={`font-medium ${valueDifference >= 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {valueDifference >= 0 ? "+" : ""}
                  {formatCurrency(valueDifference)} ({percentChange.toFixed(1)}
                  %)
                </span>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="ebitda" className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <Label>EBITDA Adjustment</Label>
                <span className="font-medium">
                  {ebitdaVariation > 0 ? "+" : ""}
                  {ebitdaVariation}%
                </span>
              </div>
              <Slider
                value={[ebitdaVariation]}
                min={-30}
                max={30}
                step={5}
                onValueChange={(value) => setEbitdaVariation(value[0])}
              />
              <div className="grid grid-cols-3 text-xs text-gray-500">
                <div>-30%</div>
                <div className="text-center">0%</div>
                <div className="text-right">+30%</div>
              </div>
            </div>

            <div className="pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Base EBITDA:</span>
                <span className="font-medium">
                  {formatCurrency(safeAdjustedEbitda)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Adjusted EBITDA:</span>
                <span className="font-medium">
                  {formatCurrency(adjustedEbitdaValue)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Base Value:</span>
                <span className="font-medium">
                  {formatCurrency(safeBaseValue)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>New Value:</span>
                <span className="font-medium">{formatCurrency(newValue)}</span>
              </div>
              <div className="flex justify-between text-sm pt-2 border-t">
                <span>Value Change:</span>
                <span
                  className={`font-medium ${valueDifference >= 0 ? "text-green-600" : "text-red-600"}`}
                >
                  {valueDifference >= 0 ? "+" : ""}
                  {formatCurrency(valueDifference)} ({percentChange.toFixed(1)}
                  %)
                </span>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}

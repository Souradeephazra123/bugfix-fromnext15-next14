"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function RDCreditCalculator() {
  // State for calculator inputs
  const [industry, setIndustry] = useState("manufacturing");
  const [annualRevenue, setAnnualRevenue] = useState(1000000);
  const [rdExpenses, setRDExpenses] = useState({
    wages: 0,
    supplies: 0,
    contract: 0,
    cloud: 0,
  });
  const [qualifyingPercentages, setQualifyingPercentages] = useState({
    wages: 60,
    supplies: 40,
    contract: 50,
    cloud: 30,
  });
  const [priorYears, setPriorYears] = useState({
    year1: 0,
    year2: 0,
    year3: 0,
  });

  // Calculate total QREs
  const calculateQREs = () => {
    return {
      wages: (rdExpenses.wages * qualifyingPercentages.wages) / 100,
      supplies: (rdExpenses.supplies * qualifyingPercentages.supplies) / 100,
      contract:
        (rdExpenses.contract * qualifyingPercentages.contract * 0.65) / 100,
      cloud: (rdExpenses.cloud * qualifyingPercentages.cloud) / 100,
    };
  };

  // Calculate credit using ASC method
  const calculateASC = () => {
    const qres = calculateQREs();
    const totalQREs = Object.values(qres).reduce((a, b) => a + b, 0);
    const baseAmount =
      ((priorYears.year1 + priorYears.year2 + priorYears.year3) / 3) * 0.5;
    return Math.max(0, (totalQREs - baseAmount) * 0.14);
  };

  return (
    <div className="container mx-auto py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-black">
            Manufacturing R&D Tax Credit Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="expenses" className="space-y-4">
            <TabsList className="bg-gray-100">
              <TabsTrigger
                value="expenses"
                className="data-[state=active]:bg-brand-gold data-[state=active]:text-white"
              >
                R&D Expenses
              </TabsTrigger>
              <TabsTrigger
                value="qualifying"
                className="data-[state=active]:bg-brand-gold data-[state=active]:text-white"
              >
                Qualifying Percentages
              </TabsTrigger>
              <TabsTrigger
                value="historical"
                className="data-[state=active]:bg-brand-gold data-[state=active]:text-white"
              >
                Historical Data
              </TabsTrigger>
            </TabsList>

            <TabsContent value="expenses" className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="wages">R&D Wages</Label>
                  <Input
                    id="wages"
                    type="number"
                    value={rdExpenses.wages}
                    onChange={(e) =>
                      setRDExpenses({
                        ...rdExpenses,
                        wages: Number(e.target.value),
                      })
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="supplies">R&D Supplies & Materials</Label>
                  <Input
                    id="supplies"
                    type="number"
                    value={rdExpenses.supplies}
                    onChange={(e) =>
                      setRDExpenses({
                        ...rdExpenses,
                        supplies: Number(e.target.value),
                      })
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="contract">Contract Research</Label>
                  <Input
                    id="contract"
                    type="number"
                    value={rdExpenses.contract}
                    onChange={(e) =>
                      setRDExpenses({
                        ...rdExpenses,
                        contract: Number(e.target.value),
                      })
                    }
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="cloud">Cloud Computing Costs</Label>
                  <Input
                    id="cloud"
                    type="number"
                    value={rdExpenses.cloud}
                    onChange={(e) =>
                      setRDExpenses({
                        ...rdExpenses,
                        cloud: Number(e.target.value),
                      })
                    }
                    className="mt-1"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="qualifying" className="space-y-4">
              <div className="grid gap-6">
                <div>
                  <Label>Wages Qualifying Percentage</Label>
                  <div className="flex items-center gap-4">
                    <Slider
                      value={[qualifyingPercentages.wages]}
                      onValueChange={(value) =>
                        setQualifyingPercentages({
                          ...qualifyingPercentages,
                          wages: value[0],
                        })
                      }
                      max={100}
                      step={1}
                    />
                    <span className="w-12 text-right">
                      {qualifyingPercentages.wages}%
                    </span>
                  </div>
                </div>

                {/* Similar sliders for other qualifying percentages */}
              </div>
            </TabsContent>

            <TabsContent value="historical" className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <Label htmlFor="year1">Prior Year 1 QREs</Label>
                  <Input
                    id="year1"
                    type="number"
                    value={priorYears.year1}
                    onChange={(e) =>
                      setPriorYears({
                        ...priorYears,
                        year1: Number(e.target.value),
                      })
                    }
                    className="mt-1"
                  />
                </div>

                {/* Similar inputs for years 2 and 3 */}
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8">
            <Card className="bg-gray-50">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-black mb-4">
                  Estimated R&D Tax Credit
                </h3>
                <div className="text-3xl font-bold text-brand-gold">
                  $
                  {calculateASC().toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Based on{" "}
                  {Object.values(calculateQREs())
                    .reduce((a, b) => a + b, 0)
                    .toLocaleString()}{" "}
                  in qualifying R&D expenses
                </p>
              </CardContent>
            </Card>
          </div>

          <Accordion type="single" collapsible className="mt-6">
            <AccordionItem value="help">
              <AccordionTrigger className="text-black hover:text-brand-gold">
                Need Help Identifying Qualifying Activities?
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-2">
                  <p>Common qualifying manufacturing activities include:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Developing new manufacturing processes</li>
                    <li>Improving existing process efficiency</li>
                    <li>Creating prototypes or models</li>
                    <li>Testing new materials</li>
                    <li>Developing or improving production equipment</li>
                    <li>Implementing automation solutions</li>
                  </ul>
                  <Button
                    className="mt-4 bg-brand-gold hover:bg-brand-dark text-white"
                    asChild
                  >
                    <a href="/resources/rd-guide">
                      View Full R&D Activity Guide
                    </a>
                  </Button>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}

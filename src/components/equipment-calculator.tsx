"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { InfoCircle } from "@/components/info-circle";

export function EquipmentCalculator() {
  const [formData, setFormData] = useState({
    equipmentCost: 100000,
    downPayment: 20000,
    interestRate: 5.5,
    term: 60, // months
    residualValue: 0,
    paymentFrequency: "monthly",
  });

  const [results, setResults] = useState<null | {
    paymentAmount: number;
    totalInterest: number;
    totalCost: number;
    effectiveRate: number;
    amortizationSchedule: Array<{
      period: number;
      payment: number;
      principal: number;
      interest: number;
      balance: number;
    }>;
  }>(null);

  const handleInputChange = (field: string, value: number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const calculatePayments = () => {
    const { equipmentCost, downPayment, interestRate, term, residualValue } =
      formData;
    const loanAmount = equipmentCost - downPayment;
    const monthlyRate = interestRate / 100 / 12;

    // Calculate payment using the formula for loans with residual value
    const paymentAmount =
      (loanAmount - residualValue / Math.pow(1 + monthlyRate, term)) *
      (monthlyRate / (1 - Math.pow(1 + monthlyRate, -term)));

    // Generate amortization schedule
    let balance = loanAmount;
    const amortizationSchedule = [];
    let totalInterest = 0;

    for (let period = 1; period <= term; period++) {
      const interestPayment = balance * monthlyRate;
      totalInterest += interestPayment;

      // For the last payment, adjust to include the residual value
      let principalPayment;
      if (period === term) {
        principalPayment = balance - residualValue;
      } else {
        principalPayment = paymentAmount - interestPayment;
      }

      balance -= principalPayment;

      amortizationSchedule.push({
        period,
        payment:
          period === term ? paymentAmount + residualValue : paymentAmount,
        principal: principalPayment,
        interest: interestPayment,
        balance: period === term ? 0 : balance,
      });
    }

    const totalCost = downPayment + paymentAmount * term;
    const effectiveRate = (totalInterest / loanAmount) * 100;

    setResults({
      paymentAmount,
      totalInterest,
      totalCost,
      effectiveRate,
      amortizationSchedule,
    });
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Equipment Financing Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Calculate monthly payments, total costs, and see your amortization
          schedule for equipment purchases
        </p>
      </div>

      <Card className="border-slate-200 shadow-md">
        <CardContent className="p-6 md:p-8">
          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="equipmentCost">Equipment Cost</Label>
                      <InfoCircle tooltip="The total purchase price of the equipment before any down payment." />
                    </div>
                    <span className="text-sm font-medium">
                      {formatCurrency(formData.equipmentCost)}
                    </span>
                  </div>
                  <Slider
                    id="equipmentCost"
                    min={1000}
                    max={1000000}
                    step={1000}
                    value={[formData.equipmentCost]}
                    onValueChange={(value) =>
                      handleInputChange("equipmentCost", value[0])
                    }
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>$1,000</span>
                    <span>$1,000,000</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="downPayment">Down Payment</Label>
                      <InfoCircle tooltip="The initial payment you'll make upfront." />
                    </div>
                    <span className="text-sm font-medium">
                      {formatCurrency(formData.downPayment)}
                    </span>
                  </div>
                  <Slider
                    id="downPayment"
                    min={0}
                    max={formData.equipmentCost * 0.5}
                    step={1000}
                    value={[formData.downPayment]}
                    onValueChange={(value) =>
                      handleInputChange("downPayment", value[0])
                    }
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>$0</span>
                    <span>{formatCurrency(formData.equipmentCost * 0.5)}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="residualValue">
                        Residual Value (Optional)
                      </Label>
                      <InfoCircle tooltip="The estimated value of the equipment at the end of the financing term. Used for leases or loans with balloon payments." />
                    </div>
                    <span className="text-sm font-medium">
                      {formatCurrency(formData.residualValue)}
                    </span>
                  </div>
                  <Slider
                    id="residualValue"
                    min={0}
                    max={formData.equipmentCost * 0.5}
                    step={1000}
                    value={[formData.residualValue]}
                    onValueChange={(value) =>
                      handleInputChange("residualValue", value[0])
                    }
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>$0</span>
                    <span>{formatCurrency(formData.equipmentCost * 0.5)}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="interestRate">Interest Rate (%)</Label>
                      <InfoCircle tooltip="The annual interest rate for the financing." />
                    </div>
                    <span className="text-sm font-medium">
                      {formData.interestRate.toFixed(2)}%
                    </span>
                  </div>
                  <Slider
                    id="interestRate"
                    min={1}
                    max={20}
                    step={0.25}
                    value={[formData.interestRate]}
                    onValueChange={(value) =>
                      handleInputChange("interestRate", value[0])
                    }
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>1%</span>
                    <span>20%</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="term">Term (Months)</Label>
                      <InfoCircle tooltip="The length of the financing term in months." />
                    </div>
                    <span className="text-sm font-medium">
                      {formData.term} months
                    </span>
                  </div>
                  <Slider
                    id="term"
                    min={12}
                    max={84}
                    step={12}
                    value={[formData.term]}
                    onValueChange={(value) =>
                      handleInputChange("term", value[0])
                    }
                  />
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>12 months</span>
                    <span>84 months</span>
                  </div>
                </div>

                <div className="pt-4">
                  <Button onClick={calculatePayments} className="w-full">
                    Calculate Financing
                  </Button>
                </div>
              </div>
            </div>

            {results && (
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-xl font-semibold mb-4">
                  Financing Results
                </h3>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-500">
                      Monthly Payment
                    </div>
                    <div className="text-2xl font-bold text-slate-900">
                      {formatCurrency(results.paymentAmount)}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-500">Total Interest</div>
                    <div className="text-2xl font-bold text-slate-900">
                      {formatCurrency(results.totalInterest)}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-500">Total Cost</div>
                    <div className="text-2xl font-bold text-slate-900">
                      {formatCurrency(results.totalCost)}
                    </div>
                  </div>

                  <div className="bg-slate-50 p-4 rounded-lg">
                    <div className="text-sm text-slate-500">Effective Rate</div>
                    <div className="text-2xl font-bold text-slate-900">
                      {results.effectiveRate.toFixed(2)}%
                    </div>
                  </div>
                </div>

                <Tabs defaultValue="summary" className="mt-6">
                  <TabsList>
                    <TabsTrigger value="summary">Summary</TabsTrigger>
                    <TabsTrigger value="schedule">
                      Amortization Schedule
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="summary" className="pt-4">
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <h4 className="font-medium mb-2">
                            Financing Details
                          </h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span className="text-slate-600">
                                Equipment Cost:
                              </span>
                              <span className="font-medium">
                                {formatCurrency(formData.equipmentCost)}
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-slate-600">
                                Down Payment:
                              </span>
                              <span className="font-medium">
                                {formatCurrency(formData.downPayment)}
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-slate-600">
                                Loan Amount:
                              </span>
                              <span className="font-medium">
                                {formatCurrency(
                                  formData.equipmentCost - formData.downPayment,
                                )}
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-slate-600">
                                Interest Rate:
                              </span>
                              <span className="font-medium">
                                {formData.interestRate}%
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-slate-600">Term:</span>
                              <span className="font-medium">
                                {formData.term} months
                              </span>
                            </li>
                            {formData.residualValue > 0 && (
                              <li className="flex justify-between">
                                <span className="text-slate-600">
                                  Residual Value:
                                </span>
                                <span className="font-medium">
                                  {formatCurrency(formData.residualValue)}
                                </span>
                              </li>
                            )}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-medium mb-2">Payment Summary</h4>
                          <ul className="space-y-2 text-sm">
                            <li className="flex justify-between">
                              <span className="text-slate-600">
                                Monthly Payment:
                              </span>
                              <span className="font-medium">
                                {formatCurrency(results.paymentAmount)}
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-slate-600">
                                Number of Payments:
                              </span>
                              <span className="font-medium">
                                {formData.term}
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-slate-600">
                                Total of Payments:
                              </span>
                              <span className="font-medium">
                                {formatCurrency(
                                  results.paymentAmount * formData.term,
                                )}
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-slate-600">
                                Total Interest:
                              </span>
                              <span className="font-medium">
                                {formatCurrency(results.totalInterest)}
                              </span>
                            </li>
                            <li className="flex justify-between">
                              <span className="text-slate-600">
                                Total Cost:
                              </span>
                              <span className="font-medium">
                                {formatCurrency(
                                  formData.downPayment +
                                    results.paymentAmount * formData.term,
                                )}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-100 text-sm text-blue-800">
                        <p className="font-medium mb-1">Financing Tip:</p>
                        <p>
                          Consider negotiating the interest rate or increasing
                          your down payment to reduce your monthly payments. A
                          shorter term will increase monthly payments but reduce
                          total interest paid.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="schedule" className="pt-4">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="bg-slate-100">
                            <th className="p-2 text-left">Payment</th>
                            <th className="p-2 text-right">Payment Amount</th>
                            <th className="p-2 text-right">Principal</th>
                            <th className="p-2 text-right">Interest</th>
                            <th className="p-2 text-right">
                              Remaining Balance
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {results.amortizationSchedule.map((row, index) => (
                            <tr
                              key={index}
                              className={
                                index % 2 === 0 ? "bg-white" : "bg-slate-50"
                              }
                            >
                              <td className="p-2">{row.period}</td>
                              <td className="p-2 text-right">
                                {formatCurrency(row.payment)}
                              </td>
                              <td className="p-2 text-right">
                                {formatCurrency(row.principal)}
                              </td>
                              <td className="p-2 text-right">
                                {formatCurrency(row.interest)}
                              </td>
                              <td className="p-2 text-right">
                                {formatCurrency(row.balance)}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="text-center text-sm text-slate-500 max-w-3xl mx-auto">
        <p className="font-medium">Disclaimer:</p>
        <p>
          This calculator provides estimates for informational purposes only and
          does not constitute financial advice. Actual financing terms may vary
          based on your credit history, the lender, and other factors. Please
          consult with a financial professional before making any financing
          decisions.
        </p>
      </div>
    </div>
  );
}

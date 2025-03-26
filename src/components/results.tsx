"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Calendar, Download, Mail, Phone } from "lucide-react";

interface ResultsProps {
  formData: any;
  prevStep: () => void;
}

export function Results({ formData, prevStep }: ResultsProps) {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);

  // Calculate savings based on form data
  const calculateSavings = () => {
    // These are simplified calculations for demonstration purposes
    // In a real implementation, these would be more complex and accurate

    // R&D Credit calculation
    let rdFactor = 0;
    switch (formData.manufacturingType) {
      case "Medical Devices":
      case "Electronics Manufacturing":
        rdFactor = 0.06;
        break;
      case "Machinery & Equipment":
      case "Metal Fabrication":
        rdFactor = 0.04;
        break;
      default:
        rdFactor = 0.03;
    }

    const activityMultiplier = Math.min(
      1 + formData.rdActivities.length * 0.1,
      1.5,
    );

    let revenueBase = 0;
    switch (formData.revenue) {
      case "<$5M":
        revenueBase = 3000000;
        break;
      case "$5-10M":
        revenueBase = 7500000;
        break;
      case "$10-25M":
        revenueBase = 17500000;
        break;
      case "$25-50M":
        revenueBase = 37500000;
        break;
      case "$50-100M":
        revenueBase = 75000000;
        break;
      case ">$100M":
        revenueBase = 150000000;
        break;
    }

    const rdCredit =
      revenueBase *
      rdFactor *
      activityMultiplier *
      (formData.rdActivities.length > 0 ? 1 : 0.1);

    // Equipment & Depreciation calculation
    let equipmentSavings = 0;
    if (formData.equipmentPurchases) {
      let equipmentBase = 0;
      switch (formData.equipmentInvestment) {
        case "<$100K":
          equipmentBase = 50000;
          break;
        case "$100K-$500K":
          equipmentBase = 300000;
          break;
        case "$500K-$1M":
          equipmentBase = 750000;
          break;
        case "$1M-$5M":
          equipmentBase = 3000000;
          break;
        case "$5M-$10M":
          equipmentBase = 7500000;
          break;
        case ">$10M":
          equipmentBase = 15000000;
          break;
      }
      equipmentSavings = equipmentBase * 0.15;
    }

    let facilitySavings = 0;
    if (formData.facilityExpansion) {
      let facilityBase = 0;
      switch (formData.facilityInvestment) {
        case "<$500K":
          facilityBase = 250000;
          break;
        case "$500K-$1M":
          facilityBase = 750000;
          break;
        case "$1M-$5M":
          facilityBase = 3000000;
          break;
        case "$5M-$10M":
          facilityBase = 7500000;
          break;
        case "$10M-$25M":
          facilityBase = 17500000;
          break;
        case ">$25M":
          facilityBase = 35000000;
          break;
      }
      facilitySavings = facilityBase * 0.08;
    }

    // Multi-state tax calculation
    let multiStateSavings = 0;
    if (formData.multiState) {
      let stateCount = 0;
      switch (formData.additionalStates) {
        case "1-3":
          stateCount = 2;
          break;
        case "4-10":
          stateCount = 7;
          break;
        case "11+":
          stateCount = 15;
          break;
      }

      const complexityFactor =
        formData.manufacturingType === "Medical Devices" ||
        formData.manufacturingType === "Electronics Manufacturing"
          ? 1.5
          : 1.0;

      multiStateSavings = revenueBase * 0.005 * stateCount * complexityFactor;
    }

    // Inventory & Cost Accounting calculation
    let inventoryBase = 0;
    switch (formData.inventoryValue) {
      case "<$500K":
        inventoryBase = 250000;
        break;
      case "$500K-$1M":
        inventoryBase = 750000;
        break;
      case "$1M-$5M":
        inventoryBase = 3000000;
        break;
      case "$5M-$10M":
        inventoryBase = 7500000;
        break;
      case "$10M-$25M":
        inventoryBase = 17500000;
        break;
      case ">$25M":
        inventoryBase = 35000000;
        break;
    }

    let inventoryMethodFactor = 0;
    switch (formData.inventoryMethod) {
      case "FIFO":
        inventoryMethodFactor = 0.01;
        break;
      case "LIFO":
        inventoryMethodFactor = 0.02;
        break;
      case "Weighted Average":
        inventoryMethodFactor = 0.015;
        break;
      case "Unknown":
        inventoryMethodFactor = 0.02;
        break;
    }

    let accountingMethodFactor = 0;
    switch (formData.costAccountingMethod) {
      case "Standard Costing":
        accountingMethodFactor = 0.01;
        break;
      case "Job Costing":
        accountingMethodFactor = 0.015;
        break;
      case "Activity-Based":
        accountingMethodFactor = 0.02;
        break;
      case "Process Costing":
        accountingMethodFactor = 0.015;
        break;
      case "None/Basic":
        accountingMethodFactor = 0.025;
        break;
    }

    const inventorySavings =
      inventoryBase * (inventoryMethodFactor + accountingMethodFactor);

    // Total savings
    const totalSavingsLow = Math.round(
      (rdCredit +
        equipmentSavings +
        facilitySavings +
        multiStateSavings +
        inventorySavings) *
        0.8,
    );
    const totalSavingsHigh = Math.round(
      (rdCredit +
        equipmentSavings +
        facilitySavings +
        multiStateSavings +
        inventorySavings) *
        1.2,
    );

    return {
      rdCredit: {
        low: Math.round(rdCredit * 0.8),
        high: Math.round(rdCredit * 1.2),
      },
      equipmentSavings: {
        low: Math.round((equipmentSavings + facilitySavings) * 0.8),
        high: Math.round((equipmentSavings + facilitySavings) * 1.2),
      },
      multiStateSavings: {
        low: Math.round(multiStateSavings * 0.8),
        high: Math.round(multiStateSavings * 1.2),
      },
      inventorySavings: {
        low: Math.round(inventorySavings * 0.8),
        high: Math.round(inventorySavings * 1.2),
      },
      totalSavings: {
        low: totalSavingsLow,
        high: totalSavingsHigh,
      },
    };
  };

  const savings = calculateSavings();

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const handleEmailResults = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the results to the user's email
    setEmailSent(true);
  };

  const confidenceScore = () => {
    // Calculate a confidence score based on the completeness of the form data
    let score = 0;

    // Basic company info
    if (
      formData.revenue &&
      formData.employees &&
      formData.manufacturingType &&
      formData.primaryState
    ) {
      score += 25;
    }

    // R&D activities
    if (formData.rdActivities.length > 0) {
      score += Math.min(formData.rdActivities.length * 5, 25);
    }

    // Equipment & facilities
    if (formData.equipmentPurchases && formData.equipmentInvestment) {
      score += 15;
    }

    if (formData.facilityExpansion && formData.facilityInvestment) {
      score += 15;
    }

    // Inventory & accounting
    if (
      formData.inventoryMethod &&
      formData.inventoryValue &&
      formData.costAccountingMethod
    ) {
      score += 20;
    }

    return score;
  };

  const confidence = confidenceScore();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">
          Your Tax Savings Estimate
        </h2>
        <p className="text-slate-600 mb-6">
          Based on the information you provided, we've estimated your potential
          tax savings.
        </p>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
        <div className="text-center space-y-2">
          <h3 className="text-lg font-medium text-slate-700">
            Estimated Annual Tax Savings
          </h3>
          <div className="text-3xl md:text-4xl font-bold text-blue-700">
            {formatCurrency(savings.totalSavings.low)} -{" "}
            {formatCurrency(savings.totalSavings.high)}
          </div>
          <p className="text-sm text-slate-600">
            Based on your inputs, we estimate these potential annual tax savings
          </p>
        </div>

        <div className="mt-4 w-full bg-slate-200 rounded-full h-2.5">
          <div
            className="bg-blue-600 h-2.5 rounded-full"
            style={{ width: `${confidence}%` }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-slate-500 mt-1">
          <span>Estimate Confidence: {confidence}%</span>
          <span>100%</span>
        </div>
      </div>

      <Tabs defaultValue="breakdown" className="w-full">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="breakdown">Savings Breakdown</TabsTrigger>
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>
        <TabsContent value="breakdown" className="space-y-4 pt-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">R&D Tax Credits</CardTitle>
              <CardDescription>
                Based on your manufacturing activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">
                {formatCurrency(savings.rdCredit.low)} -{" "}
                {formatCurrency(savings.rdCredit.high)}
              </div>
              {formData.rdActivities.length > 0 ? (
                <>
                  <p className="text-sm text-slate-600 mt-2">
                    Your qualifying activities include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 space-y-1">
                    {formData.rdActivities.map(
                      (activity: string, index: number) => (
                        <li key={index} className="text-sm">
                          {activity}
                        </li>
                      ),
                    )}
                  </ul>
                </>
              ) : (
                <p className="text-sm text-slate-600 mt-2">
                  You may have additional R&D activities that could qualify for
                  tax credits.
                </p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                Equipment & Depreciation
              </CardTitle>
              <CardDescription>
                Based on your capital investments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">
                {formatCurrency(savings.equipmentSavings.low)} -{" "}
                {formatCurrency(savings.equipmentSavings.high)}
              </div>
              <p className="text-sm text-slate-600 mt-2">
                {formData.equipmentPurchases || formData.facilityExpansion ? (
                  <>
                    Your recent investments in{" "}
                    {formData.equipmentPurchases && "equipment"}
                    {formData.equipmentPurchases &&
                      formData.facilityExpansion &&
                      " and "}
                    {formData.facilityExpansion && "facilities"} may qualify for
                    accelerated depreciation and other tax benefits.
                  </>
                ) : (
                  "You haven't indicated any recent equipment purchases or facility expansions."
                )}
              </p>
            </CardContent>
          </Card>

          {formData.multiState && (
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">
                  Multi-State Tax Optimization
                </CardTitle>
                <CardDescription>
                  Based on your operations across multiple states
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-700">
                  {formatCurrency(savings.multiStateSavings.low)} -{" "}
                  {formatCurrency(savings.multiStateSavings.high)}
                </div>
                <p className="text-sm text-slate-600 mt-2">
                  Operating in multiple states creates opportunities for tax
                  planning and optimization.
                </p>
              </CardContent>
            </Card>
          )}

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">
                Inventory & Cost Accounting
              </CardTitle>
              <CardDescription>
                Based on your accounting methods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-700">
                {formatCurrency(savings.inventorySavings.low)} -{" "}
                {formatCurrency(savings.inventorySavings.high)}
              </div>
              <p className="text-sm text-slate-600 mt-2">
                Your current {formData.inventoryMethod} inventory method and{" "}
                {formData.costAccountingMethod} cost accounting approach may
                have optimization opportunities.
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="recommendations" className="space-y-4 pt-4">
          <Card>
            <CardHeader>
              <CardTitle>Recommended Next Steps</CardTitle>
              <CardDescription>
                Based on your estimated savings of{" "}
                {formatCurrency(savings.totalSavings.low)} -{" "}
                {formatCurrency(savings.totalSavings.high)}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-medium">1. Schedule a Custom Tax Review</h4>
                <p className="text-sm text-slate-600">
                  Our manufacturing tax specialists can provide a more detailed
                  analysis of your specific situation and identify additional
                  savings opportunities.
                </p>
                <Button className="mt-2" size="sm">
                  Schedule a Consultation{" "}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">2. Document Your R&D Activities</h4>
                <p className="text-sm text-slate-600">
                  Start documenting your qualifying R&D activities to maximize
                  your potential tax credits. We can provide templates and
                  guidance.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-medium">
                  3. Review Your Depreciation Methods
                </h4>
                <p className="text-sm text-slate-600">
                  Consider a cost segregation study to accelerate depreciation
                  on your recent capital investments.
                </p>
              </div>

              {formData.multiState && (
                <div className="space-y-2">
                  <h4 className="font-medium">
                    4. Optimize Your Multi-State Tax Strategy
                  </h4>
                  <p className="text-sm text-slate-600">
                    Review your nexus, apportionment, and filing methodologies
                    across all states where you operate.
                  </p>
                </div>
              )}

              <div className="space-y-2">
                <h4 className="font-medium">
                  {formData.multiState ? "5" : "4"}. Evaluate Your Inventory
                  Method
                </h4>
                <p className="text-sm text-slate-600">
                  Consider whether your current inventory method (
                  {formData.inventoryMethod}) is optimal for your business and
                  tax situation.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button className="flex-1">
              <Mail className="mr-2 h-4 w-4" /> Email My Results
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Email Your Tax Savings Estimate</DialogTitle>
              <DialogDescription>
                We'll send your estimated tax savings and recommendations to
                your email.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleEmailResults}>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="text-sm text-slate-500">
                  By submitting this form, you agree to receive your tax savings
                  estimate via email. We respect your privacy and will not share
                  your information.
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={emailSent}>
                  {emailSent ? "Email Sent!" : "Send Results"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        <Button variant="outline" className="flex-1">
          <Download className="mr-2 h-4 w-4" /> Download Report
        </Button>
      </div>

      <div className="bg-slate-50 rounded-lg p-6 border">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-lg font-medium">
              Ready to Maximize Your Tax Savings?
            </h3>
            <p className="text-sm text-slate-600">
              Schedule a consultation with our manufacturing tax specialists to
              get a detailed analysis.
            </p>
          </div>
          <div className="flex gap-4 md:ml-auto">
            <Button variant="outline" className="flex items-center">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </Button>
            <Button className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" /> Schedule Consultation
            </Button>
          </div>
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <Button type="button" variant="outline" onClick={prevStep}>
          Back to Qualifying Activities
        </Button>
        <Button
          type="button"
          variant="default"
          onClick={() => window.location.reload()}
        >
          Start New Calculation
        </Button>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Steps } from "@/components/steps";
import { CompanyBasics } from "@/components/company-basics";
import { QualifyingActivities } from "@/components/qualifying-activities";
import { Results } from "@/components/results";
import { Card, CardContent } from "@/components/ui/card";

export function Calculator() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Company Basics
    revenue: "",
    employees: "",
    manufacturingType: "",
    otherManufacturingType: "",
    primaryState: "",
    multiState: false,
    additionalStates: "",

    // Qualifying Activities
    rdActivities: [] as string[],
    equipmentPurchases: false,
    equipmentInvestment: "",
    facilityExpansion: false,
    facilityInvestment: "",
    inventoryMethod: "",
    inventoryValue: "",
    costAccountingMethod: "",
  });

  const updateFormData = (data: Partial<typeof formData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
    window.scrollTo(0, 0);
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
          Manufacturing Tax Savings Calculator
        </h1>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">
          Discover potential tax savings for your manufacturing operation in
          just 2 minutes
        </p>
        <p className="text-sm text-slate-500">
          Join the 500+ manufacturers who have used this calculator to identify
          savings opportunities
        </p>
      </div>

      <Steps currentStep={currentStep} />

      <Card className="border-slate-200 shadow-md">
        <CardContent className="p-6 md:p-8">
          {currentStep === 1 && (
            <CompanyBasics
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
            />
          )}
          {currentStep === 2 && (
            <QualifyingActivities
              formData={formData}
              updateFormData={updateFormData}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {currentStep === 3 && (
            <Results formData={formData} prevStep={prevStep} />
          )}
        </CardContent>
      </Card>

      <div className="text-center text-sm text-slate-500 max-w-3xl mx-auto">
        <p className="font-medium">Disclaimer:</p>
        <p>
          The estimates provided by this calculator are for informational
          purposes only and do not constitute tax advice. Actual tax savings may
          vary based on your specific circumstances. Please consult with a
          qualified tax professional for personalized advice regarding your tax
          situation.
        </p>
      </div>
    </div>
  );
}

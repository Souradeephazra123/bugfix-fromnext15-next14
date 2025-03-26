"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InfoCircle } from "@/components/info-circle";

interface QualifyingActivitiesProps {
  formData: any;
  updateFormData: (data: any) => void;
  nextStep: () => void;
  prevStep: () => void;
}

export function QualifyingActivities({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}: QualifyingActivitiesProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (formData.equipmentPurchases && !formData.equipmentInvestment) {
      newErrors.equipmentInvestment =
        "Please select your equipment investment amount";
    }

    if (formData.facilityExpansion && !formData.facilityInvestment) {
      newErrors.facilityInvestment =
        "Please select your facility investment amount";
    }

    if (!formData.inventoryMethod) {
      newErrors.inventoryMethod = "Please select your inventory method";
    }

    if (!formData.inventoryValue) {
      newErrors.inventoryValue = "Please select your inventory value";
    }

    if (!formData.costAccountingMethod) {
      newErrors.costAccountingMethod =
        "Please select your cost accounting method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      nextStep();
    }
  };

  const rdActivities = [
    { id: "new-products", label: "Developing new products" },
    { id: "improving-processes", label: "Improving manufacturing processes" },
    { id: "prototypes", label: "Creating prototypes or samples" },
    { id: "quality-testing", label: "Quality testing and validation" },
    { id: "custom-tools", label: "Custom tool or fixture development" },
    { id: "automation", label: "Process automation development" },
    { id: "new-materials", label: "Experimenting with new materials" },
  ];

  const handleRdActivityChange = (checked: boolean, activity: string) => {
    if (checked) {
      updateFormData({ rdActivities: [...formData.rdActivities, activity] });
    } else {
      updateFormData({
        rdActivities: formData.rdActivities.filter(
          (a: string) => a !== activity,
        ),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Qualifying Activities</h2>
        <p className="text-slate-600 mb-6">
          Tell us about your manufacturing activities to help us identify
          potential tax savings opportunities.
        </p>
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">
              R&D and Process Improvement Activities
            </h3>
            <InfoCircle tooltip="These activities may qualify for R&D tax credits at both federal and state levels." />
          </div>
          <p className="text-sm text-slate-600">
            Select all that apply to your manufacturing operation:
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {rdActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-2">
                <Checkbox
                  id={activity.id}
                  checked={formData.rdActivities.includes(activity.label)}
                  onCheckedChange={(checked) =>
                    handleRdActivityChange(checked as boolean, activity.label)
                  }
                />
                <Label htmlFor={activity.id} className="text-sm leading-tight">
                  {activity.label}
                </Label>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">Equipment & Facilities</h3>
            <InfoCircle tooltip="Capital investments often qualify for accelerated depreciation and other tax benefits." />
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label>
                  Recent/planned equipment purchases in the last 3 years?
                </Label>
              </div>
              <RadioGroup
                value={formData.equipmentPurchases ? "yes" : "no"}
                onValueChange={(value) =>
                  updateFormData({
                    equipmentPurchases: value === "yes",
                    equipmentInvestment:
                      value === "no" ? "" : formData.equipmentInvestment,
                  })
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="equipment-yes" />
                  <Label htmlFor="equipment-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="equipment-no" />
                  <Label htmlFor="equipment-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.equipmentPurchases && (
              <div className="space-y-2 pl-6">
                <Label htmlFor="equipmentInvestment">
                  Approximate investment amount
                </Label>
                <Select
                  value={formData.equipmentInvestment}
                  onValueChange={(value) =>
                    updateFormData({ equipmentInvestment: value })
                  }
                >
                  <SelectTrigger
                    id="equipmentInvestment"
                    className={
                      errors.equipmentInvestment ? "border-red-500" : ""
                    }
                  >
                    <SelectValue placeholder="Select investment amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<$100K">Less than $100,000</SelectItem>
                    <SelectItem value="$100K-$500K">
                      $100,000 - $500,000
                    </SelectItem>
                    <SelectItem value="$500K-$1M">
                      $500,000 - $1 million
                    </SelectItem>
                    <SelectItem value="$1M-$5M">
                      $1 million - $5 million
                    </SelectItem>
                    <SelectItem value="$5M-$10M">
                      $5 million - $10 million
                    </SelectItem>
                    <SelectItem value=">$10M">More than $10 million</SelectItem>
                  </SelectContent>
                </Select>
                {errors.equipmentInvestment && (
                  <p className="text-sm text-red-500">
                    {errors.equipmentInvestment}
                  </p>
                )}
              </div>
            )}

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label>Facility construction/expansion in last 5 years?</Label>
              </div>
              <RadioGroup
                value={formData.facilityExpansion ? "yes" : "no"}
                onValueChange={(value) =>
                  updateFormData({
                    facilityExpansion: value === "yes",
                    facilityInvestment:
                      value === "no" ? "" : formData.facilityInvestment,
                  })
                }
                className="flex space-x-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="facility-yes" />
                  <Label htmlFor="facility-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="facility-no" />
                  <Label htmlFor="facility-no">No</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.facilityExpansion && (
              <div className="space-y-2 pl-6">
                <Label htmlFor="facilityInvestment">
                  Approximate investment amount
                </Label>
                <Select
                  value={formData.facilityInvestment}
                  onValueChange={(value) =>
                    updateFormData({ facilityInvestment: value })
                  }
                >
                  <SelectTrigger
                    id="facilityInvestment"
                    className={
                      errors.facilityInvestment ? "border-red-500" : ""
                    }
                  >
                    <SelectValue placeholder="Select investment amount" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<$500K">Less than $500,000</SelectItem>
                    <SelectItem value="$500K-$1M">
                      $500,000 - $1 million
                    </SelectItem>
                    <SelectItem value="$1M-$5M">
                      $1 million - $5 million
                    </SelectItem>
                    <SelectItem value="$5M-$10M">
                      $5 million - $10 million
                    </SelectItem>
                    <SelectItem value="$10M-$25M">
                      $10 million - $25 million
                    </SelectItem>
                    <SelectItem value=">$25M">More than $25 million</SelectItem>
                  </SelectContent>
                </Select>
                {errors.facilityInvestment && (
                  <p className="text-sm text-red-500">
                    {errors.facilityInvestment}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-medium">Inventory & Cost Accounting</h3>
            <InfoCircle tooltip="Your inventory and cost accounting methods can significantly impact your tax liability." />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="inventoryMethod">
                  Current inventory method
                </Label>
                <InfoCircle tooltip="Different inventory methods can have different tax implications." />
              </div>
              <Select
                value={formData.inventoryMethod}
                onValueChange={(value) =>
                  updateFormData({ inventoryMethod: value })
                }
              >
                <SelectTrigger
                  id="inventoryMethod"
                  className={errors.inventoryMethod ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select inventory method" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="FIFO">
                    FIFO (First In, First Out)
                  </SelectItem>
                  <SelectItem value="LIFO">
                    LIFO (Last In, First Out)
                  </SelectItem>
                  <SelectItem value="Weighted Average">
                    Weighted Average
                  </SelectItem>
                  <SelectItem value="Unknown">Unknown</SelectItem>
                </SelectContent>
              </Select>
              {errors.inventoryMethod && (
                <p className="text-sm text-red-500">{errors.inventoryMethod}</p>
              )}
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Label htmlFor="inventoryValue">
                  Approximate annual inventory value
                </Label>
                <InfoCircle tooltip="The value of your inventory affects potential tax savings." />
              </div>
              <Select
                value={formData.inventoryValue}
                onValueChange={(value) =>
                  updateFormData({ inventoryValue: value })
                }
              >
                <SelectTrigger
                  id="inventoryValue"
                  className={errors.inventoryValue ? "border-red-500" : ""}
                >
                  <SelectValue placeholder="Select inventory value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="<$500K">Less than $500,000</SelectItem>
                  <SelectItem value="$500K-$1M">
                    $500,000 - $1 million
                  </SelectItem>
                  <SelectItem value="$1M-$5M">
                    $1 million - $5 million
                  </SelectItem>
                  <SelectItem value="$5M-$10M">
                    $5 million - $10 million
                  </SelectItem>
                  <SelectItem value="$10M-$25M">
                    $10 million - $25 million
                  </SelectItem>
                  <SelectItem value=">$25M">More than $25 million</SelectItem>
                </SelectContent>
              </Select>
              {errors.inventoryValue && (
                <p className="text-sm text-red-500">{errors.inventoryValue}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="costAccountingMethod">
                Current cost accounting method
              </Label>
              <InfoCircle tooltip="Your cost accounting method can impact tax deductions and credits." />
            </div>
            <Select
              value={formData.costAccountingMethod}
              onValueChange={(value) =>
                updateFormData({ costAccountingMethod: value })
              }
            >
              <SelectTrigger
                id="costAccountingMethod"
                className={errors.costAccountingMethod ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select cost accounting method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Standard Costing">
                  Standard Costing
                </SelectItem>
                <SelectItem value="Job Costing">Job Costing</SelectItem>
                <SelectItem value="Activity-Based">
                  Activity-Based Costing
                </SelectItem>
                <SelectItem value="Process Costing">Process Costing</SelectItem>
                <SelectItem value="None/Basic">None/Basic</SelectItem>
              </SelectContent>
            </Select>
            {errors.costAccountingMethod && (
              <p className="text-sm text-red-500">
                {errors.costAccountingMethod}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="pt-4 flex justify-between">
        <Button type="button" variant="outline" onClick={prevStep}>
          Back to Company Basics
        </Button>
        <Button type="submit">Calculate My Tax Savings</Button>
      </div>
    </form>
  );
}

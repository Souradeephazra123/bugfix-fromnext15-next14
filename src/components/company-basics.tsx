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
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InfoCircle } from "@/components/info-circle";

interface CompanyBasicsProps {
  formData: any;
  updateFormData: (data: any) => void;
  nextStep: () => void;
}

export function CompanyBasics({
  formData,
  updateFormData,
  nextStep,
}: CompanyBasicsProps) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.revenue)
      newErrors.revenue = "Please select your annual revenue";
    if (!formData.employees)
      newErrors.employees = "Please select your number of employees";
    if (!formData.manufacturingType)
      newErrors.manufacturingType = "Please select your manufacturing type";
    if (
      formData.manufacturingType === "Other" &&
      !formData.otherManufacturingType
    ) {
      newErrors.otherManufacturingType =
        "Please specify your manufacturing type";
    }
    if (!formData.primaryState)
      newErrors.primaryState = "Please select your primary state";
    if (formData.multiState && !formData.additionalStates) {
      newErrors.additionalStates =
        "Please select the number of additional states";
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

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold mb-4">Company Information</h2>
        <p className="text-slate-600 mb-6">
          Tell us about your manufacturing business to help us estimate your
          potential tax savings.
        </p>
      </div>

      <div className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="revenue">Annual Revenue</Label>
              <InfoCircle tooltip="Your company's approximate annual revenue helps us estimate potential tax credits and deductions." />
            </div>
            <Select
              value={formData.revenue}
              onValueChange={(value) => updateFormData({ revenue: value })}
            >
              <SelectTrigger
                id="revenue"
                className={errors.revenue ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select annual revenue" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<$5M">Less than $5 million</SelectItem>
                <SelectItem value="$5-10M">$5 - $10 million</SelectItem>
                <SelectItem value="$10-25M">$10 - $25 million</SelectItem>
                <SelectItem value="$25-50M">$25 - $50 million</SelectItem>
                <SelectItem value="$50-100M">$50 - $100 million</SelectItem>
                <SelectItem value=">$100M">More than $100 million</SelectItem>
              </SelectContent>
            </Select>
            {errors.revenue && (
              <p className="text-sm text-red-500">{errors.revenue}</p>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="employees">Number of Employees</Label>
              <InfoCircle tooltip="Employee count can impact various tax incentives and credits." />
            </div>
            <Select
              value={formData.employees}
              onValueChange={(value) => updateFormData({ employees: value })}
            >
              <SelectTrigger
                id="employees"
                className={errors.employees ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select employee count" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="<25">Less than 25</SelectItem>
                <SelectItem value="25-50">25 - 50</SelectItem>
                <SelectItem value="51-100">51 - 100</SelectItem>
                <SelectItem value="101-250">101 - 250</SelectItem>
                <SelectItem value="251-500">251 - 500</SelectItem>
                <SelectItem value=">500">More than 500</SelectItem>
              </SelectContent>
            </Select>
            {errors.employees && (
              <p className="text-sm text-red-500">{errors.employees}</p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="manufacturingType">Manufacturing Type</Label>
            <InfoCircle tooltip="Different manufacturing sectors qualify for different tax incentives." />
          </div>
          <Select
            value={formData.manufacturingType}
            onValueChange={(value) =>
              updateFormData({ manufacturingType: value })
            }
          >
            <SelectTrigger
              id="manufacturingType"
              className={errors.manufacturingType ? "border-red-500" : ""}
            >
              <SelectValue placeholder="Select manufacturing type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Metal Fabrication">
                Metal Fabrication
              </SelectItem>
              <SelectItem value="Plastics & Rubber">
                Plastics & Rubber
              </SelectItem>
              <SelectItem value="Food & Beverage">Food & Beverage</SelectItem>
              <SelectItem value="Medical Devices">Medical Devices</SelectItem>
              <SelectItem value="Electronics Manufacturing">
                Electronics Manufacturing
              </SelectItem>
              <SelectItem value="Printing & Packaging">
                Printing & Packaging
              </SelectItem>
              <SelectItem value="Machinery & Equipment">
                Machinery & Equipment
              </SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>
          {errors.manufacturingType && (
            <p className="text-sm text-red-500">{errors.manufacturingType}</p>
          )}
        </div>

        {formData.manufacturingType === "Other" && (
          <div className="space-y-2">
            <Label htmlFor="otherManufacturingType">Please Specify</Label>
            <Input
              id="otherManufacturingType"
              value={formData.otherManufacturingType}
              onChange={(e) =>
                updateFormData({ otherManufacturingType: e.target.value })
              }
              className={errors.otherManufacturingType ? "border-red-500" : ""}
            />
            {errors.otherManufacturingType && (
              <p className="text-sm text-red-500">
                {errors.otherManufacturingType}
              </p>
            )}
          </div>
        )}

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label htmlFor="primaryState">Primary Manufacturing State</Label>
            <InfoCircle tooltip="State tax incentives vary significantly across the country." />
          </div>
          <Select
            value={formData.primaryState}
            onValueChange={(value) => updateFormData({ primaryState: value })}
          >
            <SelectTrigger
              id="primaryState"
              className={errors.primaryState ? "border-red-500" : ""}
            >
              <SelectValue placeholder="Select primary state" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.primaryState && (
            <p className="text-sm text-red-500">{errors.primaryState}</p>
          )}
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Label>Multi-state Operations?</Label>
            <InfoCircle tooltip="Operating in multiple states can create tax planning opportunities." />
          </div>
          <RadioGroup
            value={formData.multiState ? "yes" : "no"}
            onValueChange={(value) =>
              updateFormData({ multiState: value === "yes" })
            }
            className="flex space-x-4"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yes" id="multi-state-yes" />
              <Label htmlFor="multi-state-yes">Yes</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="no" id="multi-state-no" />
              <Label htmlFor="multi-state-no">No</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.multiState && (
          <div className="space-y-2">
            <Label htmlFor="additionalStates">
              Number of Additional States
            </Label>
            <Select
              value={formData.additionalStates}
              onValueChange={(value) =>
                updateFormData({ additionalStates: value })
              }
            >
              <SelectTrigger
                id="additionalStates"
                className={errors.additionalStates ? "border-red-500" : ""}
              >
                <SelectValue placeholder="Select number of additional states" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1-3">1 - 3</SelectItem>
                <SelectItem value="4-10">4 - 10</SelectItem>
                <SelectItem value="11+">11 or more</SelectItem>
              </SelectContent>
            </Select>
            {errors.additionalStates && (
              <p className="text-sm text-red-500">{errors.additionalStates}</p>
            )}
          </div>
        )}
      </div>

      <div className="pt-4 flex justify-end">
        <Button type="submit" size="lg">
          Continue to Qualifying Activities
        </Button>
      </div>
    </form>
  );
}

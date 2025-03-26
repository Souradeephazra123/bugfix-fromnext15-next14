"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

interface FormStep {
  title: string;
  description: string;
}

const steps: FormStep[] = [
  {
    title: "Project Overview",
    description:
      "Tell us about your manufacturing project or process improvement initiative.",
  },
  {
    title: "Technical Uncertainty",
    description:
      "Identify technical challenges and uncertainties in your project.",
  },
  {
    title: "Process of Experimentation",
    description: "Describe your approach to resolving technical uncertainties.",
  },
  {
    title: "Resources & Documentation",
    description: "Detail the resources involved and available documentation.",
  },
  {
    title: "Results & Outcomes",
    description: "Share the outcomes and potential business impact.",
  },
];

export function RDQualificationAssessment() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    projectName: "",
    projectDescription: "",
    technicalChallenges: [] as string[],
    experimentationMethods: [] as string[],
    resources: {
      internal: false,
      external: false,
      documentation: false,
    },
    outcomes: {
      successful: "",
      impact: "",
    },
  });

  const progress = ((currentStep + 1) / steps.length) * 100;

  const commonChallenges = [
    "Process efficiency improvement",
    "Material performance optimization",
    "Quality control enhancement",
    "Automation implementation",
    "Environmental compliance",
    "Cost reduction through innovation",
  ];

  const experimentationMethods = [
    "Systematic trial and error",
    "Modeling and simulation",
    "Prototype development",
    "Testing and validation",
    "Data analysis and evaluation",
    "Design iterations",
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((current) => current + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((current) => current - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="projectName">Project Name</Label>
              <Input
                id="projectName"
                placeholder="Enter project name"
                value={formData.projectName}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    projectName: e.target.value,
                  })
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="projectDescription">Project Description</Label>
              <Textarea
                id="projectDescription"
                placeholder="Describe your manufacturing project or process improvement initiative"
                value={formData.projectDescription}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    projectDescription: e.target.value,
                  })
                }
                className="h-32"
              />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Select the technical challenges you encountered:
            </p>
            <div className="space-y-2">
              {commonChallenges.map((challenge) => (
                <div key={challenge} className="flex items-center space-x-2">
                  <Checkbox
                    id={challenge}
                    checked={formData.technicalChallenges.includes(challenge)}
                    onCheckedChange={(checked) => {
                      setFormData({
                        ...formData,
                        technicalChallenges: checked
                          ? [...formData.technicalChallenges, challenge]
                          : formData.technicalChallenges.filter(
                              (c) => c !== challenge,
                            ),
                      });
                    }}
                  />
                  <Label htmlFor={challenge}>{challenge}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Select the methods used to resolve technical uncertainties:
            </p>
            <div className="space-y-2">
              {experimentationMethods.map((method) => (
                <div key={method} className="flex items-center space-x-2">
                  <Checkbox
                    id={method}
                    checked={formData.experimentationMethods.includes(method)}
                    onCheckedChange={(checked) => {
                      setFormData({
                        ...formData,
                        experimentationMethods: checked
                          ? [...formData.experimentationMethods, method]
                          : formData.experimentationMethods.filter(
                              (m) => m !== method,
                            ),
                      });
                    }}
                  />
                  <Label htmlFor={method}>{method}</Label>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-600 mb-4">
              Indicate available resources and documentation:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="internal"
                  checked={formData.resources.internal}
                  onCheckedChange={(checked) => {
                    setFormData({
                      ...formData,
                      resources: {
                        ...formData.resources,
                        internal: checked as boolean,
                      },
                    });
                  }}
                />
                <Label htmlFor="internal">
                  Internal technical staff involved
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="external"
                  checked={formData.resources.external}
                  onCheckedChange={(checked) => {
                    setFormData({
                      ...formData,
                      resources: {
                        ...formData.resources,
                        external: checked as boolean,
                      },
                    });
                  }}
                />
                <Label htmlFor="external">
                  External consultants or contractors
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="documentation"
                  checked={formData.resources.documentation}
                  onCheckedChange={(checked) => {
                    setFormData({
                      ...formData,
                      resources: {
                        ...formData.resources,
                        documentation: checked as boolean,
                      },
                    });
                  }}
                />
                <Label htmlFor="documentation">
                  Project documentation available
                </Label>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Project Outcome</Label>
              <RadioGroup
                value={formData.outcomes.successful}
                onValueChange={(value) =>
                  setFormData({
                    ...formData,
                    outcomes: {
                      ...formData.outcomes,
                      successful: value,
                    },
                  })
                }
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="successful" id="successful" />
                  <Label htmlFor="successful">Successfully implemented</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="partial" id="partial" />
                  <Label htmlFor="partial">Partially successful</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="ongoing" id="ongoing" />
                  <Label htmlFor="ongoing">Still in progress</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="abandoned" id="abandoned" />
                  <Label htmlFor="abandoned">Abandoned or unsuccessful</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <Label htmlFor="impact">Business Impact</Label>
              <Textarea
                id="impact"
                placeholder="Describe the actual or potential impact on your business"
                value={formData.outcomes.impact}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    outcomes: {
                      ...formData.outcomes,
                      impact: e.target.value,
                    },
                  })
                }
                className="h-32"
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <h3 className="text-lg font-semibold">{steps[currentStep].title}</h3>
        <p className="text-sm text-gray-600">
          {steps[currentStep].description}
        </p>
      </div>

      <Progress value={progress} className="h-2" />

      <div className="min-h-[300px]">{renderStep()}</div>

      <div className="flex justify-between pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className="w-[100px]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>

        {currentStep === steps.length - 1 ? (
          <Button
            type="submit"
            className="w-[100px] bg-brand-gold hover:bg-brand-dark"
          >
            <Check className="mr-2 h-4 w-4" />
            Submit
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handleNext}
            className="w-[100px] bg-brand-gold hover:bg-brand-dark"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
    </form>
  );
}

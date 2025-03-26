"use client";

import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import {
  ArrowRight,
  ArrowLeft,
  Calculator,
  FileText,
  Download,
  Mail,
  Building,
  Lightbulb,
  Beaker,
  TrendingUp,
} from "lucide-react";
import { SavingsResults } from "./savings-results";
import { calculateTaxSavings } from "@/lib/tax-calculator";
import { states } from "@/lib/states";

// Define the form data structure
type FormData = {
  // Business Information
  annualRevenue: number;
  taxableIncome: number;
  employeeCount: number;
  state: string;
  industryType: string;

  // R&D Information
  hasRnD: boolean;
  rndExpenses: number;
  rndWages: number;
  rndSupplies: number;
  rndContractResearch: number;

  // Section 179 & Depreciation
  equipmentPurchases: number;
  usedForBusiness: number;
  qualifyingPropertyCost: number;

  // Cost Segregation
  ownBuilding: boolean;
  buildingValue: number;
  buildingAge: number;

  // Energy Efficiency
  energyEfficiencyUpgrades: boolean;
  energyUpgradeCost: number;

  // WOTC
  newHires: number;
  targetGroupHires: number;
};

export default function TaxSavingsCalculator() {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(16.67);
  const [results, setResults] = useState<any>(null);
  const [showResults, setShowResults] = useState(false);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const [email, setEmail] = useState("");

  const form = useForm<FormData>({
    defaultValues: {
      annualRevenue: 5000000,
      taxableIncome: 1000000,
      employeeCount: 50,
      state: "NY",
      industryType: "general",

      hasRnD: false,
      rndExpenses: 0,
      rndWages: 0,
      rndSupplies: 0,
      rndContractResearch: 0,

      equipmentPurchases: 0,
      usedForBusiness: 100,
      qualifyingPropertyCost: 0,

      ownBuilding: false,
      buildingValue: 0,
      buildingAge: 0,

      energyEfficiencyUpgrades: false,
      energyUpgradeCost: 0,

      newHires: 0,
      targetGroupHires: 0,
    },
  });

  const watchHasRnD = form.watch("hasRnD");
  const watchOwnBuilding = form.watch("ownBuilding");
  const watchEnergyEfficiency = form.watch("energyEfficiencyUpgrades");

  const nextStep = () => {
    if (step < 6) {
      setStep(step + 1);
      setProgress((step + 1) * 16.67);
    } else {
      // Calculate results
      const data = form.getValues();
      const calculatedResults = calculateTaxSavings(data);
      setResults(calculatedResults);
      setShowResults(true);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
      setProgress((step - 1) * 16.67);
    }
  };

  const handleEmailSubmit = () => {
    // In a real implementation, this would send the email to a CRM or email service
    console.log("Email captured:", email);
    setLeadCaptured(true);
  };

  const downloadReport = () => {
    // In a real implementation, this would generate a PDF report
    alert(
      "In a production environment, this would generate a PDF report with your tax savings details."
    );
  };

  return (
    <FormProvider {...form}>
      <div className="w-full max-w-4xl mx-auto">
        {!showResults ? (
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <Calculator className="mr-2 h-6 w-6" />
                Manufacturing Tax Savings Calculator
              </CardTitle>
              <CardDescription>
                Estimate your potential tax savings across multiple categories
              </CardDescription>
              <Progress value={progress} className="h-2 mt-4" />
            </CardHeader>

            <CardContent>
              <Form {...form}>
                {step === 1 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">
                      Business Information
                    </h3>
                    <p className="text-sm text-gray-500">
                      Tell us about your manufacturing business to help us
                      calculate potential tax savings.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="annualRevenue"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Annual Revenue ($)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                              />
                            </FormControl>
                            <FormDescription>
                              Your company's annual gross revenue
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="taxableIncome"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Taxable Income ($)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                              />
                            </FormControl>
                            <FormDescription>
                              Your estimated taxable income
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="employeeCount"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Number of Employees</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>State</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select state" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                {states.map((state) => (
                                  <SelectItem
                                    key={state.value}
                                    value={state.value}
                                  >
                                    {state.label}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                            <FormDescription>
                              State-specific incentives will be calculated
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="industryType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Manufacturing Type</FormLabel>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="general">
                                  General Manufacturing
                                </SelectItem>
                                <SelectItem value="automotive">
                                  Automotive
                                </SelectItem>
                                <SelectItem value="aerospace">
                                  Aerospace
                                </SelectItem>
                                <SelectItem value="electronics">
                                  Electronics
                                </SelectItem>
                                <SelectItem value="medical">
                                  Medical Devices
                                </SelectItem>
                                <SelectItem value="food">
                                  Food Processing
                                </SelectItem>
                                <SelectItem value="metal">
                                  Metal Fabrication
                                </SelectItem>
                                <SelectItem value="plastic">
                                  Plastics & Composites
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium flex items-center">
                      <Beaker className="mr-2 h-5 w-5" />
                      Research & Development Tax Credits
                    </h3>
                    <p className="text-sm text-gray-500">
                      The R&D tax credit can provide significant savings for
                      manufacturers who develop or improve products, processes,
                      or software.
                    </p>

                    <FormField
                      control={form.control}
                      name="hasRnD"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Does your company engage in research and
                              development activities?
                            </FormLabel>
                            <FormDescription>
                              This includes developing new products, improving
                              manufacturing processes, or creating software.
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    {watchHasRnD && (
                      <div className="space-y-6 mt-6 border-t pt-6">
                        <FormField
                          control={form.control}
                          name="rndWages"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>R&D Wages ($)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(Number(e.target.value))
                                  }
                                />
                              </FormControl>
                              <FormDescription>
                                Wages paid to employees working on R&D
                                activities
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="rndSupplies"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>R&D Supplies ($)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(Number(e.target.value))
                                  }
                                />
                              </FormControl>
                              <FormDescription>
                                Cost of supplies used in R&D activities
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="rndContractResearch"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Contract Research ($)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(Number(e.target.value))
                                  }
                                />
                              </FormControl>
                              <FormDescription>
                                Payments to contractors for R&D services (65%
                                qualified)
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium flex items-center">
                      <TrendingUp className="mr-2 h-5 w-5" />
                      Section 179 & Bonus Depreciation
                    </h3>
                    <p className="text-sm text-gray-500">
                      Section 179 allows businesses to deduct the full purchase
                      price of qualifying equipment and software purchased
                      during the tax year.
                    </p>

                    <FormField
                      control={form.control}
                      name="equipmentPurchases"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Equipment Purchases This Year ($)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormDescription>
                            Total cost of machinery, equipment, and other
                            qualifying property purchased this year
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="usedForBusiness"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Business Use Percentage: {field.value}%
                          </FormLabel>
                          <FormControl>
                            <Slider
                              defaultValue={[field.value]}
                              max={100}
                              step={1}
                              onValueChange={(value) =>
                                field.onChange(value[0])
                              }
                              className="py-4"
                            />
                          </FormControl>
                          <FormDescription>
                            Percentage of equipment used for business purposes
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="qualifyingPropertyCost"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>
                            Qualifying Property for Bonus Depreciation ($)
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              {...field}
                              onChange={(e) =>
                                field.onChange(Number(e.target.value))
                              }
                            />
                          </FormControl>
                          <FormDescription>
                            Cost of property eligible for bonus depreciation
                            (separate from Section 179)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium flex items-center">
                      <Building className="mr-2 h-5 w-5" />
                      Cost Segregation
                    </h3>
                    <p className="text-sm text-gray-500">
                      Cost segregation allows you to accelerate depreciation
                      deductions by identifying building components that can be
                      classified as personal property.
                    </p>

                    <FormField
                      control={form.control}
                      name="ownBuilding"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Does your company own its manufacturing facility?
                            </FormLabel>
                            <FormDescription>
                              Cost segregation applies to owned buildings, not
                              leased facilities
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    {watchOwnBuilding && (
                      <div className="space-y-6 mt-6 border-t pt-6">
                        <FormField
                          control={form.control}
                          name="buildingValue"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Building Value ($)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(Number(e.target.value))
                                  }
                                />
                              </FormControl>
                              <FormDescription>
                                Current value of your manufacturing facility
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="buildingAge"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Building Age (years)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(Number(e.target.value))
                                  }
                                />
                              </FormControl>
                              <FormDescription>
                                Age of the building in years
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                )}

                {step === 5 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium flex items-center">
                      <Lightbulb className="mr-2 h-5 w-5" />
                      Energy Efficiency Incentives
                    </h3>
                    <p className="text-sm text-gray-500">
                      Tax incentives are available for energy-efficient
                      improvements to your manufacturing facility.
                    </p>

                    <FormField
                      control={form.control}
                      name="energyEfficiencyUpgrades"
                      render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <div className="space-y-1 leading-none">
                            <FormLabel>
                              Have you made or plan to make energy efficiency
                              improvements?
                            </FormLabel>
                            <FormDescription>
                              This includes HVAC upgrades, lighting, solar
                              panels, or other energy-saving improvements
                            </FormDescription>
                          </div>
                        </FormItem>
                      )}
                    />

                    {watchEnergyEfficiency && (
                      <div className="space-y-6 mt-6 border-t pt-6">
                        <FormField
                          control={form.control}
                          name="energyUpgradeCost"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Energy Upgrade Cost ($)</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  {...field}
                                  onChange={(e) =>
                                    field.onChange(Number(e.target.value))
                                  }
                                />
                              </FormControl>
                              <FormDescription>
                                Total cost of energy efficiency improvements
                              </FormDescription>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                    )}
                  </div>
                )}

                {step === 6 && (
                  <div className="space-y-6">
                    <h3 className="text-lg font-medium">
                      Work Opportunity Tax Credit (WOTC)
                    </h3>
                    <p className="text-sm text-gray-500">
                      The WOTC encourages employers to hire individuals from
                      certain targeted groups who face barriers to employment.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="newHires"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>New Hires (Last 12 Months)</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                              />
                            </FormControl>
                            <FormDescription>
                              Total number of new employees hired
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="targetGroupHires"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Target Group Hires</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                {...field}
                                onChange={(e) =>
                                  field.onChange(Number(e.target.value))
                                }
                              />
                            </FormControl>
                            <FormDescription>
                              Employees from WOTC target groups
                            </FormDescription>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <div className="bg-blue-50 p-4 rounded-md mt-6">
                      <h4 className="font-medium mb-2">
                        WOTC Target Groups Include:
                      </h4>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        <li>Veterans</li>
                        <li>TANF Recipients</li>
                        <li>SNAP Recipients</li>
                        <li>Designated Community Residents</li>
                        <li>Vocational Rehabilitation Referrals</li>
                        <li>Ex-Felons</li>
                        <li>SSI Recipients</li>
                        <li>Long-Term Unemployment Recipients</li>
                      </ul>
                    </div>
                  </div>
                )}
              </Form>
            </CardContent>

            <CardFooter className="flex justify-between">
              {step > 1 && (
                <Button variant="outline" onClick={prevStep}>
                  <ArrowLeft className="mr-2 h-4 w-4" /> Previous
                </Button>
              )}
              {step === 1 && <div></div>}

              <Button onClick={nextStep}>
                {step < 6 ? (
                  <>
                    Next <ArrowRight className="ml-2 h-4 w-4" />
                  </>
                ) : (
                  <>
                    Calculate Savings <Calculator className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>
        ) : (
          <div className="space-y-8">
            {!leadCaptured ? (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Your Estimated Tax Savings
                  </CardTitle>
                  <CardDescription>
                    Based on your inputs, we've calculated your potential tax
                    savings
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-8">
                    <SavingsResults results={results} />
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">
                      Get Your Detailed Tax Savings Report
                    </h3>
                    <p className="mb-4">
                      Enter your email to receive a detailed breakdown of your
                      potential tax savings and strategies to implement them.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="flex-grow"
                      />
                      <Button onClick={handleEmailSubmit}>
                        <Mail className="mr-2 h-4 w-4" /> Get Report
                      </Button>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowResults(false);
                      setStep(1);
                      setProgress(16.67);
                    }}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Recalculate
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() => (window.location.href = "/contact")}
                  >
                    <FileText className="mr-2 h-4 w-4" /> Schedule Consultation
                  </Button>
                </CardFooter>
              </Card>
            ) : (
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Thank You!</CardTitle>
                  <CardDescription>
                    Your detailed tax savings report has been sent to your email
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="mb-8">
                    <SavingsResults results={results} />
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Next Steps</h3>
                    <p className="mb-4">
                      Our team of manufacturing tax specialists can help you
                      implement these tax-saving strategies and identify
                      additional opportunities specific to your business.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button
                        onClick={() => (window.location.href = "/contact")}
                        className="flex-grow"
                      >
                        Schedule a Consultation
                      </Button>
                      <Button variant="outline" onClick={downloadReport}>
                        <Download className="mr-2 h-4 w-4" /> Download Report
                      </Button>
                    </div>
                  </div>
                </CardContent>

                <CardFooter className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => {
                      setShowResults(false);
                      setLeadCaptured(false);
                      setStep(1);
                      setProgress(16.67);
                    }}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" /> Start Over
                  </Button>

                  <Button
                    variant="outline"
                    onClick={() =>
                      (window.location.href = "/resources/tax-planning")
                    }
                  >
                    Learn More About Tax Planning
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        )}
      </div>
    </FormProvider>
  );
}

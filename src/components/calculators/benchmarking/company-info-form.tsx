"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { CompanyData } from "@/lib/benchmarking/types";
import { currentYear } from "@/lib/utils";

const companyInfoSchema = z.object({
  companyName: z.string().min(2, { message: "Company name is required" }),
  fiscalYear: z
    .string()
    .regex(/^\d{4}$/, { message: "Please enter a valid year (YYYY)" }),
  annualRevenue: z.coerce
    .number()
    .positive({ message: "Revenue must be greater than zero" }),
  employeeCount: z.coerce
    .number()
    .int()
    .positive({ message: "Employee count must be a positive integer" }),
  industrySubsector: z.string().optional(),
});

const profitabilitySchema = z.object({
  grossProfitMargin: z.coerce
    .number()
    .min(0)
    .max(100, { message: "Must be between 0 and 100%" }),
  operatingProfitMargin: z.coerce
    .number()
    .min(-100)
    .max(100, { message: "Must be between -100 and 100%" }),
  netProfitMargin: z.coerce
    .number()
    .min(-100)
    .max(100, { message: "Must be between -100 and 100%" }),
  ebitdaMargin: z.coerce
    .number()
    .min(-100)
    .max(100, { message: "Must be between -100 and 100%" }),
  returnOnAssets: z.coerce
    .number()
    .min(-100)
    .max(100, { message: "Must be between -100 and 100%" }),
});

const liquiditySchema = z.object({
  currentRatio: z.coerce
    .number()
    .positive({ message: "Must be greater than zero" }),
  quickRatio: z.coerce.number().min(0, { message: "Must be zero or greater" }),
  cashRatio: z.coerce.number().min(0, { message: "Must be zero or greater" }),
  daysOfInventory: z.coerce
    .number()
    .min(0, { message: "Must be zero or greater" }),
  daysOfReceivables: z.coerce
    .number()
    .min(0, { message: "Must be zero or greater" }),
  daysOfPayables: z.coerce
    .number()
    .min(0, { message: "Must be zero or greater" }),
});

const efficiencySchema = z.object({
  assetTurnover: z.coerce
    .number()
    .min(0, { message: "Must be zero or greater" }),
  inventoryTurnover: z.coerce
    .number()
    .min(0, { message: "Must be zero or greater" }),
  receivablesTurnover: z.coerce
    .number()
    .min(0, { message: "Must be zero or greater" }),
  fixedAssetTurnover: z.coerce
    .number()
    .min(0, { message: "Must be zero or greater" }),
  operatingCycle: z.coerce
    .number()
    .min(0, { message: "Must be zero or greater" }),
});

const leverageSchema = z.object({
  debtToEquity: z.coerce
    .number()
    .min(0, { message: "Must be zero or greater" }),
  debtToAssets: z.coerce
    .number()
    .min(0)
    .max(100, { message: "Must be between 0 and 100%" }),
  interestCoverageRatio: z.coerce.number().optional(),
  fixedChargeCoverage: z.coerce.number().optional(),
});

const formSchema = z.object({
  companyInfo: companyInfoSchema,
  profitability: profitabilitySchema,
  liquidity: liquiditySchema,
  efficiency: efficiencySchema,
  leverage: leverageSchema,
});

interface CompanyInfoFormProps {
  initialData: CompanyData | null;
  onSubmit: (data: CompanyData) => void;
}

export function CompanyInfoForm({
  initialData,
  onSubmit,
}: CompanyInfoFormProps) {
  const [activeTab, setActiveTab] = useState("company-info");

  // Initialize form with default values or initial data
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      companyInfo: {
        companyName: "",
        fiscalYear: currentYear().toString(),
        annualRevenue: 0,
        employeeCount: 0,
        industrySubsector: "",
      },
      profitability: {
        grossProfitMargin: 0,
        operatingProfitMargin: 0,
        netProfitMargin: 0,
        ebitdaMargin: 0,
        returnOnAssets: 0,
      },
      liquidity: {
        currentRatio: 0,
        quickRatio: 0,
        cashRatio: 0,
        daysOfInventory: 0,
        daysOfReceivables: 0,
        daysOfPayables: 0,
      },
      efficiency: {
        assetTurnover: 0,
        inventoryTurnover: 0,
        receivablesTurnover: 0,
        fixedAssetTurnover: 0,
        operatingCycle: 0,
      },
      leverage: {
        debtToEquity: 0,
        debtToAssets: 0,
        interestCoverageRatio: 0,
        fixedChargeCoverage: 0,
      },
    },
  });

  const handleFormSubmit = (values: z.infer<typeof formSchema>) => {
    // Flatten the form data structure to match CompanyData
    const flattenedData = {
      companyName: values.companyInfo.companyName,
      fiscalYear: Number.parseInt(values.companyInfo.fiscalYear),
      annualRevenue: values.companyInfo.annualRevenue,
      employeeCount: values.companyInfo.employeeCount,
      industrySubsector: values.companyInfo.industrySubsector,
      ...values.profitability,
      ...values.liquidity,
      ...values.efficiency,
      ...values.leverage,
    } as CompanyData;

    onSubmit(flattenedData);
  };

  const nextTab = () => {
    if (activeTab === "company-info") setActiveTab("profitability");
    else if (activeTab === "profitability") setActiveTab("liquidity");
    else if (activeTab === "liquidity") setActiveTab("efficiency");
    else if (activeTab === "efficiency") setActiveTab("leverage");
  };

  const prevTab = () => {
    if (activeTab === "leverage") setActiveTab("efficiency");
    else if (activeTab === "efficiency") setActiveTab("liquidity");
    else if (activeTab === "liquidity") setActiveTab("profitability");
    else if (activeTab === "profitability") setActiveTab("company-info");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(handleFormSubmit)}>
        <Card>
          <CardHeader>
            <CardTitle>Company Financial Information</CardTitle>
            <CardDescription>
              Enter your company's financial data to compare against industry
              benchmarks
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="space-y-4"
            >
              <TabsList className="grid grid-cols-5 gap-2">
                <TabsTrigger value="company-info">Company Info</TabsTrigger>
                <TabsTrigger value="profitability">Profitability</TabsTrigger>
                <TabsTrigger value="liquidity">Liquidity</TabsTrigger>
                <TabsTrigger value="efficiency">Efficiency</TabsTrigger>
                <TabsTrigger value="leverage">Leverage</TabsTrigger>
              </TabsList>

              {/* Company Info Tab */}
              <TabsContent value="company-info" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="companyInfo.companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter company name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyInfo.fiscalYear"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fiscal Year</FormLabel>
                        <FormControl>
                          <Input placeholder="YYYY" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyInfo.annualRevenue"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Annual Revenue ($)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyInfo.employeeCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Number of Employees</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyInfo.industrySubsector"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Industry Subsector</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select subsector" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="metal_fabrication">
                              Metal Fabrication
                            </SelectItem>
                            <SelectItem value="plastics">
                              Plastics & Rubber
                            </SelectItem>
                            <SelectItem value="electronics">
                              Electronics
                            </SelectItem>
                            <SelectItem value="food_processing">
                              Food Processing
                            </SelectItem>
                            <SelectItem value="automotive">
                              Automotive
                            </SelectItem>
                            <SelectItem value="aerospace">Aerospace</SelectItem>
                            <SelectItem value="medical_devices">
                              Medical Devices
                            </SelectItem>
                            <SelectItem value="furniture">Furniture</SelectItem>
                            <SelectItem value="textiles">Textiles</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              {/* Profitability Tab */}
              <TabsContent value="profitability" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="profitability.grossProfitMargin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Gross Profit Margin (%)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          (Gross Profit / Revenue) × 100
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profitability.operatingProfitMargin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Operating Profit Margin (%)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          (Operating Income / Revenue) × 100
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profitability.netProfitMargin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Net Profit Margin (%)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          (Net Income / Revenue) × 100
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profitability.ebitdaMargin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>EBITDA Margin (%)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          (EBITDA / Revenue) × 100
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="profitability.returnOnAssets"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Return on Assets (%)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          (Net Income / Total Assets) × 100
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              {/* Liquidity Tab */}
              <TabsContent value="liquidity" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="liquidity.currentRatio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Current Ratio</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Current Assets / Current Liabilities
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="liquidity.quickRatio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Quick Ratio</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          (Current Assets - Inventory) / Current Liabilities
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="liquidity.cashRatio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Cash Ratio</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Cash & Equivalents / Current Liabilities
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="liquidity.daysOfInventory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Days of Inventory</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          (Inventory / COGS) × 365
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="liquidity.daysOfReceivables"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Days of Receivables</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          (Accounts Receivable / Revenue) × 365
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="liquidity.daysOfPayables"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Days of Payables</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          (Accounts Payable / COGS) × 365
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              {/* Efficiency Tab */}
              <TabsContent value="efficiency" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="efficiency.assetTurnover"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Asset Turnover</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Revenue / Total Assets
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="efficiency.inventoryTurnover"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Inventory Turnover</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          COGS / Average Inventory
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="efficiency.receivablesTurnover"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Receivables Turnover</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Revenue / Average Accounts Receivable
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="efficiency.fixedAssetTurnover"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fixed Asset Turnover</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Revenue / Net Fixed Assets
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="efficiency.operatingCycle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Operating Cycle (days)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          Days of Inventory + Days of Receivables
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>

              {/* Leverage Tab */}
              <TabsContent value="leverage" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="leverage.debtToEquity"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Debt to Equity Ratio</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          Total Debt / Total Equity
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="leverage.debtToAssets"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Debt to Assets (%)</FormLabel>
                        <FormControl>
                          <Input type="number" placeholder="0" {...field} />
                        </FormControl>
                        <FormDescription>
                          (Total Debt / Total Assets) × 100
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="leverage.interestCoverageRatio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Interest Coverage Ratio</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          EBIT / Interest Expense
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="leverage.fixedChargeCoverage"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Fixed Charge Coverage</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            placeholder="0"
                            step="0.01"
                            {...field}
                          />
                        </FormControl>
                        <FormDescription>
                          (EBIT + Fixed Charges) / (Fixed Charges + Interest)
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div>
              {activeTab !== "company-info" && (
                <Button type="button" variant="outline" onClick={prevTab}>
                  Previous
                </Button>
              )}
            </div>
            <div>
              {activeTab !== "leverage" ? (
                <Button type="button" onClick={nextTab}>
                  Next
                </Button>
              ) : (
                <Button type="submit">Submit</Button>
              )}
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}

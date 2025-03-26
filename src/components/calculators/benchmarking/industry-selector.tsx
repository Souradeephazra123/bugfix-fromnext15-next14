"use client";

import type React from "react";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type { IndustryData } from "@/lib/benchmarking/types";
import { fetchIndustries } from "@/lib/benchmarking/data-service";
import { Search, Filter, Building2 } from "lucide-react";

interface IndustrySelectorProps {
  onSelectIndustry: (industry: IndustryData) => void;
  isLoading: boolean;
  selectedIndustry: IndustryData | null;
}

export function IndustrySelector({
  onSelectIndustry,
  isLoading,
  selectedIndustry,
}: IndustrySelectorProps) {
  const [industries, setIndustries] = useState<IndustryData[]>([]);
  const [filteredIndustries, setFilteredIndustries] = useState<IndustryData[]>(
    [],
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSize, setSelectedSize] = useState<string>("all");
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [activeTab, setActiveTab] = useState("browse");
  const [loading, setLoading] = useState(true);
  const tenM = 10000000;
  const hundredM = 100000000;

  useEffect(() => {
    const loadIndustries = async () => {
      try {
        const data = await fetchIndustries();
        setIndustries(data);
        setFilteredIndustries(data);
      } catch (error) {
        console.error("Error loading industries", error);
      } finally {
        setLoading(false);
      }
    };

    loadIndustries();
  }, []);

  useEffect(() => {
    // Filter industries based on search query and filters
    let filtered = industries;

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (industry) =>
          industry.name.toLowerCase().includes(query) ||
          industry.description?.toLowerCase().includes(query),
      );
    }

    if (selectedSize !== "all") {
      filtered = filtered.filter(
        (industry) => industry.sizeCategory === selectedSize,
      );
    }

    if (selectedRegion !== "all") {
      filtered = filtered.filter(
        (industry) => industry.region === selectedRegion,
      );
    }

    setFilteredIndustries(filtered);
  }, [searchQuery, selectedSize, selectedRegion, industries]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSizeChange = (value: string) => {
    setSelectedSize(value);
  };

  const handleRegionChange = (value: string) => {
    setSelectedRegion(value);
  };

  const handleSelectIndustry = (industry: IndustryData) => {
    onSelectIndustry(industry);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Select Industry for Benchmarking</CardTitle>
        <CardDescription>
          Choose the industry that best matches your business for accurate
          benchmarking
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="space-y-4"
        >
          <TabsList className="grid grid-cols-2 gap-2">
            <TabsTrigger value="browse">Browse Industries</TabsTrigger>
            <TabsTrigger value="search">Search & Filter</TabsTrigger>
          </TabsList>

          {/* Browse Tab */}
          <TabsContent value="browse" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {loading
                ? Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <Card key={i} className="animate-pulse">
                        <CardContent className="p-6">
                          <div className="h-6 bg-gray-200 rounded mb-2"></div>
                          <div className="h-4 bg-gray-100 rounded mb-4"></div>
                          <div className="h-10 bg-gray-200 rounded"></div>
                        </CardContent>
                      </Card>
                    ))
                : filteredIndustries.map((industry) => (
                    <Card
                      key={industry.id}
                      className={`cursor-pointer transition-all hover:shadow-md ${
                        selectedIndustry?.id === industry.id
                          ? "ring-2 ring-blue-500"
                          : ""
                      }`}
                      onClick={() => handleSelectIndustry(industry)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="h-5 w-5 text-blue-600" />
                          <h3 className="font-medium">{industry.name}</h3>
                        </div>
                        {industry.description && (
                          <p className="text-sm text-gray-500 mb-4">
                            {industry.description}
                          </p>
                        )}
                        <div className="flex flex-wrap gap-2 text-xs">
                          {industry.sizeCategory && (
                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              {industry.sizeCategory}
                            </span>
                          )}
                          {industry.region && (
                            <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              {industry.region}
                            </span>
                          )}
                          {industry.subCategory && (
                            <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                              {industry.subCategory}
                            </span>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
            </div>
          </TabsContent>

          {/* Search Tab */}
          <TabsContent value="search" className="space-y-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search industries..."
                  value={searchQuery}
                  onChange={handleSearch}
                  className="pl-9"
                />
              </div>
              <div className="flex gap-2">
                <Select value={selectedSize} onValueChange={handleSizeChange}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Company Size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Sizes</SelectItem>
                    <SelectItem value="small">Small (&lt; $10M)</SelectItem>
                    <SelectItem value="medium">Medium ($10M-$100M)</SelectItem>
                    <SelectItem value="large">Large (&gt; $100M)</SelectItem>
                  </SelectContent>
                </Select>
                <Select
                  value={selectedRegion}
                  onValueChange={handleRegionChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    <SelectItem value="northeast">Northeast</SelectItem>
                    <SelectItem value="midwest">Midwest</SelectItem>
                    <SelectItem value="south">South</SelectItem>
                    <SelectItem value="west">West</SelectItem>
                    <SelectItem value="national">National</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-medium mb-3">
                Manufacturing Sectors
              </h3>
              <RadioGroup
                defaultValue="all"
                className="grid grid-cols-1 md:grid-cols-2 gap-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all">All Manufacturing</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="metal_fabrication"
                    id="metal_fabrication"
                  />
                  <Label htmlFor="metal_fabrication">Metal Fabrication</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="plastics" id="plastics" />
                  <Label htmlFor="plastics">Plastics & Rubber</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="electronics" id="electronics" />
                  <Label htmlFor="electronics">Electronics</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="food_processing"
                    id="food_processing"
                  />
                  <Label htmlFor="food_processing">Food Processing</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="automotive" id="automotive" />
                  <Label htmlFor="automotive">Automotive</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="aerospace" id="aerospace" />
                  <Label htmlFor="aerospace">Aerospace</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem
                    value="medical_devices"
                    id="medical_devices"
                  />
                  <Label htmlFor="medical_devices">Medical Devices</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="mt-6">
              <Button
                className="w-full flex items-center gap-2"
                variant="outline"
              >
                <Filter className="h-4 w-4" />
                Apply Filters
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between items-center pt-4 border-t">
          <p className="text-sm text-gray-500">
            {filteredIndustries.length} industries available
          </p>
          {selectedIndustry && (
            <Button
              onClick={() => onSelectIndustry(selectedIndustry)}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : "Continue with Selected Industry"}
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

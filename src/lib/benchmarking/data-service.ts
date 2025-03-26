import type { IndustryData, BenchmarkData } from "./types";

// Mock data for industries
const industries: IndustryData[] = [
  {
    id: "metal_fabrication",
    name: "Metal Fabrication",
    description: "Companies that cut, bend and assemble metal structures",
    sizeCategory: "medium",
    region: "national",
    subCategory: "Precision Manufacturing",
  },
  {
    id: "plastics",
    name: "Plastics & Rubber Manufacturing",
    description: "Manufacturers of plastic and rubber products",
    sizeCategory: "medium",
    region: "national",
    subCategory: "Industrial Components",
  },
  {
    id: "electronics",
    name: "Electronics Manufacturing",
    description: "Producers of electronic components and devices",
    sizeCategory: "large",
    region: "west",
    subCategory: "Consumer Electronics",
  },
  {
    id: "food_processing",
    name: "Food Processing",
    description: "Companies that transform raw ingredients into food products",
    sizeCategory: "large",
    region: "midwest",
    subCategory: "Packaged Foods",
  },
  {
    id: "automotive",
    name: "Automotive Parts Manufacturing",
    description: "Manufacturers of components for the automotive industry",
    sizeCategory: "large",
    region: "midwest",
    subCategory: "OEM Suppliers",
  },
  {
    id: "aerospace",
    name: "Aerospace Manufacturing",
    description: "Companies producing components for aircraft and spacecraft",
    sizeCategory: "large",
    region: "west",
    subCategory: "Commercial Aviation",
  },
  {
    id: "medical_devices",
    name: "Medical Device Manufacturing",
    description: "Producers of medical equipment and supplies",
    sizeCategory: "medium",
    region: "northeast",
    subCategory: "Diagnostic Equipment",
  },
  {
    id: "furniture",
    name: "Furniture Manufacturing",
    description:
      "Companies that produce furniture for residential and commercial use",
    sizeCategory: "small",
    region: "south",
    subCategory: "Commercial Furniture",
  },
  {
    id: "textiles",
    name: "Textile Manufacturing",
    description: "Manufacturers of fabrics and textile products",
    sizeCategory: "small",
    region: "south",
    subCategory: "Industrial Textiles",
  },
];

// Mock benchmark data by industry
const benchmarkData: Record<string, BenchmarkData> = {
  metal_fabrication: {
    grossProfitMargin: 28.5,
    operatingProfitMargin: 12.3,
    netProfitMargin: 8.7,
    ebitdaMargin: 15.2,
    returnOnAssets: 9.8,
    currentRatio: 2.1,
    quickRatio: 1.3,
    cashRatio: 0.6,
    daysOfInventory: 65,
    daysOfReceivables: 45,
    daysOfPayables: 38,
    assetTurnover: 1.8,
    inventoryTurnover: 5.6,
    receivablesTurnover: 8.1,
    fixedAssetTurnover: 3.2,
    operatingCycle: 110,
    debtToEquity: 0.8,
    debtToAssets: 42,
    interestCoverageRatio: 6.5,
    fixedChargeCoverage: 3.2,
    lastUpdated: "2023-12-15",
    sampleSize: 120,
  },
  plastics: {
    grossProfitMargin: 30.2,
    operatingProfitMargin: 13.5,
    netProfitMargin: 9.2,
    ebitdaMargin: 16.8,
    returnOnAssets: 10.5,
    currentRatio: 1.9,
    quickRatio: 1.2,
    cashRatio: 0.5,
    daysOfInventory: 58,
    daysOfReceivables: 42,
    daysOfPayables: 35,
    assetTurnover: 1.9,
    inventoryTurnover: 6.3,
    receivablesTurnover: 8.7,
    fixedAssetTurnover: 3.5,
    operatingCycle: 100,
    debtToEquity: 0.7,
    debtToAssets: 38,
    interestCoverageRatio: 7.2,
    fixedChargeCoverage: 3.5,
    lastUpdated: "2023-12-10",
    sampleSize: 95,
  },
  electronics: {
    grossProfitMargin: 35.8,
    operatingProfitMargin: 15.2,
    netProfitMargin: 10.5,
    ebitdaMargin: 18.3,
    returnOnAssets: 12.1,
    currentRatio: 2.3,
    quickRatio: 1.5,
    cashRatio: 0.8,
    daysOfInventory: 52,
    daysOfReceivables: 38,
    daysOfPayables: 32,
    assetTurnover: 2.1,
    inventoryTurnover: 7.0,
    receivablesTurnover: 9.6,
    fixedAssetTurnover: 4.2,
    operatingCycle: 95,
    debtToEquity: 0.6,
    debtToAssets: 35,
    interestCoverageRatio: 7.8,
    fixedChargeCoverage: 4.0,
    lastUpdated: "2023-12-05",
    sampleSize: 78,
  },
  // Add more benchmark data for other industries as needed...
};

export async function fetchBenchmarkData(
  industryId: string,
  forceRefresh = false,
): Promise<BenchmarkData> {
  // Simulate fetching data from an API or database
  // In a real application, you would make an API call here
  await new Promise((resolve) => setTimeout(resolve, 500));

  if (!benchmarkData[industryId]) {
    throw new Error(`Benchmark data not found for industry ID: ${industryId}`);
  }

  return benchmarkData[industryId];
}

export async function fetchIndustries(): Promise<IndustryData[]> {
  // Simulate fetching data from an API or database
  // In a real application, you would make an API call here
  await new Promise((resolve) => setTimeout(resolve, 500));

  return industries;
}

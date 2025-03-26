export interface CompanyData {
  companyName: string;
  fiscalYear: number;
  annualRevenue: number;
  employeeCount: number;
  industrySubsector?: string;

  // Profitability metrics
  grossProfitMargin: number;
  operatingProfitMargin: number;
  netProfitMargin: number;
  ebitdaMargin: number;
  returnOnAssets: number;

  // Liquidity metrics
  currentRatio: number;
  quickRatio: number;
  cashRatio: number;
  daysOfInventory: number;
  daysOfReceivables: number;
  daysOfPayables: number;

  // Efficiency metrics
  assetTurnover: number;
  inventoryTurnover: number;
  receivablesTurnover: number;
  fixedAssetTurnover: number;
  operatingCycle: number;

  // Leverage metrics
  debtToEquity: number;
  debtToAssets: number;
  interestCoverageRatio?: number;
  fixedChargeCoverage?: number;
}

export interface BenchmarkData {
  // Profitability metrics
  grossProfitMargin: number;
  operatingProfitMargin: number;
  netProfitMargin: number;
  ebitdaMargin: number;
  returnOnAssets: number;

  // Liquidity metrics
  currentRatio: number;
  quickRatio: number;
  cashRatio: number;
  daysOfInventory: number;
  daysOfReceivables: number;
  daysOfPayables: number;

  // Efficiency metrics
  assetTurnover: number;
  inventoryTurnover: number;
  receivablesTurnover: number;
  fixedAssetTurnover: number;
  operatingCycle: number;

  // Leverage metrics
  debtToEquity: number;
  debtToAssets: number;
  interestCoverageRatio: number;
  fixedChargeCoverage: number;

  // Metadata
  lastUpdated: string;
  sampleSize: number;
}

export interface IndustryData {
  id: string;
  name: string;
  description?: string;
  sizeCategory?: string;
  region?: string;
  subCategory?: string;
}

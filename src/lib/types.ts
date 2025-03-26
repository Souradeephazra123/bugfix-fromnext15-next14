export interface ValuationScenario {
  id: string;
  name: string;
  date: string;
  financialData: {
    revenue: number;
    ebitda: number;
    adjustments: number;
    capex: number;
    workingCapital: number;
    debt: number;
    tangibleAssets: number;
    intangibleAssets: number;
    totalLiabilities: number;
  };
  industryData: {
    industryType: string;
    projectedGrowthRate: number;
    discountRate: number;
  };
  valueDrivers: {
    financialScore: number;
    customerScore: number;
    operationalScore: number;
    managementScore: number;
    strategicScore: number;
    customerConcentration: number;
    proprietaryProducts: number;
    managementDepth: number;
    growthRate: number;
  };
  results: {
    adjustedEbitda: number;
    adjustedMultiple: number;
    businessValue: number;
    dcfValue: number;
    assetValue: number;
    valuationRange: {
      low: number;
      mid: number;
      high: number;
    };
  };
}

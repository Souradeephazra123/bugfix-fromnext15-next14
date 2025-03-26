// Tax calculation utility functions

interface TaxData {
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
}

interface TaxSavingsResult {
  totalSavings: number;
  breakdown: {
    rndCredit: number;
    section179: number;
    bonusDepreciation: number;
    costSegregation: number;
    energyEfficiency: number;
    wotc: number;
    stateIncentives: number;
  };
  taxRate: number;
  effectiveTaxRate: number;
}

export function calculateTaxSavings(data: TaxData): TaxSavingsResult {
  // Calculate federal tax rate (simplified)
  const federalTaxRate = calculateFederalTaxRate(data.taxableIncome);

  // Calculate R&D Credit
  const rndCredit = calculateRnDCredit(data);

  // Calculate Section 179 Deduction Savings
  const section179Savings = calculateSection179Savings(data, federalTaxRate);

  // Calculate Bonus Depreciation Savings
  const bonusDepreciationSavings = calculateBonusDepreciationSavings(
    data,
    federalTaxRate,
  );

  // Calculate Cost Segregation Savings
  const costSegregationSavings = calculateCostSegregationSavings(
    data,
    federalTaxRate,
  );

  // Calculate Energy Efficiency Savings
  const energyEfficiencySavings = calculateEnergyEfficiencySavings(data);

  // Calculate WOTC Savings
  const wotcSavings = calculateWOTCSavings(data);

  // Calculate State-Specific Incentives
  const stateIncentives = calculateStateIncentives(data);

  // Calculate total savings
  const totalSavings =
    rndCredit +
    section179Savings +
    bonusDepreciationSavings +
    costSegregationSavings +
    energyEfficiencySavings +
    wotcSavings +
    stateIncentives;

  // Calculate effective tax rate
  const taxSavingsRate = (totalSavings / data.taxableIncome) * 100;
  const effectiveTaxRate = Math.max(0, federalTaxRate - taxSavingsRate);

  return {
    totalSavings,
    breakdown: {
      rndCredit,
      section179: section179Savings,
      bonusDepreciation: bonusDepreciationSavings,
      costSegregation: costSegregationSavings,
      energyEfficiency: energyEfficiencySavings,
      wotc: wotcSavings,
      stateIncentives,
    },
    taxRate: Math.round(federalTaxRate),
    effectiveTaxRate: Math.round(effectiveTaxRate * 10) / 10,
  };
}

// Calculate federal tax rate (simplified corporate tax calculation)
function calculateFederalTaxRate(taxableIncome: number): number {
  // Simplified corporate tax rate (21% flat rate)
  return 21;
}

// Calculate R&D Credit
function calculateRnDCredit(data: TaxData): number {
  if (!data.hasRnD) return 0;

  // Qualified Research Expenses (QREs)
  const qre =
    data.rndWages + data.rndSupplies + data.rndContractResearch * 0.65;

  // Simplified calculation (14% of QREs)
  // In a real implementation, this would be more complex with base amounts
  return qre * 0.14;
}

// Calculate Section 179 Deduction Savings
function calculateSection179Savings(data: TaxData, taxRate: number): number {
  const section179Limit = 1080000; // 2022 limit
  const businessUsePercentage = data.usedForBusiness / 100;

  // Calculate eligible amount
  const eligibleAmount = Math.min(
    data.equipmentPurchases * businessUsePercentage,
    section179Limit,
  );

  // Calculate tax savings (deduction * tax rate)
  return eligibleAmount * (taxRate / 100);
}

// Calculate Bonus Depreciation Savings
function calculateBonusDepreciationSavings(
  data: TaxData,
  taxRate: number,
): number {
  // 2023 bonus depreciation rate is 80%
  const bonusDepreciationRate = 0.8;

  // Calculate bonus depreciation amount
  const bonusDepreciationAmount =
    data.qualifyingPropertyCost * bonusDepreciationRate;

  // Calculate tax savings
  return bonusDepreciationAmount * (taxRate / 100);
}

// Calculate Cost Segregation Savings
function calculateCostSegregationSavings(
  data: TaxData,
  taxRate: number,
): number {
  if (!data.ownBuilding || data.buildingValue <= 0) return 0;

  // Simplified calculation
  // Typically, 20-40% of a building's value can be reclassified
  // We'll use 30% as an average
  const reclassificationPercentage = 0.3;

  // Calculate reclassified amount
  const reclassifiedAmount = data.buildingValue * reclassificationPercentage;

  // Calculate first-year tax savings (simplified)
  // In reality, this would be spread over multiple years
  return reclassifiedAmount * 0.2 * (taxRate / 100);
}

// Calculate Energy Efficiency Savings
function calculateEnergyEfficiencySavings(data: TaxData): number {
  if (!data.energyEfficiencyUpgrades || data.energyUpgradeCost <= 0) return 0;

  // Simplified calculation (10% tax credit for commercial buildings)
  return data.energyUpgradeCost * 0.1;
}

// Calculate WOTC Savings
function calculateWOTCSavings(data: TaxData): number {
  if (data.targetGroupHires <= 0) return 0;

  // Simplified calculation
  // Average WOTC credit is around $2,400 per qualified employee
  const averageCredit = 2400;

  return data.targetGroupHires * averageCredit;
}

// Calculate State-Specific Incentives
function calculateStateIncentives(data: TaxData): number {
  // This would be a complex calculation based on state-specific programs
  // For demonstration purposes, we'll use a simplified approach

  // State incentive multipliers (simplified)
  const stateMultipliers: Record<string, number> = {
    CA: 0.05,
    NY: 0.04,
    TX: 0.03,
    MI: 0.045,
    OH: 0.04,
    PA: 0.035,
    IL: 0.03,
    NC: 0.025,
    GA: 0.02,
    FL: 0.015,
  };

  // Default multiplier for states not in the list
  const defaultMultiplier = 0.02;

  // Get multiplier for the selected state
  const multiplier = stateMultipliers[data.state] || defaultMultiplier;

  // Calculate state incentives based on revenue
  return data.annualRevenue * multiplier * 0.01;
}

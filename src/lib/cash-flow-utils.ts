// Mock calculation functions for the cash flow planner

export function calculateCashFlow(formValues: any) {
  // This would be replaced with actual calculations based on the input values
  // For demo purposes, we'll generate some sample data

  const monthlyData = [];
  let currentCash = formValues.startingCash;
  let highestCash = currentCash;
  let lowestCash = currentCash;
  let highestCashMonth = 0;
  let lowestCashMonth = 0;

  // Generate monthly cash flow data
  for (let month = 1; month <= 12; month++) {
    // Apply revenue growth
    const growthFactor = 1 + formValues.revenueGrowthRate / 100;
    let monthlyRevenue =
      formValues.monthlyRevenue * Math.pow(growthFactor, month - 1);

    // Apply seasonality if specified
    if (formValues.seasonalityPattern !== "none") {
      monthlyRevenue = applySeasonality(
        monthlyRevenue,
        month,
        formValues.seasonalityPattern,
      );
    }

    // Calculate cash in - with payment terms delay
    const delayedRevenue = getDelayedRevenue(
      monthlyRevenue,
      month,
      formValues.customerPaymentTerms,
    );

    // Cash inflows
    let cashIn = delayedRevenue;

    // Add financing if applicable
    if (formValues.additionalFinancing && formValues.financingMonth === month) {
      cashIn += formValues.financingAmount;
    }

    // Calculate cash out
    const rawMaterialCost = formValues.rawMaterialCost;
    const laborCost = formValues.laborCost;
    const overheadCost = formValues.overheadCost;
    const loanPayments = formValues.existingLoanPayments;

    let cashOut = rawMaterialCost + laborCost + overheadCost + loanPayments;

    // Add capital expenditure if applicable
    if (
      formValues.plannedCapitalExpenditures &&
      formValues.capexMonth === month
    ) {
      cashOut += formValues.capexAmount;
    }

    // Add tax payments (quarterly)
    if (formValues.includeTaxes && month % 3 === 0) {
      const quarterlyProfit =
        (monthlyRevenue - rawMaterialCost - laborCost - overheadCost) * 3;
      const taxPayment =
        quarterlyProfit > 0
          ? (quarterlyProfit * formValues.estimatedTaxRate) / 100
          : 0;
      cashOut += taxPayment;
    }

    // Calculate net cash flow
    const netFlow = cashIn - cashOut;

    // Update current cash
    currentCash += netFlow;

    // Track highest and lowest cash
    if (currentCash > highestCash) {
      highestCash = currentCash;
      highestCashMonth = month;
    }

    if (currentCash < lowestCash) {
      lowestCash = currentCash;
      lowestCashMonth = month;
    }

    // Add to monthly data
    monthlyData.push({
      month,
      cashIn,
      cashOut,
      netFlow,
      endingCash: currentCash,
    });
  }

  // Calculate cash growth percentage
  const cashGrowth = (
    ((currentCash - formValues.startingCash) / formValues.startingCash) *
    100
  ).toFixed(1);

  // Generate recommendations based on cash flow analysis
  const recommendations = generateRecommendations({
    cashFlow: monthlyData,
    lowestCash,
    highestCash,
    formValues,
  });

  return {
    monthlyData,
    lowestCash,
    lowestCashMonth,
    highestCash,
    highestCashMonth,
    endingCash: currentCash,
    cashGrowth,
    recommendations,
  };
}

// Calculate working capital metrics
export function calculateWorkingCapital(formValues: any, cashFlowResults: any) {
  // Calculate days inventory outstanding
  const dio = formValues.averageInventoryDays;

  // Calculate days sales outstanding
  const dso = formValues.customerPaymentTerms;

  // Calculate days payable outstanding
  const dpo = formValues.supplierPaymentTerms;

  // Calculate cash conversion cycle
  const cashConversionCycle = dio + dso - dpo;

  // Industry average CCC (would be based on real data in a production app)
  const industryAvgCCC = cashConversionCycle * 0.7;

  // Calculate cash tied up in each component
  const dailyRevenue = formValues.monthlyRevenue / 30;
  const dailyCogs = formValues.rawMaterialCost / 30;

  const cashTied = {
    inventory: dailyCogs * dio,
    receivables: dailyRevenue * dso,
    payables: dailyCogs * dpo,
  };

  // Calculate working capital needs
  const workingCapitalNeeds =
    cashTied.inventory + cashTied.receivables - cashTied.payables;

  // Generate monthly trend data
  const monthlyTrend = cashFlowResults.monthlyData.map((month: any) => {
    // In a real app, this would calculate actual changes in CCC over time
    // For demo, we'll simulate slight improvements
    const improvement = (month.month - 1) * 0.5;
    const monthCCC = cashConversionCycle - improvement;

    return {
      month: month.month,
      ccc: monthCCC,
      workingCapital: workingCapitalNeeds * (1 - improvement / 100),
    };
  });

  // Generate recommendations for working capital optimization
  const recommendations = [
    "Negotiate extended payment terms with suppliers to increase DPO",
    "Implement just-in-time inventory practices to reduce DIO",
    "Offer early payment discounts to reduce DSO",
    "Consider factoring receivables during seasonal peak demands",
    "Standardize inventory management processes to reduce excess stock",
  ];

  // Generate improvement opportunities
  const improvementOpportunities = [
    {
      strategy: "Inventory Reduction Initiative",
      impact: 35,
      difficulty: "Medium" as const,
      description:
        "Implement lean inventory management to reduce average inventory by 20%",
    },
    {
      strategy: "Receivables Acceleration Program",
      impact: 25,
      difficulty: "Low" as const,
      description:
        "Offer 2% discount for payments within 10 days to reduce DSO",
    },
    {
      strategy: "Supplier Term Renegotiation",
      impact: 20,
      difficulty: "High" as const,
      description: "Extend key supplier payment terms from current to net-45",
    },
    {
      strategy: "Automate AP/AR Processes",
      impact: 15,
      difficulty: "Medium" as const,
      description: "Implement digital invoicing and payment systems",
    },
  ];

  return {
    cashConversionCycle,
    industryAvgCCC,
    dio,
    dso,
    dpo,
    workingCapitalNeeds,
    cashTied,
    monthlyTrend,
    recommendations,
    improvementOpportunities,
  };
}

// Helper function to apply seasonality to revenue
function applySeasonality(revenue: number, month: number, pattern: string) {
  let factor = 1;

  switch (pattern) {
    case "quarterly":
      // Peaks at the end of each quarter
      factor = month % 3 === 0 ? 1.3 : 0.9;
      break;
    case "summer":
      // Peak in summer months (6-8)
      factor = month >= 6 && month <= 8 ? 1.4 : 0.9;
      break;
    case "winter":
      // Peak in winter months (11-1)
      factor = month >= 11 || month === 1 ? 1.4 : 0.9;
      break;
    case "holiday":
      // Peak in holiday season (10-12)
      factor = month >= 10 && month <= 12 ? 1.5 : 0.8;
      break;
    default:
      factor = 1;
  }

  return revenue * factor;
}

// Helper to calculate revenue with payment delay
function getDelayedRevenue(
  revenue: number,
  currentMonth: number,
  paymentTerms: number,
) {
  // If we're in month 1, there's no prior revenue to collect
  if (currentMonth === 1) {
    return revenue * 0.7; // Assume 70% of first month revenue is collected in month 1
  }

  // Calculate delay in months (rounded)
  const delayMonths = Math.ceil(paymentTerms / 30);

  // If the delay is less than a month, collect current month's revenue
  if (delayMonths < 1) {
    return revenue;
  }

  // Otherwise, collect from the appropriate prior month
  const collectionMonth = currentMonth - delayMonths;

  if (collectionMonth <= 0) {
    // Collecting from before our simulation started
    return revenue * 0.8; // Assume 80% of typical month
  }

  // In a real implementation, we would look up the actual revenue from the prior month
  // For this demo, we'll just use the current month with a slight reduction
  return revenue * 0.9;
}

// Generate recommendations based on cash flow analysis
function generateRecommendations(data: any) {
  const recommendations = [];

  // Check for negative cash months
  const negativeMonths = data.cashFlow.filter(
    (month: any) => month.endingCash < 0,
  );
  if (negativeMonths.length > 0) {
    recommendations.push(
      `You're projected to have negative cash in ${negativeMonths.length} months. Consider securing a line of credit or adjusting payment terms.`,
    );
  }

  // Check if lowest cash is too close to zero
  if (data.lowestCash < data.formValues.monthlyRevenue * 0.5) {
    recommendations.push(
      `Your minimum cash reserve of $${Math.round(data.lowestCash).toLocaleString()} is less than 50% of monthly revenue. This could create liquidity risk.`,
    );
  }

  // Check customer payment terms
  if (data.formValues.customerPaymentTerms > 30) {
    recommendations.push(
      `Your ${data.formValues.customerPaymentTerms}-day customer payment terms are stretching your cash flow. Consider offering early payment incentives.`,
    );
  }

  // Check inventory days
  if (data.formValues.averageInventoryDays > 45) {
    recommendations.push(
      `Your inventory is held for ${data.formValues.averageInventoryDays} days on average. Consider implementing just-in-time inventory practices.`,
    );
  }

  // Check supplier terms
  if (data.formValues.supplierPaymentTerms < 30) {
    recommendations.push(
      `You're paying suppliers in ${data.formValues.supplierPaymentTerms} days, which is relatively quick. Negotiate longer payment terms to improve cash flow.`,
    );
  }

  // Seasonal cash flow recommendation
  if (data.formValues.seasonalityPattern !== "none") {
    recommendations.push(
      `Your business shows seasonal patterns. Consider building cash reserves before peak seasons and securing flexible financing options.`,
    );
  }

  // Always add a general recommendation
  recommendations.push(
    `Regularly update this forecast with actual performance data to improve accuracy and catch potential issues early.`,
  );

  return recommendations;
}

// Export data to CSV
export function exportToCsv(data: any) {
  const { cashFlowData, formValues, scenario } = data;

  // Create CSV header
  let csvContent = "Month,Cash In,Cash Out,Net Flow,Ending Cash\n";

  // Add data rows
  cashFlowData.monthlyData.forEach((month: any) => {
    csvContent += `${month.month},${month.cashIn},${month.cashOut},${month.netFlow},${month.endingCash}\n`;
  });

  // Create download link
  const encodedUri = encodeURI("data:text/csv;charset=utf-8," + csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${scenario}_cash_flow_forecast.csv`);
  document.body.appendChild(link);

  // Trigger download
  link.click();
}

// Generate PDF report
export function generatePdfReport(data: any) {
  // In a real implementation, this would generate a PDF report
  // For this demo, we'll just show an alert
  alert(
    "PDF generation would be implemented here in a production environment.",
  );

  // Typically would use a library like jsPDF or a server-side PDF generation service
  console.log("PDF report data:", data);
}

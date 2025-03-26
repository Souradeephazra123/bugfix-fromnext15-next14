import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // Calculate QREs
    const qres = {
      wages: (data.rdExpenses.wages * data.qualifyingPercentages.wages) / 100,
      supplies:
        (data.rdExpenses.supplies * data.qualifyingPercentages.supplies) / 100,
      contract:
        (data.rdExpenses.contract *
          data.qualifyingPercentages.contract *
          0.65) /
        100,
      cloud: (data.rdExpenses.cloud * data.qualifyingPercentages.cloud) / 100,
    };

    // Calculate base amount (ASC method)
    const totalQREs = Object.values(qres).reduce((a, b) => a + b, 0);
    const baseAmount =
      ((data.priorYears.year1 + data.priorYears.year2 + data.priorYears.year3) /
        3) *
      0.5;

    // Calculate credit
    const credit = Math.max(0, (totalQREs - baseAmount) * 0.14);

    return NextResponse.json({
      credit,
      qres,
      baseAmount,
      totalQREs,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to calculate R&D credit" },
      { status: 500 },
    );
  }
}

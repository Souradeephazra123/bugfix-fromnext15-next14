"use client";

import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  type ChartOptions,
} from "chart.js";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

interface CashFlowChartProps {
  data: {
    monthlyData: Array<{
      month: number;
      cashIn: number;
      cashOut: number;
      netFlow: number;
      endingCash: number;
    }>;
  };
}

export function CashFlowChart({ data }: CashFlowChartProps) {
  const [chartType, setChartType] = useState<"cash-position" | "cash-flow">(
    "cash-position",
  );

  const months = data.monthlyData.map((item) => `Month ${item.month}`);

  const cashPositionData = {
    labels: months,
    datasets: [
      {
        label: "Cash Position",
        data: data.monthlyData.map((item) => item.endingCash),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.1)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const cashFlowData = {
    labels: months,
    datasets: [
      {
        label: "Cash In",
        data: data.monthlyData.map((item) => item.cashIn),
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.5)",
        tension: 0.4,
      },
      {
        label: "Cash Out",
        data: data.monthlyData.map((item) => item.cashOut),
        borderColor: "rgb(239, 68, 68)",
        backgroundColor: "rgba(239, 68, 68, 0.5)",
        tension: 0.4,
      },
      {
        label: "Net Flow",
        data: data.monthlyData.map((item) => item.netFlow),
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.5)",
        tension: 0.4,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value) =>
            "$" + new Intl.NumberFormat("en-US").format(value as number),
        },
      },
    },
  };

  return (
    <div>
      <Tabs
        value={chartType}
        onValueChange={(value) =>
          setChartType(value as "cash-position" | "cash-flow")
        }
        className="mb-4"
      >
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="cash-position">Cash Position</TabsTrigger>
          <TabsTrigger value="cash-flow">Cash Flow Details</TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="h-[400px]">
        {chartType === "cash-position" ? (
          <Line data={cashPositionData} options={options} />
        ) : (
          <Line data={cashFlowData} options={options} />
        )}
      </div>
    </div>
  );
}

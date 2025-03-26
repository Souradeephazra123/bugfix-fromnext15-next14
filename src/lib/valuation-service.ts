"use client";

import type { ValuationScenario } from "./types";

// Save a valuation scenario to localStorage
export const saveValuation = async (
  scenario: ValuationScenario,
): Promise<void> => {
  return new Promise((resolve) => {
    // Get existing scenarios
    const existingScenarios = JSON.parse(
      localStorage.getItem("valuationScenarios") || "[]",
    );

    // Add new scenario
    const updatedScenarios = [...existingScenarios, scenario];

    // Save to localStorage
    localStorage.setItem(
      "valuationScenarios",
      JSON.stringify(updatedScenarios),
    );

    // Simulate a delay for async operation
    setTimeout(() => {
      resolve();
    }, 300);
  });
};

// Load all valuation scenarios from localStorage
export const loadValuations = async (): Promise<ValuationScenario[]> => {
  return new Promise((resolve) => {
    // Get scenarios from localStorage
    const scenarios = JSON.parse(
      localStorage.getItem("valuationScenarios") || "[]",
    );

    // Simulate a delay for async operation
    setTimeout(() => {
      resolve(scenarios);
    }, 300);
  });
};

// Delete a valuation scenario from localStorage
export const deleteValuation = async (scenarioId: string): Promise<void> => {
  return new Promise((resolve) => {
    // Get existing scenarios
    const existingScenarios = JSON.parse(
      localStorage.getItem("valuationScenarios") || "[]",
    );

    // Filter out the scenario to delete
    const updatedScenarios = existingScenarios.filter(
      (scenario: ValuationScenario) => scenario.id !== scenarioId,
    );

    // Save updated list to localStorage
    localStorage.setItem(
      "valuationScenarios",
      JSON.stringify(updatedScenarios),
    );

    // Simulate a delay for async operation
    setTimeout(() => {
      resolve();
    }, 300);
  });
};

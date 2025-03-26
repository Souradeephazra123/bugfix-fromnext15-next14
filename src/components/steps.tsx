import { CheckCircle2 } from "lucide-react";

interface StepsProps {
  currentStep: number;
}

export function Steps({ currentStep }: StepsProps) {
  const steps = [
    { id: 1, name: "Company Basics" },
    { id: 2, name: "Qualifying Activities" },
    { id: 3, name: "Results" },
  ];

  return (
    <div className="flex justify-center">
      <nav aria-label="Progress" className="w-full max-w-3xl">
        <ol className="flex items-center">
          {steps.map((step, stepIdx) => (
            <li
              key={step.name}
              className={`relative flex-1 ${stepIdx !== steps.length - 1 ? "pr-8 sm:pr-20" : ""}`}
            >
              <div className="flex items-center">
                <div
                  className={`relative flex h-8 w-8 items-center justify-center rounded-full ${
                    step.id < currentStep
                      ? "bg-primary text-primary-foreground"
                      : step.id === currentStep
                        ? "border-2 border-primary bg-white"
                        : "border-2 border-slate-300 bg-white"
                  }`}
                >
                  {step.id < currentStep ? (
                    <CheckCircle2 className="h-5 w-5" />
                  ) : (
                    <span className="text-sm font-medium">{step.id}</span>
                  )}
                </div>
                <div
                  className={`hidden sm:block absolute top-0 right-0 h-0.5 w-full ${
                    step.id < currentStep ? "bg-primary" : "bg-slate-200"
                  }`}
                  style={{
                    display: stepIdx !== steps.length - 1 ? "block" : "none",
                  }}
                />
              </div>
              <div className="mt-2 hidden sm:block text-center text-sm">
                <span className="font-medium">{step.name}</span>
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

interface ProcessStepProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function ProcessStep({
  number,
  title,
  description,
  className = "",
}: ProcessStepProps) {
  return (
    <div className={`p-6 rounded-lg ${className}`}>
      <div className="flex flex-col space-y-4">
        <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
          <span className="text-amber-600 text-xl font-bold">{number}</span>
        </div>
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

// Add named export to support both import styles
export const ProcessStepComponent = ProcessStep;

export default ProcessStep;

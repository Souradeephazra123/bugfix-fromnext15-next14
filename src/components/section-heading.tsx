interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading = ({
  title,
  description,
  centered = false,
  className = "",
}: SectionHeadingProps) => {
  return (
    <div
      className={`space-y-4 ${centered ? "text-center mx-auto max-w-3xl" : ""} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center leading-tight">
        {title}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

// Add default export to support both import styles
export default SectionHeading;

import Link from "next/link";
import { cn } from "@/lib/utils";

interface ContactCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
  variant?: "default" | "dark" | "light";
}

function ContactCTA({
  title = "Ready to get started?",
  description = "Contact us today to schedule a consultation with one of our financial experts.",
  buttonText = "Contact Us",
  buttonHref = "/contact",
  className,
  variant = "default",
}: ContactCTAProps) {
  const variantStyles = {
    default: {
      container: "bg-blue-600 text-white",
      button: "bg-white text-blue-600 hover:bg-gray-100",
    },
    dark: {
      container: "bg-gray-900 text-white",
      button: "bg-blue-500 text-white hover:bg-blue-600",
    },
    light: {
      container: "bg-gray-100 text-gray-900",
      button: "bg-blue-600 text-white hover:bg-blue-700",
    },
  };

  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "py-12 px-4 sm:px-6 md:py-16 md:px-8",
        styles.container,
        className,
      )}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
          {description}
        </p>
        <Link
          href={buttonHref}
          className={cn(
            "inline-block py-3 px-6 rounded-md font-medium transition-colors duration-200",
            styles.button,
          )}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export { ContactCTA };
export default ContactCTA;

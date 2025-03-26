interface PageHeaderProps {
  title: string;
  description?: string;
  image?: string;
}

export const PageHeader = ({ title, description, image }: PageHeaderProps) => {
  return (
    <div className="relative bg-gray-900 text-white">
      {image && (
        <div className="absolute inset-0 z-0">
          <img
            src={image || "/placeholder.svg"}
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      )}
      <div className="container relative z-10 py-16 md:py-24">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          {description && (
            <p className="text-xl text-gray-200">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

// Add default export to support both import styles
export default PageHeader;

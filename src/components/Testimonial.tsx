interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  className?: string;
}

 const Testimonial = ({
  quote,
  author,
  role,
  className = "",
}: TestimonialProps) => {
  return (
    <div
      className={`bg-gray-50 p-6 rounded-lg border border-gray-100 ${className}`}
    >
      <div className="flex flex-col space-y-4">
        <div className="text-lg text-gray-700 italic leading-relaxed">
          "{quote}"
        </div>
        <div className="flex items-center">
          <div className="w-1 h-8 bg-amber-500 mr-3"></div>
          <div>
            <div className="font-semibold">{author}</div>
            {role && <div className="text-sm text-gray-500">{role}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

// Add default export to support both import styles
export default Testimonial;

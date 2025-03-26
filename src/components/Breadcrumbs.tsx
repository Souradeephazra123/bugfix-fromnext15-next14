import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
  active?: boolean;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <div className="bg-gray-100 py-3 border-b border-gray-200">
      <div className="container mx-auto px-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            {items.map((item, index) => (
              <li key={index} className="inline-flex items-center">
                {index > 0 && <span className="mx-2 text-gray-400">/</span>}
                {item.active ? (
                  <span className="text-gray-500" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={
                      item.href === "/about/team" ? "/about#team" : item.href
                    }
                    className="text-[#C9A54E] hover:text-[#b08f3d]"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}

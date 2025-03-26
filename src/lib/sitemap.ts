export const sitemap = {
  home: {
    url: "/",
    title: "Schapira CPA - Manufacturing Financial Specialists",
    children: {
      services: {
        url: "/services",
        title: "Manufacturing Financial Services",
        children: {
          rd_tax_credits: {
            url: "/services/rd-tax-credits",
            title: "R&D Tax Credits for Manufacturers",
          },
          manufacturing_tax: {
            url: "/services/manufacturing-tax",
            title: "Manufacturing Tax Services",
          },
          growth_financing: {
            url: "/services/growth-financing",
            title: "Growth Financing for Manufacturers",
          },
          cost_accounting: {
            url: "/services/cost-accounting",
            title: "Cost Accounting for Manufacturers",
          },
        },
      },
      calculators: {
        url: "/calculators",
        title: "Manufacturing Financial Calculators",
        children: {
          benchmarking_dashboard: {
            url: "/calculators/benchmarking-dashboard",
            title: "Manufacturing Financial Benchmarking Dashboard",
          },
          business_valuation: {
            url: "/calculators/manufacturing-valuation",
            title: "Manufacturing Business Valuation Calculator",
          },
          financial_ratio: {
            url: "/calculators/financial-ratio",
            title: "Financial Ratio Calculator for Manufacturers",
          },
          tax_savings: {
            url: "/calculators/tax-savings",
            title: "Tax Savings Calculator for Manufacturers",
          },
          cash_flow: {
            url: "/calculators/cash-flow-forecast",
            title: "Cash Flow Forecast and Working Capital Planner",
          },
          cost_reduction: {
            url: "/calculators/cost-reduction",
            title: "Operational Efficiency & Cost Reduction Tools",
            status: "planned",
          },
        },
      },
      portfolio: {
        url: "/portfolio",
        title: "Manufacturing Client Portfolio",
        children: {
          precision_metal: {
            url: "/portfolio/precision-metal",
            title: "Precision Metal Products Case Study",
          },
          advanced_composites: {
            url: "/portfolio/advanced-composites",
            title: "Advanced Composites Case Study",
          },
          harvest_foods: {
            url: "/portfolio/harvest-foods",
            title: "Harvest Foods Case Study",
          },
        },
      },
      resources: {
        url: "/resources",
        title: "Manufacturing Financial Resources",
        children: {
          savings_calculators: {
            url: "/resources/savings-calculators",
            title: "Manufacturing Savings Calculators Guide",
          },
          financial_ratios: {
            url: "/resources/financial-ratios",
            title: "Financial Ratios for Manufacturing",
          },
          tax_planning: {
            url: "/resources/tax-planning",
            title: "Tax Planning Guide for Manufacturers",
          },
          blog: {
            url: "/resources/blog",
            title: "Manufacturing Financial Insights Blog",
            children: {
              benchmarking_success: {
                url: "/resources/blog/unlocking-manufacturing-success-financial-benchmarking",
                title:
                  "Unlocking Manufacturing Success: How Financial Benchmarking Drives Performance",
              },
            },
          },
        },
      },
      profit_method: {
        url: "/profit-method",
        title: "The ProFit Method",
        children: {
          roi_driven_strategy: {
            url: "/profit-method/roi-driven-strategy",
            title: "ROI-Driven Strategy | The ProFit Method",
          },
          growth_planning_framework: {
            url: "/profit-method/growth-planning-framework",
            title: "Growth Planning Framework | The ProFit Method",
          },
          quarterly_business_reviews: {
            url: "/profit-method/quarterly-business-reviews",
            title: "Quarterly Business Reviews | The ProFit Method",
            status: "planned",
          },
        },
      },
      about: {
        url: "/about",
        title: "About Schapira CPA",
        status: "planned",
      },
      contact: {
        url: "/contact",
        title: "Contact Schapira CPA",
      },
      consultation: {
        url: "/consultation",
        title: "Schedule a Consultation",
      },
      client_portal: {
        url: "/client-portal",
        title: "Client Portal Login",
      },
      admin: {
        url: "/admin",
        title: "Admin Portal",
        restricted: true,
      },
    },
  },
};

// Helper functions remain the same
export function findNodeByUrl(url: string): any {
  // Normalize the URL by removing trailing slash
  const normalizedUrl =
    url.endsWith("/") && url !== "/" ? url.slice(0, -1) : url;

  function search(node: any, path: any[] = []): any {
    // Check if this is the node we're looking for
    if (node.url === normalizedUrl) {
      return { node, path };
    }

    // If this node has children, search them
    if (node.children) {
      for (const [key, child] of Object.entries(node.children)) {
        const result = search(child, [...path, node]);
        if (result) return result;
      }
    }

    // Not found in this branch
    return null;
  }

  return search(sitemap.home);
}

export function getBreadcrumbItems(
  url: string,
): { title: string; url: string }[] {
  const result = findNodeByUrl(url);

  if (!result) return [{ title: "Home", url: "/" }];

  const breadcrumbs = [
    { title: "Home", url: "/" },
    ...result.path.map((node: any) => ({
      title: node.title,
      url: node.url,
    })),
    { title: result.node.title, url: result.node.url },
  ];

  // Remove duplicates (in case Home is in the path)
  return breadcrumbs.filter(
    (item, index, self) => index === self.findIndex((t) => t.url === item.url),
  );
}

export function getRelatedPages(
  url: string,
  limit = 3,
): { title: string; url: string }[] {
  const result = findNodeByUrl(url);
  if (!result) return [];

  // Get siblings (pages at the same level)
  const siblings: { title: string; url: string }[] = [];

  // If we have a parent, get its children
  if (result.path.length > 0) {
    const parent = result.path[result.path.length - 1];

    if (parent.children) {
      for (const [key, child] of Object.entries(parent.children)) {
        if (
          child.url !== result.node.url &&
          !child.restricted &&
          child.status !== "planned"
        ) {
          siblings.push({ title: child.title, url: child.url });
        }
      }
    }
  }

  // If we don't have enough siblings, get pages from the same section
  const relatedPages = [...siblings];

  if (relatedPages.length < limit && result.path.length > 1) {
    const section = result.path[1]; // Get the main section (Services, Resources, etc.)

    if (section && section.children) {
      for (const [key, child] of Object.entries(section.children)) {
        if (
          !relatedPages.some((page) => page.url === child.url) &&
          child.url !== result.node.url &&
          !child.restricted &&
          child.status !== "planned"
        ) {
          relatedPages.push({ title: child.title, url: child.url });
        }

        if (relatedPages.length >= limit) break;
      }
    }
  }

  return relatedPages.slice(0, limit);
}

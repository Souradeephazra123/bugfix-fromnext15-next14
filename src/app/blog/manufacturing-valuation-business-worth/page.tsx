import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { generateMetadata } from "@/lib/metadata"
import { PageHeader } from "@/components/page-header"
import { ContactCTA } from "@/components/contact-cta"

export const metadata: Metadata = generateMetadata({
  title: "Manufacturing Business Valuation: Determining Your Company's Worth",
  description:
    "Learn the key methods and factors that determine a manufacturing business's value, from asset valuation to financial analysis and market comparables.",
  keywords: [
    "manufacturing business valuation",
    "business worth",
    "manufacturing company value",
    "valuation methods",
    "asset valuation",
    "EBITDA multiples",
    "manufacturing M&A",
  ],
  canonicalUrl: "/blog/manufacturing-valuation-business-worth",
})

export default function ManufacturingValuationBusinessWorth() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <PageHeader
            title="Manufacturing Business Valuation: Determining Your Company's Worth"
            description="Understanding the true value of your manufacturing business is essential for strategic planning, exit strategies, and growth initiatives."
          />

          <div className="mb-8">
            <Image
              src="/placeholder.svg?height=500&width=800"
              alt="Manufacturing business valuation"
              width={800}
              height={500}
              className="rounded-lg object-cover w-full"
              priority
            />
          </div>

          <div className="flex items-center mb-8 space-x-4">
            <Image
              src="/placeholder.svg?height=60&width=60"
              alt="Author profile"
              width={60}
              height={60}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold">David Schapira, CPA</p>
              <p className="text-sm text-gray-600">Published: March 19, 2024 • 18 min read</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 id="introduction">Understanding Manufacturing Business Valuation</h2>
            <p>
              Whether you're planning for succession, considering a merger or acquisition, seeking investment, or simply
              want to benchmark your company's performance, understanding the true value of your manufacturing business
              is essential. However, manufacturing companies present unique valuation challenges due to their
              capital-intensive nature, specialized assets, and industry-specific value drivers.
            </p>

            <p>
              This comprehensive guide explores the key methods, factors, and considerations that determine a
              manufacturing business's worth, providing you with the insights needed to accurately assess your company's
              value in today's market.
            </p>

            <h2 id="importance">Why Accurate Valuation Matters</h2>
            <p>
              An accurate business valuation serves multiple critical purposes for manufacturing company owners and
              stakeholders:
            </p>
            <ul>
              <li>
                <strong>Exit Planning:</strong> Understanding your company's value is essential for developing a
                realistic exit strategy.
              </li>
              <li>
                <strong>Succession Planning:</strong> Facilitates fair transitions when transferring ownership to family
                members or key employees.
              </li>
              <li>
                <strong>Mergers & Acquisitions:</strong> Provides a foundation for negotiating fair purchase or sale
                terms.
              </li>
              <li>
                <strong>Capital Raising:</strong> Helps secure appropriate financing or investment based on true
                business value.
              </li>
              <li>
                <strong>Strategic Planning:</strong> Identifies value drivers and areas for improvement to increase
                company worth.
              </li>
              <li>
                <strong>Partner Disputes or Buyouts:</strong> Ensures fair resolution when partners need to separate.
              </li>
              <li>
                <strong>Estate and Tax Planning:</strong> Critical for minimizing tax liabilities in ownership
                transfers.
              </li>
            </ul>

            <h2 id="valuation-methods">Primary Valuation Methods for Manufacturing Businesses</h2>
            <p>
              Several valuation approaches are commonly used for manufacturing businesses, each with distinct advantages
              and limitations. The most accurate valuations typically incorporate multiple methods to arrive at a
              comprehensive value range.
            </p>

            <h3>1. Asset-Based Approach</h3>
            <p>
              The asset-based approach determines a company's value based on the net value of its assets minus
              liabilities. This method is particularly relevant for manufacturing businesses due to their significant
              tangible assets.
            </p>

            <h4>Book Value Method</h4>
            <p>The simplest asset-based approach uses the company's balance sheet to calculate:</p>
            <p className="font-medium">Book Value = Total Assets - Total Liabilities</p>
            <p>
              However, this method often understates a manufacturing company's value as it uses historical costs rather
              than current market values and may not account for intangible assets.
            </p>

            <h4>Adjusted Book Value Method</h4>
            <p>
              This more sophisticated approach adjusts asset and liability values to reflect current market conditions:
            </p>
            <ul>
              <li>Real estate is appraised at current market value</li>
              <li>Equipment and machinery are valued at replacement cost less depreciation</li>
              <li>Inventory is adjusted to reflect current values</li>
              <li>Intangible assets (patents, proprietary processes, customer relationships) are included</li>
              <li>Contingent liabilities are recognized</li>
            </ul>

            <h4>Liquidation Value</h4>
            <p>
              This method estimates the net proceeds from selling all assets and settling all liabilities in a
              compressed timeframe. It typically represents the floor value of a manufacturing business.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h4 className="text-blue-800 font-semibold mb-2">When to Use the Asset-Based Approach</h4>
              <p>The asset-based approach is most appropriate for:</p>
              <ul className="mt-2">
                <li>Asset-intensive manufacturing businesses</li>
                <li>Companies with significant real estate or specialized equipment</li>
                <li>Businesses with poor or inconsistent earnings</li>
                <li>Companies being valued for liquidation purposes</li>
              </ul>
            </div>

            <h3>2. Income Approach</h3>
            <p>
              The income approach values a business based on its ability to generate future economic benefits for its
              owners. This approach is particularly relevant for profitable manufacturing businesses with established
              earnings history.
            </p>

            <h4>Capitalization of Earnings Method</h4>
            <p>This method converts a single representative earnings figure into value using a capitalization rate:</p>
            <p className="font-medium">Business Value = Normalized Earnings ÷ Capitalization Rate</p>
            <p>
              The capitalization rate reflects the risk associated with the business and is typically derived from the
              required rate of return minus the expected long-term growth rate.
            </p>

            <h4>Discounted Cash Flow (DCF) Method</h4>
            <p>
              The DCF method projects future cash flows over a specific period (typically 5-10 years) and discounts them
              to present value using a discount rate that reflects the time value of money and business risk:
            </p>
            <ol>
              <li>Project future cash flows</li>
              <li>Determine an appropriate discount rate (often using Weighted Average Cost of Capital)</li>
              <li>Calculate the terminal value (representing value beyond the projection period)</li>
              <li>Discount all projected cash flows and the terminal value to present value</li>
              <li>Sum the present values to determine business value</li>
            </ol>
            <p>
              The DCF method is particularly valuable for manufacturing businesses with significant growth potential or
              those implementing major operational changes that will impact future cash flows.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <h4 className="font-semibold mb-2">Key Considerations for Manufacturing DCF Analysis</h4>
              <ul className="text-sm">
                <li>Capital expenditure requirements for equipment replacement and technology upgrades</li>
                <li>Working capital needs, particularly for inventory and accounts receivable</li>
                <li>Industry cyclicality and its impact on future revenue projections</li>
                <li>Potential cost changes for raw materials, labor, and energy</li>
                <li>Impact of automation and technology investments on future productivity</li>
              </ul>
            </div>

            <h3>3. Market Approach</h3>
            <p>
              The market approach values a business by comparing it to similar businesses that have recently sold or to
              industry valuation multiples.
            </p>

            <h4>Comparable Company Analysis</h4>
            <p>This method examines transaction multiples from the sale of similar manufacturing businesses:</p>
            <ul>
              <li>Identify comparable transactions in the same manufacturing subsector</li>
              <li>Calculate relevant valuation multiples (e.g., EV/EBITDA, EV/Revenue)</li>
              <li>Apply appropriate multiples to the subject company's financial metrics</li>
              <li>Adjust for company-specific factors and differences from comparable companies</li>
            </ul>

            <h4>Industry Rule of Thumb</h4>
            <p>Many manufacturing subsectors have developed "rules of thumb" based on industry experience:</p>
            <ul>
              <li>Metal fabricators: 4-6x adjusted EBITDA plus inventory value</li>
              <li>Plastic manufacturers: 3.5-5x adjusted EBITDA</li>
              <li>Food processors: 5-7x adjusted EBITDA</li>
              <li>Contract manufacturers: 3-5x adjusted EBITDA</li>
            </ul>
            <p>
              While these rules of thumb can provide a quick reference point, they should never be used as the sole
              valuation method as they don't account for company-specific factors.
            </p>

            <h2 id="key-factors">Key Factors Affecting Manufacturing Business Value</h2>
            <p>
              Beyond the basic valuation methods, several factors significantly impact a manufacturing company's value:
            </p>

            <h3>1. Financial Performance and Trends</h3>
            <ul>
              <li>
                <strong>Revenue Growth:</strong> Consistent growth trends command higher multiples
              </li>
              <li>
                <strong>Profit Margins:</strong> Companies with above-industry-average margins are more valuable
              </li>
              <li>
                <strong>Cash Flow Stability:</strong> Predictable, recurring cash flows reduce risk and increase value
              </li>
              <li>
                <strong>Working Capital Efficiency:</strong> Efficient inventory and receivables management enhances
                value
              </li>
              <li>
                <strong>Capital Expenditure Requirements:</strong> Lower ongoing CapEx needs increase value
              </li>
            </ul>

            <h3>2. Customer Concentration and Relationships</h3>
            <p>Customer concentration significantly impacts risk and valuation:</p>
            <ul>
              <li>High concentration (>20% of revenue from a single customer) typically reduces value</li>
              <li>Long-term contracts with key customers can mitigate concentration risk</li>
              <li>Diverse customer base across multiple industries enhances value</li>
              <li>Strong, documented customer relationships increase value</li>
            </ul>

            <h3>3. Operational Factors</h3>
            <ul>
              <li>
                <strong>Production Capacity and Utilization:</strong> Optimal capacity utilization with room for growth
              </li>
              <li>
                <strong>Technology and Automation Level:</strong> Modern, efficient equipment commands premium values
              </li>
              <li>
                <strong>Quality Control Systems:</strong> Robust quality systems reduce risk and increase value
              </li>
              <li>
                <strong>Supply Chain Resilience:</strong> Diversified supplier base and strong relationships
              </li>
              <li>
                <strong>Operational Documentation:</strong> Well-documented processes and procedures
              </li>
            </ul>

            <h3>4. Workforce and Management</h3>
            <ul>
              <li>
                <strong>Management Depth:</strong> Strong second-tier management increases transferable value
              </li>
              <li>
                <strong>Workforce Skills:</strong> Skilled workforce with low turnover enhances value
              </li>
              <li>
                <strong>Owner Dependence:</strong> High owner dependence reduces value
              </li>
              <li>
                <strong>Succession Planning:</strong> Clear succession plans for key positions
              </li>
            </ul>

            <h3>5. Intellectual Property and Competitive Advantages</h3>
            <ul>
              <li>
                <strong>Patents and Proprietary Technology:</strong> Protected IP significantly enhances value
              </li>
              <li>
                <strong>Proprietary Processes:</strong> Unique manufacturing processes that create competitive
                advantages
              </li>
              <li>
                <strong>Brand Strength:</strong> Recognized brand in the industry or market
              </li>
              <li>
                <strong>Certifications and Approvals:</strong> Industry certifications that create barriers to entry
              </li>
            </ul>

            <h3>6. Market Position and Industry Outlook</h3>
            <ul>
              <li>
                <strong>Market Share:</strong> Dominant position in specific market segments
              </li>
              <li>
                <strong>Industry Growth Prospects:</strong> Companies in growing sectors command higher multiples
              </li>
              <li>
                <strong>Competitive Landscape:</strong> Level of competition and market consolidation trends
              </li>
              <li>
                <strong>Regulatory Environment:</strong> Potential regulatory changes that could impact operations
              </li>
            </ul>

            <div className="bg-blue-50 p-6 rounded-lg my-8">
              <h4 className="text-blue-800 font-semibold mb-2">Value Enhancement Opportunities</h4>
              <p>A professional valuation often identifies specific opportunities to increase business value:</p>
              <ul className="mt-2">
                <li>Improving operational efficiency to increase EBITDA margins</li>
                <li>Reducing customer concentration through diversification strategies</li>
                <li>Implementing succession planning for key management positions</li>
                <li>Documenting and protecting intellectual property and proprietary processes</li>
                <li>Optimizing working capital management to improve cash flow</li>
                <li>Investing in automation and technology to increase productivity</li>
              </ul>
            </div>

            <h2 id="financial-adjustments">Normalizing Financial Statements</h2>
            <p>
              Before applying valuation methods, financial statements must be "normalized" to reflect the true economic
              reality of the business. Common adjustments for manufacturing businesses include:
            </p>

            <h3>Income Statement Adjustments</h3>
            <ul>
              <li>
                <strong>Owner Compensation:</strong> Adjusting to market-rate compensation for owners/executives
              </li>
              <li>
                <strong>Non-recurring Expenses:</strong> Removing one-time expenses like legal settlements or
                restructuring costs
              </li>
              <li>
                <strong>Related Party Transactions:</strong> Adjusting non-arm's length transactions to market rates
              </li>
              <li>
                <strong>Depreciation Methods:</strong> Standardizing depreciation to reflect economic reality
              </li>
              <li>
                <strong>Inventory Accounting:</strong> Adjusting for LIFO/FIFO differences
              </li>
            </ul>

            <h3>Balance Sheet Adjustments</h3>
            <ul>
              <li>
                <strong>Real Estate:</strong> Adjusting to current market value
              </li>
              <li>
                <strong>Equipment and Machinery:</strong> Adjusting to fair market value or replacement cost less
                depreciation
              </li>
              <li>
                <strong>Inventory:</strong> Adjusting for obsolete or slow-moving inventory
              </li>
              <li>
                <strong>Intangible Assets:</strong> Recognizing unrecorded intangible assets
              </li>
              <li>
                <strong>Contingent Liabilities:</strong> Recognizing potential future obligations
              </li>
            </ul>

            <h2 id="industry-multiples">Manufacturing Industry Valuation Multiples</h2>
            <p>
              Valuation multiples vary significantly across manufacturing subsectors based on growth prospects, capital
              intensity, and profit margins. Here are typical EBITDA multiples for various manufacturing segments:
            </p>

            <table className="min-w-full border-collapse border border-gray-300 my-4">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Manufacturing Segment</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Typical EBITDA Multiple Range</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Aerospace & Defense Components</td>
                  <td className="border border-gray-300 px-4 py-2">6.0 - 8.0x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Automotive Parts</td>
                  <td className="border border-gray-300 px-4 py-2">4.5 - 6.5x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Building Products</td>
                  <td className="border border-gray-300 px-4 py-2">5.0 - 7.0x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Electronics Manufacturing</td>
                  <td className="border border-gray-300 px-4 py-2">5.5 - 7.5x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Food Processing</td>
                  <td className="border border-gray-300 px-4 py-2">5.0 - 7.0x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Industrial Machinery</td>
                  <td className="border border-gray-300 px-4 py-2">4.5 - 6.5x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Medical Device Manufacturing</td>
                  <td className="border border-gray-300 px-4 py-2">7.0 - 10.0x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Metal Fabrication</td>
                  <td className="border border-gray-300 px-4 py-2">4.0 - 6.0x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Packaging Manufacturing</td>
                  <td className="border border-gray-300 px-4 py-2">5.0 - 7.0x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Plastics & Rubber Products</td>
                  <td className="border border-gray-300 px-4 py-2">4.5 - 6.5x</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Precision Machining</td>
                  <td className="border border-gray-300 px-4 py-2">4.5 - 6.5x</td>
                </tr>
              </tbody>
            </table>

            <p>
              These multiples serve as general guidelines and can vary based on company-specific factors such as size,
              growth rate, customer concentration, and proprietary technology.
            </p>

            <h2 id="valuation-process">The Valuation Process</h2>
            <p>A comprehensive manufacturing business valuation typically follows these steps:</p>

            <h3>1. Information Gathering</h3>
            <ul>
              <li>3-5 years of financial statements (income statements, balance sheets, cash flow statements)</li>
              <li>Tax returns for the same period</li>
              <li>Detailed asset lists with purchase dates and costs</li>
              <li>Customer and supplier information</li>
              <li>Organization charts and employee information</li>
              <li>Lease agreements and contracts</li>
              <li>Information on intellectual property and proprietary processes</li>
            </ul>

            <h3>2. Company Analysis</h3>
            <ul>
              <li>Operational assessment</li>
              <li>Management interviews</li>
              <li>Facility tour and asset inspection</li>
              <li>Review of production processes and capacity</li>
              <li>Analysis of customer and supplier relationships</li>
            </ul>

            <h3>3. Financial Analysis</h3>
            <ul>
              <li>Normalization of financial statements</li>
              <li>Trend analysis of key financial metrics</li>
              <li>Comparison to industry benchmarks</li>
              <li>Working capital analysis</li>
              <li>Capital expenditure requirements assessment</li>
            </ul>

            <h3>4. Industry and Market Analysis</h3>
            <ul>
              <li>Industry growth trends and outlook</li>
              <li>Competitive landscape assessment</li>
              <li>Regulatory environment review</li>
              <li>Market disruption risks and opportunities</li>
              <li>Analysis of comparable company transactions</li>
            </ul>

            <h3>5. Valuation Analysis</h3>
            <ul>
              <li>Application of multiple valuation methods</li>
              <li>Determination of appropriate discount and capitalization rates</li>
              <li>Development of financial projections for DCF analysis</li>
              <li>Calculation of appropriate valuation multiples</li>
              <li>Reconciliation of different valuation approaches</li>
            </ul>

            <h3>6. Valuation Report</h3>
            <ul>
              <li>Detailed explanation of methodologies used</li>
              <li>Analysis of key value drivers and risk factors</li>
              <li>Presentation of valuation range rather than single point value</li>
              <li>Sensitivity analysis showing impact of key assumptions</li>
              <li>Recommendations for value enhancement</li>
            </ul>

            <h2 id="common-challenges">Common Valuation Challenges for Manufacturing Businesses</h2>
            <p>Manufacturing businesses present several unique valuation challenges:</p>

            <h3>Cyclicality</h3>
            <p>
              Many manufacturing sectors experience significant cyclical fluctuations, making it difficult to determine
              "normalized" earnings. Valuation professionals typically analyze performance across a full business cycle
              or use weighted averages that give more emphasis to recent years.
            </p>

            <h3>Capital Intensity</h3>
            <p>
              Manufacturing businesses often require significant ongoing capital expenditures to maintain
              competitiveness. Accurate valuation requires distinguishing between maintenance CapEx (required to
              maintain current operations) and growth CapEx (investments to expand capacity or capabilities).
            </p>

            <h3>Technology Obsolescence</h3>
            <p>
              Rapid technological change can quickly render manufacturing equipment obsolete. Valuation must consider
              the current state of technology, remaining useful life of key equipment, and future investment
              requirements.
            </p>

            <h3>Environmental Liabilities</h3>
            <p>
              Manufacturing facilities may have environmental issues that create contingent liabilities. These potential
              future costs must be identified and quantified in the valuation process.
            </p>

            <h3>Intellectual Property Valuation</h3>
            <p>
              Many manufacturing businesses derive significant value from proprietary processes, patents, or know-how
              that can be difficult to quantify. Specialized approaches may be needed to value these intangible assets.
            </p>

            <h2 id="conclusion">Key Takeaways for Manufacturing Business Owners</h2>
            <p>
              Understanding your manufacturing business's value is essential for strategic planning, exit preparation,
              and maximizing long-term returns. Key takeaways include:
            </p>
            <ol>
              <li>
                Valuation is both an art and a science, requiring both quantitative analysis and qualitative judgment
              </li>
              <li>Multiple valuation methods should be used to develop a comprehensive value range</li>
              <li>Industry-specific factors significantly impact manufacturing business values</li>
              <li>Normalizing financial statements is critical for accurate valuation</li>
              <li>Value drivers can be enhanced over time through strategic planning</li>
              <li>Professional valuation expertise specific to manufacturing is invaluable</li>
            </ol>
            <p>
              By understanding the valuation process and key value drivers, manufacturing business owners can make
              informed decisions that enhance company value and achieve their long-term objectives.
            </p>

            <div className="bg-gray-100 p-6 rounded-lg my-8">
              <h3 className="font-semibold mb-2">Expert Manufacturing Valuation Services</h3>
              <p>
                At Schapira CPA, we specialize in valuation services for manufacturing businesses. Our team combines
                deep industry knowledge with valuation expertise to provide accurate, defensible valuations that stand
                up to scrutiny from buyers, sellers, lenders, and tax authorities.
              </p>
              <p className="mt-4">
                <Link href="/contact" className="text-blue-600 font-medium hover:underline">
                  Schedule a consultation
                </Link>{" "}
                to discuss your manufacturing business valuation needs and how we can help you understand and maximize
                your company's worth.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-1">
          <div className="sticky top-24">
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#introduction" className="text-blue-600 hover:underline">
                    Understanding Manufacturing Business Valuation
                  </a>
                </li>
                <li>
                  <a href="#importance" className="text-blue-600 hover:underline">
                    Why Accurate Valuation Matters
                  </a>
                </li>
                <li>
                  <a href="#valuation-methods" className="text-blue-600 hover:underline">
                    Primary Valuation Methods
                  </a>
                </li>
                <li>
                  <a href="#key-factors" className="text-blue-600 hover:underline">
                    Key Factors Affecting Value
                  </a>
                </li>
                <li>
                  <a href="#financial-adjustments" className="text-blue-600 hover:underline">
                    Normalizing Financial Statements
                  </a>
                </li>
                <li>
                  <a href="#industry-multiples" className="text-blue-600 hover:underline">
                    Industry Valuation Multiples
                  </a>
                </li>
                <li>
                  <a href="#valuation-process" className="text-blue-600 hover:underline">
                    The Valuation Process
                  </a>
                </li>
                <li>
                  <a href="#common-challenges" className="text-blue-600 hover:underline">
                    Common Valuation Challenges
                  </a>
                </li>
                <li>
                  <a href="#conclusion" className="text-blue-600 hover:underline">
                    Key Takeaways
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg font-semibold mb-4">Related Services</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/ma-advisory" className="text-blue-600 hover:underline block">
                    M&A Advisory Services
                  </Link>
                </li>
                <li>
                  <Link href="/services/financial-analysis" className="text-blue-600 hover:underline block">
                    Financial Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/services/strategic-tax-planning" className="text-blue-600 hover:underline block">
                    Strategic Tax Planning
                  </Link>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-4">Related Resources</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/manufacturing-valuation" className="text-blue-600 hover:underline block">
                    Manufacturing Valuation Calculator
                  </Link>
                </li>
                <li>
                  <Link href="/resources/financial-ratios" className="text-blue-600 hover:underline block">
                    Manufacturing Financial Ratios Guide
                  </Link>
                </li>
                <li>
                  <Link href="/resources/manufacturing-benchmarks" className="text-blue-600 hover:underline block">
                    Industry Benchmarking Data
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <ContactCTA
        title="Need a Professional Manufacturing Business Valuation?"
        description="Our team of valuation specialists can help you determine your manufacturing company's true worth with a comprehensive, defensible valuation."
        buttonText="Schedule a Consultation"
        buttonLink="/contact"
      />
    </div>
  )
}


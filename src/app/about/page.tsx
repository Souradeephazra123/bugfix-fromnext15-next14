import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { generateMetadata } from "@/lib/metadata";

export const metadata = generateMetadata({
  title: "About Schapira CPA - Brooklyn's Manufacturing Accounting Experts",
  description:
    "Meet Schapira CPA, Brooklyn's premier accounting firm for manufacturers. Our team of certified professionals helps businesses make every financial decision profitable.",
  canonical: "/about",
  openGraph: {
    images: [
      {
        url: "/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "About Schapira CPA - Brooklyn's Manufacturing Accounting Experts",
      },
    ],
    type: "website",
  },
});

export default function AboutPage() {
  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Mendel Schapira",
      title: "Founder & Chief CPA",
      bio: '"We might know money, but we don\'t nickel and dime. Because I built Schapira on an all-year, all-inclusive relationship model."',
      image: "/placeholder-team-1.jpg",
    },
    {
      id: 2,
      name: "Shloimy Roth",
      title: "Senior Tax Manager",
      bio: "\"I'm that bookish, data-hungry guy who asks the questions others miss. If there's an angle to saving you money, know I'm working it.\"",
      image: "/placeholder-team-2.jpg",
    },
    {
      id: 3,
      name: "Rifky Eidlisz",
      title: "1:1 Accountant & Client Rep",
      bio: '"More than just an accountant, you want to keep good, smart people in your corner. My goal is to find every way to be of service."',
      image: "/placeholder-team-3.jpg",
    },
    {
      id: 4,
      name: "Rachel Lefkowitz",
      title: "Accounting Assistant & Financing Specialist",
      bio: "\"It takes money to make money. But it's even better if that money can come from outside your company's cash flow. That's my alley.\"",
      image: "/placeholder-team-4.jpg",
    },
  ];

  // Service areas data
  const serviceAreas = [
    "Brooklyn",
    "Manhattan",
    "Queens",
    "The Bronx",
    "Staten Island",
    "Long Island",
    "New Jersey",
    "Connecticut",
  ];

  // Values data
  const values = [
    {
      letter: "P",
      title: "Proactivity",
      description:
        "We anticipate needs rather than merely responding to them, providing forward-thinking solutions.",
    },
    {
      letter: "T",
      title: "Trust",
      description:
        "We build relationships based on transparency, reliability, and unwavering integrity.",
    },
    {
      letter: "D",
      title: "Dedication",
      description:
        "We commit ourselves fully to your success, going above and beyond expectations.",
    },
    {
      letter: "E",
      title: "Expertise",
      description:
        "We maintain the highest standards of professional knowledge and specialized skill.",
    },
    {
      letter: "C",
      title: "Collaboration",
      description:
        "We work alongside you as partners, sharing knowledge and aligning with your goals.",
    },
  ];

  // Local stats data
  const localStats = [
    { number: "10+", label: "Years Serving NYC" },
    { number: "100+", label: "Local Clients" },
    { number: "5", label: "Boroughs Covered" },
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      content:
        "It's a pleasure dealing with Schapira CPA. The team is professional, knowledgeable, and always goes above and beyond to help my business. I highly recommend them to any business owner looking to take their financial growth to new heights.",
      author: "John Smith",
      company: "Manufacturing Client",
      image: "/placeholder-client-1.jpg",
    },
    {
      id: 2,
      content:
        "I am extremely satisfied with Schapira's expertise in obtaining tax savings through R&D credits. Their knowledge of the tax laws and diligent assessment of eligible expenses have resulted in significant savings for my manufacturing business.",
      author: "Sarah Johnson",
      company: "Tech Manufacturing",
      image: "/placeholder-client-2.jpg",
    },
  ];

  // Review platforms data
  const reviewPlatforms = [
    { name: "Google", icon: "G", stars: 5 },
    { name: "Yelp", icon: "Y", stars: 5 },
    { name: "BBB", icon: "B", stars: 5 },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="relative bg-[#2A2A2A] text-white py-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 relative pb-4">
              About Schapira CPA
              <span className="absolute bottom-0 left-0 w-20 h-1 bg-[#C9A54E]"></span>
            </h1>
            <p className="text-xl max-w-[600px]">
              Meet the team behind Brooklyn&apos;s premier accounting firm for
              manufacturers - dedicated to helping you make every financial
              decision profitable.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-[30%] clip-triangle bg-[#C9A54E] opacity-80"></div>
      </section>

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "About Us", href: "/about", active: true },
        ]}
      />

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 relative inline-block pb-3">
              Our Story
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#C9A54E]"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
              For over 10 years, we&apos;ve been transforming how manufacturers
              approach their finances.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-[45%] relative">
              <div className="relative">
                <div className="absolute -top-5 -left-5 w-full h-full border-2 border-[#C9A54E] rounded-lg z-0"></div>
                <Image
                  src="/placeholder-team.jpg"
                  alt="Schapira CPA Team"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-xl relative z-10"
                />
              </div>
            </div>

            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-6 text-[#2A2A2A]">
                More Than Just Accountants
              </h3>
              <p className="text-gray-600 mb-4">
                Schapira CPA was founded with a vision to create a different
                kind of accounting firm - one that goes beyond tax preparation
                and annual compliance to become a true strategic partner in our
                clients&apos; success.
              </p>

              <p className="text-gray-600 mb-4">
                Our specialization in manufacturing developed organically as we
                recognized the unique financial challenges these businesses
                face. From optimizing cost structures to identifying hidden
                profitability opportunities, we discovered our services made the
                most dramatic impact in this sector.
              </p>

              <div className="py-6 px-8 bg-gray-100 border-l-4 border-[#C9A54E] my-8 relative">
                <span className="absolute top-3 left-4 text-6xl text-[#C9A54E] opacity-30 font-serif">
                  "
                </span>
                <p className="italic text-lg relative z-10 mb-2">
                  We might know money, but we don&apos;t nickel and dime.
                  Because I built Schapira on an all-year, all-inclusive
                  relationship model. We play the long game alongside you,
                  steadily growing a high-value business on solid fundamentals
                  and smart executive action.
                </p>
                <p className="font-bold">
                  — Mendel Schapira, Founder & Chief CPA
                </p>
              </div>

              <p className="text-gray-600">
                Today, we&apos;re proud to serve manufacturers across the
                greater New York area, helping them navigate financial
                complexities, optimize operations, and achieve sustainable
                growth through our comprehensive approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section className="py-20 bg-gray-100 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 relative z-10">
            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6 relative inline-block pb-3">
                Our Mission
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#C9A54E]"></span>
              </h3>
              <p className="text-gray-600 mb-6">
                Our mission is to empower manufacturers and businesses to
                achieve financial success through customized accounting
                solutions, strategic guidance, and a commitment to building
                lasting relationships founded on trust and integrity.
              </p>

              <p className="text-gray-600">
                We believe in transforming the traditional accountant-client
                relationship from a transactional service into a true
                partnership. Every day, our team works to ensure that each
                financial decision you make leads to increased profitability and
                sustainable growth.
              </p>
            </div>

            <div className="lg:w-1/2">
              <h3 className="text-3xl font-bold mb-6 relative inline-block pb-3">
                Our Core Values
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#C9A54E]"></span>
              </h3>
              <p className="text-gray-600 mb-6">
                These principles guide everything we do and define our approach
                to serving our clients.
              </p>

              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 min-w-12 bg-[#C9A54E] rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                      {value.letter}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">{value.title}</h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-1/3 bg-[#C9A54E] transform skew-x-[-20deg] translate-x-[30%] opacity-15"></div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white" id="team">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 relative inline-block pb-3">
              Meet Our Team
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#C9A54E]"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
              Get to know the strategic minds behind your company&apos;s boldest
              ambitions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Mendel Schapira */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/placeholder-team-1.jpg"
                  alt="Mendel Schapira"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Mendel Schapira</h3>
                <span className="text-[#C9A54E] text-sm font-semibold block mb-3">
                  Founder & Chief CPA
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  "We might know money, but we don&apos;t nickel and dime.
                  Because I built Schapira on an all-year, all-inclusive
                  relationship model."
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Mendel founded Schapira CPA with a vision to transform how
                  accounting firms serve manufacturing businesses. He
                  specializes in strategic financial planning, tax optimization,
                  and growth financing for manufacturers.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>

            {/* Shloimy Roth */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/placeholder-team-2.jpg"
                  alt="Shloimy Roth"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Shloimy Roth</h3>
                <span className="text-[#C9A54E] text-sm font-semibold block mb-3">
                  Senior Tax Manager
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  "I&apos;m that bookish, data-hungry guy who asks the questions
                  others miss. If there&apos;s an angle to saving you money,
                  know I&apos;m working it."
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Shloimy leads our tax planning and compliance services,
                  specializing in identifying often-overlooked tax savings
                  opportunities for manufacturing clients.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>

            {/* Rifky Eidlisz */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/placeholder-team-3.jpg"
                  alt="Rifky Eidlisz"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Rifky Eidlisz</h3>
                <span className="text-[#C9A54E] text-sm font-semibold block mb-3">
                  1:1 Accountant & Client Rep
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  "More than just an accountant, you want to keep good, smart
                  people in your corner. My goal is to find every way to be of
                  service."
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Rifky serves as a dedicated client representative, providing
                  personalized accounting support and strategic guidance.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>

            {/* Rachel Lefkowitz */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/placeholder-team-4.jpg"
                  alt="Rachel Lefkowitz"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Rachel Lefkowitz</h3>
                <span className="text-[#C9A54E] text-sm font-semibold block mb-3">
                  Accounting Assistant & Financing Specialist
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  "It takes money to make money. But it&apos;s even better if
                  that money can come from outside your company&apos;s cash
                  flow. That&apos;s my alley."
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Rachel specializes in helping manufacturing clients secure
                  optimal financing for growth initiatives.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Yossi Rubin */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Yossi Rubin"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Yossi Rubin</h3>
                <span className="text-[#C9A54E] text-sm font-semibold block mb-3">
                  1:1 Accountant & Client Rep
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  "I believe in the Schapira promise of being your partner in
                  the sweat, but not in the equity. All year long, I go the
                  extra mile."
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Yossi provides dedicated accounting support and strategic
                  guidance to his portfolio of clients.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>

            {/* Esty Schiasha */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Esty Schiasha"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Esty Schiasha</h3>
                <span className="text-[#C9A54E] text-sm font-semibold block mb-3">
                  Bookkeeper
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  "I am an information sponge for each of my accounts. By always
                  keeping their details front of mind, I can be more helpful,
                  faster."
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Esty manages day-to-day bookkeeping operations with
                  exceptional attention to detail.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>

            {/* Shragy Pirutinsky */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Shragy Pirutinsky"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Shragy Pirutinsky</h3>
                <span className="text-[#C9A54E] text-sm font-semibold block mb-3">
                  Operations Manager
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  "You'll work with me mostly during onboarding, but I work
                  behind the scenes daily to keep both our companies
                  flourishing."
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Shragy oversees internal operations and client onboarding
                  processes.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>

            {/* Luzer Szimonowitz */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:-translate-y-2 duration-300">
              <div className="h-64 overflow-hidden">
                <Image
                  src="/placeholder.svg"
                  alt="Luzer Szimonowitz"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">Luzer Szimonowitz</h3>
                <span className="text-[#C9A54E] text-sm font-semibold block mb-3">
                  1:1 Accountant & Client Rep
                </span>
                <p className="text-gray-600 text-sm mb-4">
                  "The profit is in the details. While I respect each client, I
                  like to double check things and identify hidden savings and
                  opportunities."
                </p>
                <p className="text-gray-600 text-sm mb-4">
                  Luzer combines meticulous attention to detail with strategic
                  thinking to uncover hidden opportunities for his clients.
                </p>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    in
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-[#C9A54E] hover:text-white transition-colors"
                  >
                    @
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Presence Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 relative inline-block pb-3">
              Our Brooklyn Home
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#C9A54E]"></span>
            </h2>
            <p className="text-lg text-gray-600 max-w-[700px] mx-auto">
              Proudly serving manufacturers throughout the greater New York
              area.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold mb-6 relative inline-block pb-3 text-[#2A2A2A]">
                Deeply Rooted in the New York Business Community
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-[#C9A54E]"></span>
              </h3>

              <p className="text-gray-600 mb-4">
                Located in the heart of Brooklyn, Schapira CPA has built strong
                connections with the local business ecosystem. Our central
                location allows us to serve manufacturers throughout the five
                boroughs, Long Island, New Jersey, and Connecticut.
              </p>

              <p className="text-gray-600 mb-8">
                Our local expertise gives us unique insights into the regional
                business environment, including tax incentives, industry trends,
                and networking opportunities that benefit our clients.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {localStats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <div className="text-4xl font-bold text-[#C9A54E] mb-2">
                      {stat.number}
                    </div>
                    <div className="text-[#2A2A2A]">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4">Areas We Serve</h4>
                <div className="flex flex-wrap gap-3">
                  {serviceAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-white rounded-full text-sm shadow-sm hover:bg-[#C9A54E] hover:text-white transform hover:-translate-y-1 transition-all cursor-pointer"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 h-[400px] rounded-lg overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.3585380333854!2d-73.95662682376226!3d40.70999197139422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25bdf1b5f6535%3A0xb6a430216aded4e!2s33%20Bartlett%20St%2C%20Brooklyn%2C%20NY%2011206!5e0!3m2!1sen!2sus!4v1708879520631!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Schapira CPA Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#2A2A2A] text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 relative inline-block pb-3">
              What Our Clients Say
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#C9A54E]"></span>
            </h2>
            <p className="text-lg max-w-[700px] mx-auto">
              We&apos;re proud of the lasting relationships we&apos;ve built
              with manufacturers across New York.
            </p>
          </div>

          <div className="max-w-[900px] mx-auto">
            <div className="space-y-6 mb-12">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="p-8 bg-white bg-opacity-5 rounded-lg relative"
                >
                  <div className="relative mb-6">
                    <span className="absolute -top-3 -left-4 text-6xl text-[#C9A54E] opacity-30 font-serif">
                      "
                    </span>
                    <p className="italic text-lg relative z-10">
                      {testimonial.content}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold">
                        {testimonial.author}
                      </h4>
                      <span className="text-[#C9A54E] text-sm">
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {reviewPlatforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-[#2A2A2A] text-xl font-bold mx-auto mb-3">
                    {platform.icon}
                  </div>
                  <div className="text-sm mb-2">{platform.name}</div>
                  <div className="flex justify-center">
                    {[...Array(platform.stars)].map((_, i) => (
                      <span key={i} className="text-[#C9A54E] mx-0.5">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-[#2A2A2A]">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Schedule a consultation with our team to discover how our
              specialized services can help your manufacturing business achieve
              greater financial success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#C9A54E] hover:bg-[#b08f3d] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Schedule a Consultation
              </Link>
              <Link
                href="/services"
                className="border-2 border-[#C9A54E] text-[#2A2A2A] hover:bg-[#C9A54E] hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

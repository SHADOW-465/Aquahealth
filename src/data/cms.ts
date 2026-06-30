export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: string;
  features: string[];
  cta: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: "Home RO" | "Commercial RO" | "Countertop" | "Wall Mount";
  price: string;
  features: string[];
  specs: Record<string, string>;
  suitableFor: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Filters & Maintenance" | "Water Quality" | "AMC & Pricing" | "Booking & Service";
}

export interface ReviewItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Before/After" | "Installations" | "Technicians" | "Vans";
  image: string;
  desc: string;
}

export interface BlogItem {
  id: string;
  title: string;
  excerpt: string;
  category: "Water Safety" | "Maintenance" | "Technology" | "Healthy Living";
  date: string;
  readTime: string;
  image: string;
  featured?: boolean;
}

// -------------------------------------------------------------
// 1. SERVICES DATA
// -------------------------------------------------------------
export const SERVICES: ServiceItem[] = [
  {
    id: "ro-installation",
    title: "RO Installation",
    shortDesc: "Expert mounting and connection of all branded & custom water purifiers.",
    longDesc: "Our engineers configure perfect pressure settings, custom plumbing lines, and mount the purifier with zero mess.",
    icon: "PlusSquare",
    features: ["TDS adjustment check", "Piping neatness guarantee", "Inlet pressure calibration"],
    cta: "Book Installation"
  },
  {
    id: "repair",
    title: "Repair & Troubleshooting",
    shortDesc: "Fast diagnostics for leakage, pumps, power modules, or sensor failures.",
    longDesc: "We resolve electrical problems, pump failures, auto-cutoff issues, and filter light warnings in a single visit.",
    icon: "Wrench",
    features: ["Genuine spares", "SMPS/Pump diagnosis", "90-day parts warranty"],
    cta: "Book Repair"
  },
  {
    id: "maintenance",
    title: "General Maintenance",
    shortDesc: "Thorough check, chemical washing, sanitization, and performance test.",
    longDesc: "Ensure water tastes pristine with deep chemical sanitization, TDS metrics check, and internal line flushing.",
    icon: "Sparkles",
    features: ["Tank sterilization", "TDS level monitoring", "Chemical wash of pre-filter"],
    cta: "Book General Service"
  },
  {
    id: "amc",
    title: "Annual Maintenance Contract (AMC)",
    shortDesc: "Complete protection for your water quality with automated visit schedules.",
    longDesc: "Covers scheduled maintenance visits, emergency calls, and filter changes, eliminating unexpected repair expenses.",
    icon: "ShieldCheck",
    features: ["Scheduled filter updates", "Unlimited service calls", "Free spare replacement checks"],
    cta: "Book AMC Plan"
  },
  {
    id: "filter-replacement",
    title: "Filter Replacement",
    shortDesc: "Complete filtration updates (RO Membrane, Carbon, Sediment blocks).",
    longDesc: "We install premium sediment, carbon, post-carbon blocks, and high-rejection membranes suited to your input TDS.",
    icon: "RefreshCw",
    features: ["High-rejection membranes", "Coconut shell carbon blocks", "Optimal TDS calibration"],
    cta: "Book Filter Change"
  },
  {
    id: "primary-filter",
    title: "Primary Filter Replacement",
    shortDesc: "External sediment filter changes to protect internal membranes.",
    longDesc: "Replacing the cheap outer pre-filter every 3-6 months protects downstream carbon filters and the RO membrane.",
    icon: "Layers",
    features: ["5 Micron sediment filters", "Anti-scalant ball addition", "Housing sanitation"],
    cta: "Book Pre-Filter Change"
  },
  {
    id: "tube-replacement",
    title: "Water Tube Replacement",
    shortDesc: "Swapping out yellowed, brittle, or leaking food-grade pipelines.",
    longDesc: "Old tubes gather biofilm and become brittle. We swap them out for heavy-duty food-grade LLDPE tubing.",
    icon: "Share2",
    features: ["FDA-approved food-grade tubing", "High pressure tolerance", "Leak-free push-fit elbows"],
    cta: "Book Tubing Swap"
  },
  {
    id: "tank-cleaning",
    title: "Tank Cleaning & Sterilization",
    shortDesc: "Chlorination and deep chemical sanitation of the water reservoir.",
    longDesc: "Water stored inside plastic tanks can develop algae or bacterial slime. We scrub, sanitize, and sterilize the tank.",
    icon: "Droplet",
    features: ["Food-grade disinfectants", "Odor removal check", "TDS verification"],
    cta: "Book Tank Cleaning"
  },
  {
    id: "leak-repair",
    title: "Leak Repair & Joint Fixes",
    shortDesc: "Resolving annoying drips, line bursts, and fitting issues instantly.",
    longDesc: "Protect your modular kitchen cabinet wood from moisture rot. We fix valve drips and seal connector joints.",
    icon: "ShieldAlert",
    features: ["Teflon tape reinforcement", "Pressure relief valve setup", "Cabinet water testing"],
    cta: "Book Leak Repair"
  },
  {
    id: "commercial-ro",
    title: "Commercial RO Solutions",
    shortDesc: "High-capacity purification plants for offices, clinics, and cafes.",
    longDesc: "Custom-configured 25 LPH, 50 LPH, or 100 LPH filtration setups to handle large daily water volume requests.",
    icon: "Landmark",
    features: ["Heavy-duty pumps", "Dual sand/carbon media", "TDS and flow rate testing"],
    cta: "Request Commercial Quote"
  },
  {
    id: "water-inspection",
    title: "Water Quality Inspection",
    shortDesc: "Complete chemical test (TDS, pH, Hardness, Chlorine residuals).",
    longDesc: "Is your water safe? We run chemical test strips and digital meters to check if your current filtration is working.",
    icon: "GlassWater",
    features: ["Digital TDS check", "pH indicator test", "Hardness check"],
    cta: "Book Water Test"
  }
];

// -------------------------------------------------------------
// 2. PRODUCTS DATA
// -------------------------------------------------------------
export const PRODUCTS: ProductItem[] = [
  {
    id: "aquahealth-pro",
    name: "Aquahealth Pro (RO+UV+UF+Alkaline)",
    category: "Home RO",
    price: "₹14,499",
    features: ["9-stage purification", "Active copper & alkaline taste adjustment", "9.5 Litre food-grade storage tank"],
    specs: {
      "Purification Capacity": "15 Litres/Hour",
      "Storage Capacity": "9.5 Litres",
      "Input Water TDS": "Up to 2000 ppm",
      "Warranty": "1 Year Comprehensive",
      "Installation Type": "Wall Mount / Countertop"
    },
    suitableFor: "Apartments, villas, and homes with high borewell or tanker water TDS.",
    image: "/hero_purifier.png"
  },
  {
    id: "aquahealth-lite",
    name: "Aquahealth Lite (RO+UV)",
    category: "Home RO",
    price: "₹11,999",
    features: ["7-stage purification", "Best suited for municipal/metro water", "8 Litre food-grade storage tank"],
    specs: {
      "Purification Capacity": "12 Litres/Hour",
      "Storage Capacity": "8 Litres",
      "Input Water TDS": "Up to 1000 ppm",
      "Warranty": "1 Year Comprehensive",
      "Installation Type": "Wall Mount"
    },
    suitableFor: "Suburbs with Metro/Mettur drinking water lines.",
    image: "/hero_purifier.png"
  },
  {
    id: "aquahealth-counter",
    name: "Aquahealth Countertop Neo",
    category: "Countertop",
    price: "₹15,999",
    features: ["Sleek touch UI panel", "Instant hot and ambient water dispensing", "Ultra-compact kitchen design"],
    specs: {
      "Purification Capacity": "15 Litres/Hour",
      "Storage Capacity": "6 Litres (Internal)",
      "Input Water TDS": "Up to 1500 ppm",
      "Warranty": "1 Year Comprehensive",
      "Installation Type": "Countertop Display"
    },
    suitableFor: "Modern modular kitchens preferring zero wall drilling.",
    image: "/hero_purifier.png"
  },
  {
    id: "aquahealth-comm-50",
    name: "Aquahealth Commercial LPH-50",
    category: "Commercial RO",
    price: "₹24,999",
    features: ["Dual commercial booster pumps", "50 Litres/Hour delivery output", "Heavy-duty structural framework"],
    specs: {
      "Purification Capacity": "50 Litres/Hour",
      "Storage Capacity": "Connects to external tank",
      "Input Water TDS": "Up to 2500 ppm",
      "Warranty": "1 Year Manufacturer",
      "Installation Type": "Wall/Floor Mount"
    },
    suitableFor: "Offices, restaurants, schools, clinics, and residential apartments.",
    image: "/hero_purifier.png"
  }
];

// -------------------------------------------------------------
// 3. FAQS DATA (40+ ITEMS)
// -------------------------------------------------------------
export const FAQS: FAQItem[] = [
  // Category: General
  {
    id: "faq-1",
    question: "Do you repair and service all water purifier brands?",
    answer: "Yes, we service and repair all major brands including Kent, Aquaguard, Livpure, AO Smith, Pureit, Blue Star, Havells, as well as custom-assembled RO units. We carry genuine spare parts compatible with these systems.",
    category: "General"
  },
  {
    id: "faq-2",
    question: "What is Aquahealth's service area in Chennai?",
    answer: "We cover the entire Chennai region, with highly focused service routes in Nanganallur, Velachery, Pallavaram, Chromepet, Tambaram, Adyar, Guindy, Medavakkam, OMR, ECR, Anna Nagar, T Nagar, and Porur.",
    category: "General"
  },
  {
    id: "faq-3",
    question: "Are your water purifier technicians background-checked?",
    answer: "Absolutely. All Aquahealth technicians undergo a rigorous screening, police background check, and technical certification process. They arrive in a clean uniform with an official photo ID badge.",
    category: "General"
  },
  {
    id: "faq-4",
    question: "How long has Aquahealth been servicing Chennai?",
    answer: "Aquahealth was founded in Chennai to address the local need for transparent water purifier servicing. We have proudly completed over 5,000 filter replacements and repairs in the city.",
    category: "General"
  },
  {
    id: "faq-5",
    question: "Do you offer corporate or commercial service contracts?",
    answer: "Yes, we manage water quality solutions for offices, clinics, schools, and restaurants across Chennai. We provide custom commercial RO sales and tailored annual maintenance contracts.",
    category: "General"
  },
  {
    id: "faq-6",
    question: "What is your emergency contact helpline?",
    answer: "For emergency purifier breakdowns or severe leakages, you can call us directly at +91 98402 75122 during our operating hours (8:00 AM - 9:00 PM).",
    category: "General"
  },
  {
    id: "faq-7",
    question: "Do you visit individual apartments in gated communities?",
    answer: "Yes, we regularly visit major residential complexes and societies in areas like OMR, Velachery, and Tambaram. We comply with all complex entry security protocols.",
    category: "General"
  },
  {
    id: "faq-8",
    question: "Do you offer customer support on Sundays?",
    answer: "Yes, our technicians are available for inspections and repairs on Sundays. Our phone and WhatsApp booking support operates daily from 8:00 AM to 9:00 PM.",
    category: "General"
  },
  
  // Category: Filters & Maintenance
  {
    id: "faq-9",
    question: "How often should I change my sediment pre-filter?",
    answer: "The external sediment pre-filter should be replaced every 3 to 6 months. In areas with high groundwater turbidity or red soil deposits, it may need to be changed sooner.",
    category: "Filters & Maintenance"
  },
  {
    id: "faq-10",
    question: "What is the purpose of the 5 free extra pre-filters?",
    answer: "We include 5 free pre-filters with every new purifier purchase so you can easily swap the outer filter when it collects visible mud, protecting expensive internal carbon filters and membranes.",
    category: "Filters & Maintenance"
  },
  {
    id: "faq-11",
    question: "How do I know when my internal filters need replacement?",
    answer: "Common indicator signs include a drop in flow rate, a bitter or salty change in water taste, or the purifier's filter alert light/buzzer activation.",
    category: "Filters & Maintenance"
  },
  {
    id: "faq-12",
    question: "What is the lifespan of an RO Membrane?",
    answer: "A premium RO membrane typically lasts 18 to 24 months, depending on the hardness and TDS of your inlet groundwater.",
    category: "Filters & Maintenance"
  },
  {
    id: "faq-13",
    question: "What are carbon block filters, and why are they replaced?",
    answer: "Carbon block filters absorb harmful organic compounds, chlorine, and chemical odors. They are replaced annually to prevent foul water odor and bad taste.",
    category: "Filters & Maintenance"
  },
  {
    id: "faq-14",
    question: "Can I replace the sediment pre-filter myself?",
    answer: "Yes. Replacing the outer pre-filter is simple. We provide a filter spanner and step-by-step guidance, or our technician can quickly do it for you during a scheduled visit.",
    category: "Filters & Maintenance"
  },
  {
    id: "faq-15",
    question: "Why should water tubes be replaced periodically?",
    answer: "Over 2-3 years, plastic tubing can develop internal bacterial biofilm deposits, turn yellow, or become brittle and leak. Swapping them ensures constant water hygiene.",
    category: "Filters & Maintenance"
  },
  {
    id: "faq-16",
    question: "What is chemical washing of the pre-filter housing?",
    answer: "It involves scrubbing and sanitizing the external pre-filter housing bowl with food-grade disinfectants to remove mud sludge and algae buildup.",
    category: "Filters & Maintenance"
  },

  // Category: Water Quality
  {
    id: "faq-17",
    question: "What is TDS, and what level is safe for drinking water?",
    answer: "Total Dissolved Solids (TDS) measures inorganic salts dissolved in water. A post-purification TDS level between 50 ppm and 150 ppm is considered safe and tasty for drinking.",
    category: "Water Quality"
  },
  {
    id: "faq-18",
    question: "Why does my RO water taste bitter or metallic?",
    answer: "A bitter taste often indicates that the TDS adjuster is misconfigured, or the carbon filter is exhausted. A metallic taste might mean the storage tank requires chemical cleaning.",
    category: "Water Quality"
  },
  {
    id: "faq-19",
    question: "Does RO water remove essential minerals?",
    answer: "Standard RO membranes can reduce mineral content. Aquahealth purifiers feature an Active Copper and Mineral cartridge to replenish essential calcium, magnesium, and copper ions.",
    category: "Water Quality"
  },
  {
    id: "faq-20",
    question: "What is the difference between RO, UV, and UF technologies?",
    answer: "RO (Reverse Osmosis) reduces dissolved salts and heavy metals. UV (Ultra Violet) sterilizes bacteria and viruses. UF (Ultra Filtration) filters suspended physical particles.",
    category: "Water Quality"
  },
  {
    id: "faq-21",
    question: "Why is groundwater in Chennai so hard?",
    answer: "groundwater in Chennai contains high levels of dissolved calcium and magnesium carbonates due to geological rock beds, necessitating RO membrane filtration.",
    category: "Water Quality"
  },
  {
    id: "faq-22",
    question: "How do you test water quality during a service visit?",
    answer: "Our technicians use digital TDS pens, pH liquid test reagents, and chlorine test strips to test both input tap water and output RO water.",
    category: "Water Quality"
  },
  {
    id: "faq-23",
    question: "Is raw borewell water with 1500+ TDS treatable by home RO?",
    answer: "Yes, our premium RO membranes are rated to treat input brackish water with TDS levels up to 2500 ppm, outputting safe, sweet drinking water.",
    category: "Water Quality"
  },
  {
    id: "faq-24",
    question: "Does UV filtration work if the power is cut?",
    answer: "No. UV sanitization chambers require electricity to run the UV lamp. Our purifiers feature automatic cutoffs to prevent untreated water from filling the tank when power is off.",
    category: "Water Quality"
  },

  // Category: AMC & Pricing
  {
    id: "faq-25",
    question: "How much do you charge for a standard inspection visit?",
    answer: "Our standard diagnostic inspection fee is ₹199 to ₹350, which is adjusted or waived if you proceed with our recommended service or filter replacements.",
    category: "AMC & Pricing"
  },
  {
    id: "faq-26",
    question: "What is included in the Aquahealth AMC plan?",
    answer: "Our AMC plans start at ₹3199 and cover two deep services, unlimited breakdown visits, tank sanitization, and replacement of all standard filters (carbon, sediment, pre-filters) during the contract year.",
    category: "AMC & Pricing"
  },
  {
    id: "faq-27",
    question: "Are there any hidden charges in your pricing?",
    answer: "Never. We believe in transparent, upfront quotes. Our technicians explain the exact issue and component cost before starting any service work.",
    category: "AMC & Pricing"
  },
  {
    id: "faq-28",
    question: "Do you offer any warranty on replaced spare parts?",
    answer: "Yes, all heavy-duty components replaced by us (such as booster pumps, SMPS adaptors, and SV valves) carry a 3 to 12-month dealer or manufacturer warranty.",
    category: "AMC & Pricing"
  },
  {
    id: "faq-29",
    question: "How can I pay for the service?",
    answer: "We accept cash, UPI payments (GPay, PhonePe, Paytm, Amazon Pay), and credit/debit card transfers directly to our technician's company link.",
    category: "AMC & Pricing"
  },
  {
    id: "faq-30",
    question: "Can I cancel my AMC contract and get a refund?",
    answer: "AMC plans can be cancelled within 15 days of booking if no service visit or filter replacement has been initiated. A full refund will be processed.",
    category: "AMC & Pricing"
  },
  {
    id: "faq-31",
    question: "Do you offer discounts for multi-unit apartment service contracts?",
    answer: "Yes, we offer special discounted corporate and residential society rates for servicing 5 or more purifiers in the same building.",
    category: "AMC & Pricing"
  },
  {
    id: "faq-32",
    question: "What is the cost of a replacement RO Membrane?",
    answer: "Depending on your purifier capacity and model (75 GPD or 80 GPD), genuine high-rejection RO membrane replacements range from ₹1,800 to ₹2,500.",
    category: "AMC & Pricing"
  },

  // Category: Booking & Service
  {
    id: "faq-33",
    question: "How do I book a service visit on WhatsApp?",
    answer: "Simply click any 'Book on WhatsApp' button. It will open a pre-filled booking format. Fill in your name, area, and issue, and press send to schedule instantly.",
    category: "Booking & Service"
  },
  {
    id: "faq-34",
    question: "Do you offer same-day service in Chennai?",
    answer: "Yes, bookings made before 12:00 PM are prioritized for same-day technician inspection and repair.",
    category: "Booking & Service"
  },
  {
    id: "faq-35",
    question: "How long does a general water purifier service take?",
    answer: "A standard maintenance service and tank sanitation visit takes 45 to 60 minutes. Complete filter replacements may take up to 90 minutes.",
    category: "Booking & Service"
  },
  {
    id: "faq-36",
    question: "Can I choose my preferred time slot for the technician's visit?",
    answer: "Yes, you can select from our convenient daily slots: Morning (9 AM - 12 PM), Afternoon (12 PM - 4 PM), or Evening (4 PM - 8 PM) during checkout.",
    category: "Booking & Service"
  },
  {
    id: "faq-37",
    question: "Do I need to keep any spare parts ready before the service?",
    answer: "No. Our technicians travel in service vans stocked with all standard filters, membranes, booster pumps, valves, and pipelines compatible with your brand.",
    category: "Booking & Service"
  },
  {
    id: "faq-38",
    question: "What happens if the problem returns after your technician leaves?",
    answer: "We provide a 15-day service guarantee. If the same issue recurs within 15 days, we will send an engineer to inspect and resolve it at no extra service charge.",
    category: "Booking & Service"
  },
  {
    id: "faq-39",
    question: "Do you clean the workspace after completing the repair?",
    answer: "Yes, our technicians are trained to follow clean kitchen protocols. They wipe the countertops, clean any water spills, and pack away old filters before leaving.",
    category: "Booking & Service"
  },
  {
    id: "faq-40",
    question: "Will I receive a digital invoice for the service?",
    answer: "Yes, we send a PDF copy of your itemized service receipt and warranty certificate via email and WhatsApp within 2 hours of payment completion.",
    category: "Booking & Service"
  }
];

// -------------------------------------------------------------
// 4. REVIEWS DATA
// -------------------------------------------------------------
export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-1",
    name: "Rajesh Kumar",
    location: "Nanganallur, Chennai",
    rating: 5,
    text: "The technician checked the input water TDS (which was 1200 ppm) and explained why our filters were clogging. He replaced them with heavy-duty spares and calibrated output TDS to 90 ppm. Very professional.",
    date: "2026-05-12"
  },
  {
    id: "rev-2",
    name: "Priya Sridhar",
    location: "Velachery, Chennai",
    rating: 5,
    text: "Quick response on WhatsApp. The engineer arrived within 2 hours of booking to fix a booster pump leakage. Honest and direct about the repair cost.",
    date: "2026-06-01"
  },
  {
    id: "rev-3",
    name: "Balaji Krishnan",
    location: "Tambaram, Chennai",
    rating: 5,
    text: "Subscribed to their AMC plan last year. The periodic tank sanitization and water quality test calls are completely automated. Outstanding peace of mind.",
    date: "2026-06-15"
  },
  {
    id: "rev-4",
    name: "Meera Venkatesh",
    location: "Adyar, Chennai",
    rating: 5,
    text: "Technician was very polite and tidy. He even wore shoe covers before entering our modular kitchen. Cleaned up the mud sludge inside the pre-filter housing completely.",
    date: "2026-06-25"
  }
];

// -------------------------------------------------------------
// 5. GALLERY DATA
// -------------------------------------------------------------
export const GALLERY: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Sediment Filter Clogging",
    category: "Before/After",
    image: "/before_after_filter.png",
    desc: "A mud-clogged outer pre-filter vs a pristine white replacement cartridge."
  },
  {
    id: "gal-2",
    title: "Storage Tank Sanitation",
    category: "Before/After",
    image: "/before_after_tank.png",
    desc: "A stained water tank interior sterilized with food-grade sanitation agents."
  },
  {
    id: "gal-3",
    title: "Neat Under-Sink Installation",
    category: "Installations",
    image: "/hero_purifier.png",
    desc: "A premium countertop purifier setup with concealed pipelines."
  },
  {
    id: "gal-4",
    title: "Technician Diagnostic Check",
    category: "Technicians",
    image: "/technician_work.png",
    desc: "Our engineer checking output water TDS levels using a digital calibration pen."
  }
];

// -------------------------------------------------------------
// 6. BLOG DATA
// -------------------------------------------------------------
export const BLOGS: BlogItem[] = [
  {
    id: "blog-1",
    title: "Understanding Groundwater Quality in South Chennai Suburbs",
    excerpt: "Why areas like Velachery, Tambaram, and OMR require high-rejection RO membranes compared to other Metro water zones.",
    category: "Water Safety",
    date: "June 20, 2026",
    readTime: "5 min read",
    image: "/hero_purifier.png",
    featured: true
  },
  {
    id: "blog-2",
    title: "A Homeowner's Guide to Water Purifier Pre-Filter Maintenance",
    excerpt: "Learn how replacing the cheap outer sediment pre-filter regularly protects your internal systems and pump from failing.",
    category: "Maintenance",
    date: "June 25, 2026",
    readTime: "4 min read",
    image: "/sediment_filter.png"
  },
  {
    id: "blog-3",
    title: "What is TDS? Why High and Low Dissolved Solids Impact Your Health",
    excerpt: "Everything you need to know about water TDS levels and how post-filtration mineralization balances taste and minerals.",
    category: "Technology",
    date: "June 28, 2026",
    readTime: "6 min read",
    image: "/hero_purifier.png"
  }
];

// -------------------------------------------------------------
// 7. SERVICE AREAS
// -------------------------------------------------------------
export const AREAS: string[] = [
  "Nanganallur", "Velachery", "Pallavaram", "Chromepet", "Tambaram",
  "Adyar", "Guindy", "Medavakkam", "OMR", "ECR",
  "Anna Nagar", "T Nagar", "Porur"
];

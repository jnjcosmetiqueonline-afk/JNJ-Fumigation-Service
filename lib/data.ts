import {
  Bug,
  BedDouble,
  Rat,
  Worm,
  Building2,
  Warehouse,
  UtensilsCrossed,
  Factory,
  ShieldCheck,
  SprayCan,
  Trees,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

// Keyword-based, always-relevant photos that reliably resolve.
const kwImg = (keywords: string, lock: number) =>
  `https://loremflickr.com/800/600/${keywords}?lock=${lock}`;

export const services: Service[] = [
  {
    title: "Cockroach Control",
    description: "Gel baiting and residual treatments that eliminate colonies at the source and stop reinfestation.",
    icon: Bug,
    image: kwImg("cockroach,insect", 11),
  },
  {
    title: "Bed Bug Treatment",
    description: "Heat and targeted chemical protocols that wipe out bed bugs and their eggs from every crevice.",
    icon: BedDouble,
    image: kwImg("bedbug,insect", 12),
  },
  {
    title: "Lizard Control",
    description: "Safe repellent and exclusion techniques to keep walls, kitchens and ceilings lizard-free.",
    icon: Worm,
    image: kwImg("lizard,gecko", 13),
  },
  {
    title: "Mosquito Control",
    description: "Larvicidal fogging and breeding-site management for indoor and outdoor mosquito protection.",
    icon: Bug,
    image: kwImg("mosquito,insect", 14),
  },
  {
    title: "Rodent Control",
    description: "Smart baiting, trapping and proofing that removes rats and mice and seals their entry points.",
    icon: Rat,
    image: kwImg("rat,rodent", 15),
  },
  {
    title: "Termite Treatment",
    description: "Anti-termite soil treatment and baiting systems that protect your structure for years.",
    icon: Trees,
    image: kwImg("termite,insect", 16),
  },
  {
    title: "General Pest Control",
    description: "Comprehensive quarterly protection covering ants, flies, spiders and crawling insects.",
    icon: SprayCan,
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Commercial Fumigation",
    description: "Compliance-ready fumigation for offices and retail with documented, safe procedures.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Warehouse Fumigation",
    description: "Large-scale stored-product and structural fumigation that safeguards inventory and goods.",
    icon: Warehouse,
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Restaurant Pest Control",
    description: "Discreet, food-safe programs that keep kitchens audit-ready and fully hygienic.",
    icon: UtensilsCrossed,
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Industrial Pest Management",
    description: "Integrated pest management contracts engineered for factories and production lines.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=70",
  },
  {
    title: "Eco-Friendly Solutions",
    description: "Green, child- and pet-safe chemistry that delivers results without the harsh residue.",
    icon: ShieldCheck,
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=70",
  },
];

export type Pest = { name: string; image: string };

export const pests: Pest[] = [
  { name: "Cockroach", image: kwImg("cockroach,insect", 21) },
  { name: "Bed Bug", image: kwImg("bedbug,insect", 22) },
  { name: "Lizard", image: kwImg("lizard,gecko", 23) },
  { name: "Rat", image: kwImg("rat,rodent", 24) },
  { name: "Mosquito", image: kwImg("mosquito,insect", 25) },
  { name: "Ant", image: kwImg("ant,insect", 26) },
  { name: "Spider", image: kwImg("spider,web", 27) },
  { name: "Termite", image: kwImg("termite,insect", 28) },
];

export const trustBadges = [
  { title: "Certified Experts", desc: "Licensed & trained technicians" },
  { title: "Safe Chemicals", desc: "Child & pet friendly formulas" },
  { title: "Fast Response", desc: "Same-day inspection slots" },
  { title: "Affordable Pricing", desc: "Transparent, no hidden fees" },
  { title: "24/7 Support", desc: "Always-on customer care" },
  { title: "Guaranteed Results", desc: "Free re-treatment promise" },
];

export const processSteps = [
  { step: "01", title: "Inspection", desc: "A certified technician audits every zone to map activity and entry points." },
  { step: "02", title: "Identification", desc: "We identify the species, severity and root cause for a precise plan." },
  { step: "03", title: "Treatment", desc: "Targeted, safe application using modern equipment and approved chemistry." },
  { step: "04", title: "Monitoring", desc: "Scheduled follow-ups verify results and catch any residual activity." },
  { step: "05", title: "Prevention", desc: "Proofing and advice that keep pests out for the long term." },
];

export const whyChoose = [
  { title: "Experienced Team", desc: "12+ years protecting homes and businesses." },
  { title: "Modern Equipment", desc: "ULV foggers, thermal heat & precision sprayers." },
  { title: "Eco-Friendly Solutions", desc: "Low-toxicity, odourless, residue-light products." },
  { title: "Guaranteed Results", desc: "Written warranty with free re-service." },
  { title: "Affordable Packages", desc: "Flexible plans for every budget." },
  { title: "Fast Service", desc: "Same-day and emergency call-outs." },
];

export const stats = [
  { value: 1000, suffix: "+", label: "Projects Completed" },
  { value: 500, suffix: "+", label: "Businesses Protected" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

export const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Restaurant Owner",
    rating: 5,
    review:
      "JNJ transformed our kitchen hygiene. The team was discreet, professional and our cockroach problem was gone after a single visit. Highly recommended.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=70",
  },
  {
    name: "Bilal Ahmed",
    role: "Facility Manager",
    rating: 5,
    review:
      "We contract JNJ for our warehouse and the difference is night and day. Documented, compliant and genuinely effective fumigation every quarter.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=70",
  },
  {
    name: "Sana Malik",
    role: "Homeowner",
    rating: 5,
    review:
      "Safe for my kids and pets, and the bed bugs are finally gone. The technicians explained everything and followed up exactly as promised.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=70",
  },
  {
    name: "Usman Riaz",
    role: "Hotel General Manager",
    rating: 5,
    review:
      "Reliability is everything in hospitality. JNJ delivers spotless results, on schedule, with zero disruption to our guests.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=70",
  },
];

export const serviceAreas = ["All Karachi"];

export const faqs = [
  {
    q: "Are the chemicals safe for children and pets?",
    a: "Yes. We use low-toxicity, government-approved products and follow strict dosage protocols. We advise a short ventilation window after treatment and provide clear safety guidance for every service.",
  },
  {
    q: "How long does a typical treatment take?",
    a: "Most residential treatments take 30–90 minutes depending on property size and infestation level. Commercial and warehouse fumigation is scheduled around your operating hours.",
  },
  {
    q: "Do you offer a guarantee?",
    a: "Absolutely. All major services include a written warranty. If pests return within the covered period, we re-treat your property free of charge.",
  },
  {
    q: "How much does pest control cost?",
    a: "Pricing depends on the pest, property size and chosen plan. We provide a free, no-obligation inspection and a transparent quote with no hidden fees.",
  },
  {
    q: "How often should I schedule pest control?",
    a: "We recommend quarterly general pest control for ongoing protection. High-risk environments like restaurants and warehouses may benefit from monthly programs.",
  },
];

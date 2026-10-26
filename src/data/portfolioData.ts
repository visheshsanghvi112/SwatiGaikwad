export interface CareerItem {
  id: string;
  period: string;
  title: string;
  company: string;
  isCurrent?: boolean;
  type: string;
  responsibilities: string[];
  note?: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  score: string;
  year: string;
  boardNote?: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  items: string[];
}

export interface InterestItem {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Swati Gaikwad",
    title: "Real Estate Professional & Content Creator",
    location: "Mumbai, Maharashtra, India",
    email: "swatigaikwad2814@gmail.com",
    phone: "7710880932",
    phoneDisplay: "+91 77108 80932",
    whatsappUrl: "https://wa.me/917710880932",
    instagramUrl: "https://www.instagram.com/its_swatified/",
    instagramHandle: "@its_swatified",
    primaryPortrait: "/assets/swati_post_DWEXttyCGRl.jpg",
    avatarImage: "/assets/swati_avatar_300.jpg",
    avatarSmall: "/assets/swati_avatar_300.jpg",
  },

  hero: {
    headline: "Building Relationships. Closing Deals. Creating Connections.",
    subheadline: "Real Estate Sourcing & Closings | Relationship Management | Personal Content",
    intro: "I'm Swati Gaikwad, a Mumbai-based real estate professional with experience in pre-sales, sourcing, channel partner development, negotiations, and end-to-end transaction closures. Alongside my professional journey, I bring my personality and perspective to the digital world through my personal content.",
    stats: [
      { label: "Real Estate Experience", value: "7+ Years" },
      { label: "Specialization", value: "Sourcing & Closings" },
      { label: "Based In", value: "Mumbai, India" },
      { label: "Community", value: "Active Creator" }
    ]
  },

  about: {
    lead: "A results-oriented real estate specialist bridging client aspirations with high-value property closures.",
    paragraphs: [
      "Over the past seven years across Mumbai's vibrant property market, I have developed my career through customer-facing sales and pre-sales assignments, property sourcing, channel partner management, and transaction closures. My work centers on deeply understanding client specifications, analyzing market availability, connecting with prospective buyers and channel partners, coordinating pre-sales activities, and navigating transactions diligently from early discussions through final deed execution.",
      "Beyond transactions, I believe real estate is inherently a relationship-first industry. Grounded in transparent communication, practical problem-solving, and thoughtful negotiation, I strive to deliver clarity and confidence to clients and partners at every touchpoint.",
      "Outside the boardroom, I bring my camera presence and authentic voice to digital platforms through my personal content. Whether exploring wellness and styling, capturing cultural celebrations in Mumbai, or sharing relatable moments, my creative journey complements my professional life by keeping me connected, curious, and grounded."
    ],
    philosophies: [
      {
        title: "Client-Centric Execution",
        desc: "Tailoring sourcing strategies to specific buyer and investor requirements with complete transparency."
      },
      {
        title: "Channel Partner Synergy",
        desc: "Fostering enduring relationships with brokers, developers, and advisors for mutual, sustainable success."
      },
      {
        title: "Strategic Negotiation",
        desc: "Balancing commercial value and relationship longevity to ensure seamless deal finalization."
      }
    ]
  },

  pathways: {
    realEstate: {
      headline: "Relationships That Move Business Forward",
      tagline: "Commercial Rigor & Transactional Excellence",
      description: "Comprehensive expertise spanning pre-sales, partner sourcing, requirement analysis, and end-to-end property closures across premier Mumbai developers.",
      backgroundImage: "/assets/real_estate_architecture.jpg",
      capabilities: [
        "Real estate pre-sales & customer engagement",
        "Property sourcing & deal closure",
        "Channel partner sourcing & relationship management",
        "Client requirement analysis & specification mapping",
        "Sales pipeline & lead management",
        "Negotiation & strategic problem-solving",
        "Coordination of customer journey from enquiry through closure",
        "Pre-sales team coordination & operational alignment",
        "Market awareness & property opportunity identification"
      ],
      ctaText: "Discuss a Property Requirement"
    },
    contentBrand: {
      headline: "My World Beyond Work",
      tagline: "Authentic Expression & Digital Presence",
      description: "A genuine glimpse into my personal style, festive moments, and relatable Mumbai lifestyle shared through my public Instagram profile @its_swatified.",
      backgroundImage: "/assets/swati_post_DevpTwjhC6A.jpg",
      themes: [
        "Salon visits, beauty routines & self-care experiences",
        "Festive celebrations & cultural moments in Mumbai",
        "Fashion styling, wedding guest inspiration & shopping hauls",
        "Engaging lifestyle reels with trending sounds & creative expressions",
        "Curated brand collaborations with local salons & lifestyle partners"
      ],
      ctaText: "Explore My Instagram"
    }
  },

  timeline: {
    summary: "Experienced in building client relationships, identifying real estate opportunities, managing sourcing processes, and coordinating transactions through to closure.",
    roles: [
      {
        id: "role-1",
        period: "November 2021 – Present",
        title: "Sourcing and Closing Manager",
        company: "Palladian Partners",
        isCurrent: true,
        type: "Full-Time",
        responsibilities: [
          "Building and maintaining strong, enduring client relationships across residential and commercial verticals.",
          "Understanding nuanced client needs and matching them with optimal real estate solutions.",
          "Handling and coordinating pre-sales activities to ensure high lead responsiveness and qualification.",
          "Developing, expanding, and maintaining trusted channel partner relationships.",
          "Identifying viable property opportunities, managing due diligence discussions, and leading negotiations through to transaction closure."
        ]
      },
      {
        id: "role-2",
        period: "January 2021 – October 2021",
        title: "Sourcing and Closing Manager",
        company: "Ayodhya Construction",
        type: "Full-Time",
        responsibilities: [
          "Developed deep relationships with clients to understand specific property needs and recommend appropriate real estate solutions.",
          "Coordinated pre-sales team activities, monitoring workflows and inquiry tracking.",
          "Sourced, onboarded, and cultivated active channel partner networks.",
          "Served as a dedicated representative to clients from initial property walkthroughs through final deal closing."
        ]
      },
      {
        id: "role-3",
        period: "October 2020 – January 2021",
        title: "Sales Executive",
        company: "Suraj Developer",
        type: "Sales Assignment",
        responsibilities: [
          "Handled incoming customer enquiries, professionally explaining project configurations and offerings.",
          "Proactively contacted prospective and existing buyers following structured consultation practices.",
          "Documented customer specifications and maintained accurate CRM lead records.",
          "Supported the core sales and closing operations during active project phases."
        ],
        note: "Company name retained as supplied in documentation."
      },
      {
        id: "role-4",
        period: "April 2017 – September 2020",
        title: "Event-Based Pre-Sales Executive",
        company: "Godrej, Lodha, Piramal, Avighna, & Omkar",
        type: "Event-Based Assignments",
        responsibilities: [
          "Responded to high-volume enquiries during developer launch events and site presentations.",
          "Clearly articulated project USPs, floorplans, amenities, and pricing structures.",
          "Engaged existing and prospective homebuyers using professional scripts and consultation techniques.",
          "Gathered precise customer parameters, budget brackets, and timeline expectations for lead qualification."
        ],
        note: "Event-based pre-sales assignments across premier Mumbai developer showcases, not direct full-time employment."
      }
    ]
  },

  skills: {
    coreCapabilities: [
      { name: "Channel Partner Development & Management", desc: "Building extensive broker and advisor networks that generate consistent deal flow." },
      { name: "Customer Relationship Building", desc: "Nurturing high-trust connections with prospective buyers and long-term property investors." },
      { name: "Deal Closure & Transaction Coordination", desc: "Guiding complex paperwork, payment milestones, and deed finalization smoothly." },
      { name: "Negotiation & Strategic Problem-Solving", desc: "Resolving commercial friction while safeguarding mutual value for buyer and seller." },
      { name: "Sales Pipeline & Lead Management", desc: "Maintaining rigorous CRM oversight, prompt follow-ups, and conversion tracking." },
      { name: "Pre-Sales Management", desc: "Aligning team workflows to effectively qualify and respond to high-intent inquiries." },
      { name: "Client Requirement Analysis", desc: "Diagnosing exact budget, location, and amenity criteria to recommend targeted properties." },
      { name: "Sourcing Strategy", desc: "Scouting and securing off-market and in-demand property inventory aligned with buyer demand." }
    ],
    strengths: [
      { title: "Relationship-Builder", desc: "Deeply empathetic, attentive to client goals, and focused on lasting professional trust." },
      { title: "Effective Communicator", desc: "Articulate in conveying property values, contract nuances, and creative narratives." },
      { title: "Problem-Solver", desc: "Resourceful in overcoming transactional obstacles, valuation gaps, and logistical hurdles." },
      { title: "Team-Oriented", desc: "Collaborates seamlessly with sales reps, channel partners, and executive stakeholders." },
      { title: "Detail-Oriented", desc: "Meticulous in verification, client specifications, and transactional documentation." }
    ]
  },

  education: [
    {
      id: "edu-1",
      degree: "Post Graduate Diploma in Management (PGDM)",
      institution: "Welingkar Institute",
      score: "70%",
      year: "2024",
      highlight: "Advanced strategic management, business operations, and organizational leadership."
    },
    {
      id: "edu-2",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Yashwantrao Chavan Maharashtra Open University",
      score: "76%",
      year: "2019",
      highlight: "Analytical thinking, information systems, and data-driven problem solving."
    },
    {
      id: "edu-3",
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Higher Secondary Board",
      score: "74%",
      year: "2016",
      boardNote: "Listed as Mumbai University in source resume; displayed here pending awarding body verification."
    },
    {
      id: "edu-4",
      degree: "Secondary School Certificate (SSC)",
      institution: "Secondary School Board",
      score: "71%",
      year: "2014",
      boardNote: "Listed as Mumbai University in source resume; displayed here pending awarding body verification."
    }
  ],

  interests: [
    {
      id: "int-1",
      title: "Real Estate Networking",
      description: "Active engagement with industry peers, developers, and brokers to stay abreast of high-potential corridors.",
      icon: "Building"
    },
    {
      id: "int-2",
      title: "Market Trends & Innovation",
      description: "Closely tracking Mumbai property investment cycles, regulatory policies, and infrastructure growth.",
      icon: "TrendingUp"
    },
    {
      id: "int-3",
      title: "Team Collaboration & Sports",
      description: "Enjoying team sports and group activities that reinforce collaboration, resilience, and personal wellness.",
      icon: "Users"
    },
    {
      id: "int-4",
      title: "Business & Property Podcasts",
      description: "Listening to perspectives on entrepreneurship, real estate finance, and strategic deal-making.",
      icon: "Headphones"
    },
    {
      id: "int-5",
      title: "Gardening & Serene Spaces",
      description: "Cultivating plants and designing tranquil outdoor spaces that offer balance and peace.",
      icon: "Leaf"
    },
    {
      id: "int-6",
      title: "Family & Friends",
      description: "Cherishing meaningful time with loved ones, enjoying community gatherings and celebratory milestones.",
      icon: "Heart"
    },
    {
      id: "int-7",
      title: "Personal Growth & Negotiation",
      description: "Reading literature on strategic negotiation, communication psychology, and professional mastery.",
      icon: "BookOpen"
    },
    {
      id: "int-8",
      title: "Neighbourhood Exploration",
      description: "Walking diverse Mumbai localities to understand residential micro-markets and lifestyle dynamics.",
      icon: "Compass"
    }
  ],

  languages: [
    { name: "Marathi", script: "मराठी", native: "Native / Proficient" },
    { name: "Hindi", script: "हिन्दी", native: "Fluent / Professional" },
    { name: "English", script: "English", native: "Fluent / Professional" }
  ]
};

import type { Dict } from "./fr";

export const en: Dict = {
  meta: {
    siteTitle: "UKAN — The UK alumni network in Côte d’Ivoire",
    titleSuffix: "UKAN Côte d’Ivoire",
    description:
      "UKAN brings together alumni of UK institutions based in Côte d’Ivoire: networking, mentoring, leadership and professional opportunities.",
  },

  common: {
    skip: "Skip to content",
    menu: "Menu",
    closeMenu: "Close menu",
    mainNav: "Main navigation",
    langLabel: "Language",
    otherLang: { code: "FR", label: "Version française" },
    join: "Join UKAN",
    becomeMember: "Become a member",
    todo: "To be completed",
    logoAlt: "UKAN — United Kingdom Alumni Network, Côte d’Ivoire",
  },

  nav: [
    { slug: "", label: "Home" },
    { slug: "le-reseau", label: "The network" },
    { slug: "president", label: "The president" },
    { slug: "programmes", label: "Programmes" },
    { slug: "actualites", label: "News" },
    { slug: "partenaires", label: "Partners" },
    { slug: "contact", label: "Contact" },
  ],

  loom: {
    title: "Prepare my membership request",
    linkLegend: "My link with the United Kingdom",
    links: [
      { id: "etudes", label: "I studied there", phrase: "I studied in the United Kingdom" },
      { id: "formation", label: "I trained there", phrase: "I undertook training in the United Kingdom" },
      { id: "bourse", label: "I held a UK scholarship", phrase: "I held a UK scholarship" },
      { id: "programme", label: "I took part in another programme", phrase: "I took part in a programme in the United Kingdom" },
    ],
    name: "Full name",
    institution: "UK institution or programme",
    institutionHint: "University, school, Chevening…",
    year: "Year",
    yearHint: "2015",
    optional: "optional",
    submit: "Send my request on WhatsApp",
    email: "I prefer email",
    note: "Nothing is stored on this site: your message opens in WhatsApp and you send it yourself.",
    conditions: "See membership conditions",
    errors: {
      link: "Choose your link with the United Kingdom.",
      name: "Enter your name so the Board can reply to you.",
      institution: "Enter the UK institution or programme.",
    },
    swatch: "Your strip in the cloth",
    swatchSteps: ["link", "name", "institution", "year"],
    waiting: "Your strip is woven as you fill in the form.",
    ready: "Your request is ready.",
    greeting: "Hello UKAN, I would like to join the network.",
    nameLine: "Name:",
    institutionLine: "Institution:",
    yearLine: "Year:",
    subject: "UKAN membership request",
  },

  joinBand: {
    title: "Join the network",
    cta: "Prepare my request",
    text: "Membership is open to anyone who has studied, trained or taken part in a programme in the United Kingdom.",
  },

  footer: {
    tagline:
      "The network of UK institution alumni in Côte d’Ivoire. Leadership, innovation and sustainable development.",
    networkTitle: "The network",
    network: [
      { slug: "le-reseau", hash: undefined, label: "About us" },
      { slug: "le-reseau", hash: "mission", label: "Vision and mission" },
      { slug: "le-reseau", hash: "gouvernance", label: "Governance" },
      { slug: "le-reseau", hash: "plan", label: "2026–2030 Plan" },
      { slug: "president", hash: undefined, label: "The president" },
    ],
    programmesTitle: "Programmes",
    contactTitle: "Contact us",
    whatsapp: "WhatsApp",
    legalEntity: "Association governed by Ivorian law.",
    registration: "Registration no.",
    office: "Registered office:",
    legal: "Legal notice",
    privacy: "Privacy policy",
  },

  home: {
    hero: {
      place: "Abidjan, Côte d’Ivoire",
      title: ["You studied in the United Kingdom.", "Your network is here."],
      lede: "UKAN brings together alumni of UK institutions based in Côte d’Ivoire: networking, mentoring, leadership, professional opportunities and cooperation between the two countries.",
      secondary: "About the network",
      meridian: {
        caption: "London and Abidjan, on almost the same meridian.",
        greenwich: "Greenwich meridian",
        londonCoord: "51°30′ N, 0°07′ W",
        abidjanCoord: "5°19′ N, 4°02′ W",
        london: "London",
        abidjan: "Abidjan",
        distance: "5,140 km",
      },
    },
    figures: {
      title: "Targets of the 2026–2030 Plan",
      items: [
        { value: "150", label: "active members targeted by 2030" },
        { value: "7", label: "flagship programmes" },
        { value: "50", label: "mentors mobilised" },
        { value: "10–15", label: "active partnerships" },
      ],
    },
    eligibility: {
      title: "Am I eligible?",
      lede: "Three situations make you eligible. If one of them describes you, you can join UKAN.",
      items: [
        {
          title: "You studied in the United Kingdom",
          text: "At a UK higher education institution, at any level and in any year.",
        },
        {
          title: "You trained there",
          text: "Professional training, continuing development, an exchange or a research programme in the UK.",
        },
        {
          title: "You held a UK scholarship",
          text: "Chevening or any other academic programme funded by a UK institution.",
        },
      ],
      link: "See the full conditions",
    },
    programmes: {
      title: "Seven flagship programmes",
      lede: "The 2026–2030 Strategic Plan organises UKAN’s work around seven programmes. Each has a purpose, deliverables and an owner.",
      link: "See programme details",
    },
    plan: {
      title: "The 2026–2030 Strategic Plan",
      paragraphs: [
        "Adopted to turn the findings of the revitalisation committee into a multi-year programming framework, with owners, deadlines, resources and indicators.",
        "It rests on six pillars: member mobilisation, governance, professional value creation, partnerships, resources, and communications.",
      ],
      link: "Read the plan",
    },
    quote: {
      text: "“Friendship is the inexpressible comfort of feeling safe with a person, without having to weigh one’s thoughts or measure one’s words.”",
      author: "H. Ward",
    },
  },

  programmes: [
    {
      id: "connect",
      name: "UKAN Connect",
      purpose: "Bring the community together, build connections and organise alumni gatherings.",
      deliverables: ["Member database", "Annual Alumni Day", "Skills directory"],
    },
    {
      id: "mentoring",
      name: "UKAN Mentoring",
      purpose: "Accelerate careers and pass experience between generations.",
      deliverables: ["50 mentors mobilised", "Mentoring pathways", "Expert–young alumni matching"],
    },
    {
      id: "leadership",
      name: "UKAN Leadership Academy",
      purpose: "Develop leadership, management and transferable skills.",
      deliverables: ["Training sessions", "Certificates", "Thematic workshops"],
    },
    {
      id: "business",
      name: "UKAN Business Network",
      purpose: "Create economic synergies between members of the network.",
      deliverables: ["Company directory", "B2B meetings", "Business opportunities"],
    },
    {
      id: "opportunities",
      name: "UKAN Opportunities",
      purpose: "Share jobs, internships, scholarships and calls for projects.",
      deliverables: ["Opportunities channel", "Jobs and internships", "Scholarships and calls for projects"],
    },
    {
      id: "partnerships",
      name: "UKAN Partnerships",
      purpose: "Structure the network’s institutional and private-sector relations.",
      deliverables: ["Partner mapping", "Agreements", "Joint projects"],
    },
    {
      id: "impact",
      name: "UKAN Impact",
      purpose: "Lead civic action and sustainable development initiatives.",
      deliverables: ["Annual day of action", "Community projects", "Sustainable development action"],
    },
  ],

  plan: {
    years: [
      { year: "2026", phase: "Restart" },
      { year: "2027", phase: "Consolidation" },
      { year: "2028", phase: "Expansion" },
      { year: "2029", phase: "Influence" },
      { year: "2030", phase: "Impact and preparation of the next plan" },
    ],
    axes: [
      {
        short: "Members",
        long: "Members, mobilisation and community",
        text: "Census, database, membership drives, skills directory, thematic groups.",
      },
      {
        short: "Governance",
        long: "Governance and professionalisation",
        text: "Statutes and internal rules, procedures manual, commissions, reporting, quarterly review.",
      },
      {
        short: "Professional value",
        long: "Employability, leadership and entrepreneurship",
        text: "Mentoring, Leadership Academy, Business Network, Opportunities, training.",
      },
      {
        short: "Partnerships",
        long: "Partnerships and cooperation",
        text: "Mapping, agreements, cooperation with UK institutions, joint events.",
      },
      {
        short: "Resources",
        long: "Resources and sustainability",
        text: "Membership fees, sponsorship, philanthropy, calls for projects, financial control.",
      },
      {
        short: "Communications",
        long: "Communications, visibility and influence",
        text: "Identity, website, social media, newsletter, annual impact report.",
      },
    ],
    axisLabel: "Pillar",
  },

  network: {
    meta: {
      title: "The network",
      description: "About UKAN: 2030 vision, mission, values, governance and the 2026–2030 Strategic Plan.",
    },
    header: {
      title: "About UKAN",
      lede: "UKAN brings together people who have studied, trained professionally or taken part in an academic programme in the United Kingdom, and who are based in Côte d’Ivoire.",
    },
    intro: [
      "UKAN gives UK alumni in Côte d’Ivoire a place to meet, share knowledge and experience, build professional relationships and contribute to the country’s development.",
      "The association draws its strength from the diversity of its members: different sectors, generations and paths, united by a shared experience of UK education.",
    ],
    vision: {
      title: "Our 2030 vision",
      text: "To become the leading network for alumni of UK institutions in Côte d’Ivoire, recognised for the quality of its network, its leadership and its contribution to Côte d’Ivoire – UK cooperation.",
    },
    ambition: {
      title: "Our ambition",
      text: "An active network of around 150 members by 2030, with continuous improvement in the quality of member services.",
    },
    mission: {
      title: "What we do",
      items: [
        "Promote professional networking",
        "Facilitate knowledge and experience sharing",
        "Develop leadership and professional excellence",
        "Encourage entrepreneurship and innovation",
        "Contribute to Côte d’Ivoire’s development",
        "Strengthen UK – Côte d’Ivoire relations",
      ],
    },
    values: {
      title: "What we stand for",
      items: [
        "Excellence",
        "Leadership",
        "Solidarity",
        "Fraternity",
        "Networking",
        "Innovation",
        "Integrity and accountability",
        "International cooperation",
      ],
      principles:
        "Our implementation principles: results orientation, member participation, financial transparency, accountability, inclusion, partnership, continuous improvement.",
    },
    governance: {
      title: "How UKAN is run",
      lede: "The association is run by an Executive Board, supported by working commissions. Every action in the plan has an owner, a deadline, a budget and an indicator.",
      board: {
        title: "The Executive Board",
        text: "The composition of the Executive Board and photographs of its members will be published here.",
        link: "Read the president’s biography",
      },
      commissions: {
        title: "Working commissions",
        items: [
          "Members and mobilisation",
          "Governance and statutes",
          "Programmes",
          "Partnerships",
          "Finance",
          "Communications",
          "Monitoring and evaluation",
        ],
      },
    },
    plan: {
      title: "Six pillars, five years",
      lede: "Each year of the plan has its priority. The six pillars run across the whole period.",
      request: "Request the full document",
      pdfNote: "The Plan PDF will be available for download here.",
      download: "Download the Plan (PDF)",
    },
    accountability: {
      title: "Accountability",
      text: "UKAN publishes a quarterly dashboard and an annual impact report. Indicators tracked:",
      indicators: [
        "active members",
        "renewal rate",
        "participation in activities",
        "mentors and mentees",
        "opportunities shared",
        "active partnerships",
        "resources raised",
        "budget execution rate",
        "member satisfaction",
      ],
    },
  },

  president: {
    name: "Antoine Kemonsei",
    role: "President of UKAN Côte d’Ivoire",
    photo: "Official photograph",
    meta: {
      title: "Antoine Kemonsei, president",
      description:
        "Biography of Antoine Kemonsei, president of UKAN: Ivorian expert in tourism development and destination management.",
    },
    header: {
      kicker: "The president",
      lede: "Ivorian expert in tourism development and destination management.",
    },
    bio: {
      title: "A career in service of sustainable tourism",
      paragraphs: [
        "Mr Antoine Kemonsei is a management graduate of Bournemouth University and an Ivorian expert in tourism development and destination management. An author and analyst of tourism policy, he works to promote sustainable, inclusive and competitive tourism in Côte d’Ivoire.",
        "Committed to associations and international cooperation, he actively contributes to the growth of professional networking, mentoring and leadership for young people and development professionals.",
      ],
      education: { title: "Education", text: "Bournemouth University (United Kingdom), management." },
      link: "Read the President’s Message",
    },
    expertise: {
      title: "Interests and areas of expertise",
      items: [
        "Destination development and management",
        "Territorial governance and local development",
        "Destination marketing and promotion",
        "Sustainable development and heritage enhancement",
        "Association networking and mentoring",
        "Author of books on tourism",
      ],
    },
  },

  message: {
    meta: {
      title: "President’s Message",
      description: "A message from Antoine Kemonsei, president of UKAN, to the members and partners of the network.",
    },
    header: {
      kicker: "The president",
      title: "President’s Message",
      lede: "A message from Antoine Kemonsei to the members, partners and friends of UKAN.",
    },
    salutation: "Dear members, dear partners, dear friends,",
    paragraphs: [
      "It is with great pride that I address you as president of UKAN, the network of UK institution alumni in Côte d’Ivoire. Our network brings together women and men who had the opportunity to study, train or take part in a programme in the United Kingdom, and who today share the same ambition: to put that experience to work for the development of our country.",
      "Since its creation, UKAN has set itself the mission of fostering professional networking, mentoring and leadership among its members, while building strong bridges between Côte d’Ivoire and the United Kingdom. This mission has never been more relevant than today, as our two countries deepen their economic, academic and cultural ties.",
      "I firmly believe in the strength of the collective. Each of us carries a unique journey, but it is together, by sharing our experiences, our networks and our opportunities, that we can have a lasting impact on the development of Côte d’Ivoire and on the future of coming generations.",
      "I therefore invite you to join our programmes, take part in our activities and contribute, in your own way, to the life of this network, which is yours. Together, let us make UKAN a space for leadership, innovation and solidarity in the service of our country.",
    ],
    closing: "Thank you for your trust and your commitment.",
    link: "View the president’s biography",
  },

  programmesPage: {
    meta: {
      title: "Programmes",
      description:
        "UKAN’s seven programmes: Connect, Mentoring, Leadership Academy, Business Network, Opportunities, Partnerships and Impact.",
    },
    header: {
      title: "Seven flagship programmes",
      lede: "What the network concretely brings its members, from networking to civic action.",
    },
    deliverablesLabel: "Deliverables",
    mentor: {
      kicker: "Call for applications",
      title: "Become a UKAN mentor",
      text: "The programme aims for 50 mentors by 2030. Two hours a month are enough to support a young alumnus or alumna in their career. Write to us with your sector and your availability.",
      cta: "Apply to be a mentor",
      subject: "UKAN mentor application",
    },
    calendar: {
      title: "Session calendar",
      text: "Dates of upcoming meetings, workshops and training sessions will be published here.",
    },
  },

  news: {
    meta: { title: "News", description: "UKAN meetings, opportunities shared between members, and alumni stories." },
    header: {
      title: "Network life",
      lede: "Reports from our meetings, opportunities shared between members, and alumni stories.",
    },
    empty: {
      title: "The website has just opened",
      text: "Reports from upcoming meetings, event photographs and member stories will be published here. To be notified, write to us or join the network.",
      cta: "Get notified",
      subject: "UKAN news",
    },
    upcomingTitle: "What you will find here",
    items: [
      {
        title: "Opportunities",
        text: "Jobs, internships, scholarships and calls for projects shared between members, through the UKAN Opportunities programme.",
        todo: null,
      },
      {
        title: "The quarterly newsletter",
        text: "Four issues a year: past activities, upcoming dates, opportunities and a member story.",
        todo: "Sign-up to be completed",
      },
      {
        title: "Member stories",
        text: "One portrait a quarter: the career, what the network brought, advice to a young alumnus.",
        todo: null,
      },
    ],
  },

  partners: {
    meta: {
      title: "Partners",
      description: "Partner with UKAN: institutional partnership, event sponsorship, philanthropy or services.",
    },
    header: {
      title: "Partner with UKAN",
      lede: "UKAN brings together professionals and leaders trained in the United Kingdom, across every sector of the Ivorian economy.",
    },
    why: {
      title: "Why partner with UKAN",
      items: [
        {
          title: "A talent pool",
          text: "People trained at UK institutions, in finance, energy, law, health, engineering and digital.",
        },
        {
          title: "Targeted visibility",
          text: "Your initiatives presented to a structured professional network, at our meetings and in the quarterly newsletter.",
        },
        {
          title: "A bridge between two countries",
          text: "A concrete relay for cooperation projects between the United Kingdom and Côte d’Ivoire.",
        },
      ],
    },
    forms: {
      title: "Four ways to work together",
      items: [
        {
          title: "Institutional partnership",
          text: "Framework agreement with a public institution, an embassy or a university.",
        },
        {
          title: "Event sponsorship",
          text: "Association of your brand with the Annual Alumni Day or a training session.",
        },
        { title: "Philanthropy", text: "Financial or in-kind support for a programme, notably UKAN Impact." },
        { title: "Services", text: "Network experts working on a specific project, under contract." },
      ],
    },
    list: {
      title: "Our partners",
      text: "Partnerships being formalised will be presented here, with their logos.",
    },
    talk: {
      title: "Let’s talk",
      text: "Tell us in two lines what you have in mind. We will come back to you within a few days.",
      whatsapp: "Message us on WhatsApp",
      email: "Email UKAN",
      subject: "UKAN partnership",
    },
  },

  join: {
    meta: {
      title: "Join UKAN",
      description: "UKAN Côte d’Ivoire membership conditions, benefits, steps and how to apply.",
    },
    header: {
      title: "Join UKAN",
      lede: "Membership is open to anyone who has studied, trained or taken part in an academic or professional programme in the United Kingdom.",
    },
    eligibility: {
      title: "Who can join",
      intro: "Membership is open to anyone who has:",
      items: [
        "studied at a higher education institution in the United Kingdom;",
        "undertaken professional training or continuing development in the United Kingdom;",
        "benefited from a UK scholarship or academic programme;",
        "taken part in an academic, research, exchange or professional development programme in the UK;",
        "or gained another recognised academic or professional experience in the United Kingdom.",
      ],
    },
    benefits: {
      title: "What membership brings",
      items: [
        "Expand your professional and personal network",
        "Take part in conferences, seminars and networking events",
        "Share your professional experience and expertise",
        "Benefit from mentoring and professional development",
        "Contribute to UK – Côte d’Ivoire cooperation initiatives",
        "Meet alumni from every sector and generation",
        "Help build a strong UK alumni community in Côte d’Ivoire",
      ],
    },
    steps: {
      title: "Four steps",
      items: [
        "You complete the membership form.",
        "The Board reviews your application and replies.",
        "You pay your membership fee.",
        "You receive your membership card.",
      ],
    },
    apply: {
      title: "How to apply",
      text: "Write to us on WhatsApp or by email with your name, the UK institution you attended and the year. We will send you the membership form in return.",
      whatsapp: "Message us on WhatsApp",
      email: "Request the form",
      subject: "UKAN membership application",
      formNote: "The online membership form will be available here.",
      formLink: "Fill in the online form",
      formTodo: "Link to be completed",
    },
    fee: {
      title: "Membership fee",
      text: "The joining fee and annual membership fee will be stated here.",
      todo: "Amount to be completed",
    },
    commitments: {
      title: "Your commitments",
      items: [
        "Support UKAN’s objectives and values",
        "Provide accurate information",
        "Comply with the Statutes and Internal Regulations",
        "Pay the membership fee",
        "Respect the code of conduct",
      ],
    },
    associate: {
      title: "Associate members",
      text: "Subject to the association’s governing documents, UKAN may provide for an associate membership category for individuals or organisations that support its objectives without meeting the alumni eligibility criteria.",
    },
    approval: {
      title: "Approval",
      text: "Applications are reviewed and approved in accordance with the Statutes and Internal Regulations. Once approved, the new member is formally welcomed into the network.",
    },
  },

  contact: {
    meta: { title: "Contact", description: "Contact UKAN Côte d’Ivoire by WhatsApp, telephone or email." },
    header: {
      title: "Get in touch",
      lede: "A question about membership, a partnership, a programme? Write to us. WhatsApp is the quickest.",
    },
    channels: {
      whatsapp: { label: "WhatsApp", note: "The quickest way. Message us directly, nothing extra to install." },
      phone: { label: "Telephone", note: "Monday to Friday, office hours." },
      email: { label: "Email", note: "For partnership enquiries and membership applications." },
    },
    office: { title: "Where to find us", addressTodo: "Address to be completed" },
    social: { title: "On social media", linkTodo: "Link to be completed" },
  },

  legal: {
    meta: {
      title: "Legal notice",
      description: "Publisher, publication director and hosting of the UKAN Côte d’Ivoire website.",
    },
    header: { title: "Legal notice", lede: "Information about the publisher of this website and its hosting." },
    publisher: {
      title: "Publisher",
      entity: "Association governed by Ivorian law",
      registration: "Registration no.",
      office: "Registered office:",
      email: "Email:",
      phone: "Telephone:",
    },
    director: { title: "Publication director", todo: "Name and role to be completed" },
    hosting: {
      title: "Hosting",
      text: "This website is hosted by Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, United States.",
      note: "This paragraph must be corrected if the site is ultimately hosted elsewhere.",
      todo: "To be checked",
    },
    ip: {
      title: "Intellectual property",
      text: "The UKAN logo, the texts and the graphic elements of this site are the property of the association. Any reproduction, even partial, requires prior written permission.",
    },
  },

  privacy: {
    meta: {
      title: "Privacy policy",
      description: "What UKAN Côte d’Ivoire collects, why, and how to exercise your rights.",
    },
    header: { title: "Privacy policy", lede: "What UKAN collects, why, and what you can request." },
    sections: [
      {
        title: "What this site collects",
        text: "This site has no user account and no advertising tracker, and sets no analytics cookies. The membership form sends nothing to UKAN: it prepares a message that you send yourself by WhatsApp or email. Browsing these pages leaves no personal data with UKAN.",
      },
      {
        title: "What UKAN collects elsewhere",
        text: "When you write to UKAN by WhatsApp or email, or when you complete a membership form, the association collects the information you provide: identity, contact details, UK academic background, professional situation and areas of interest.",
      },
      {
        title: "Why",
        text: "This information is used to process membership applications, maintain the member database, keep you informed about the network’s activities and connect you with other members. It is never sold, rented or passed to third parties for commercial purposes.",
      },
    ],
    rights: {
      title: "Your rights",
      text: "You may at any time request access to, correction of, or deletion of the information concerning you, by writing to",
      retention: "The retention period for member data and the applicable procedure will be specified here.",
    },
    outbound: {
      title: "Outbound links",
      text: "The WhatsApp links and email addresses on this site open third-party services, which apply their own privacy rules.",
    },
  },

  notFound: {
    title: "This page does not exist",
    text: "The address may have changed. Go back to the home page, or write to us if you were looking for something specific.",
    home: "Back to the home page",
  },
};

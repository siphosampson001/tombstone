import { TombstoneModel, ServiceSpecialty } from '../types';

export const BUSINESS_INFO = {
  primaryBrand: "LOWVELD SKILLED CRAFTSMENS",
  divisionBrand: "MAWERE TOMBSTONES",
  subtitle: "EXPLORATION & MINING",
  tagline: "Specialists In Tombstones, Cutting & Polishing, Kitchen Tops, Window Sills, Curving, Curious Products, & Carpentry",
  address: "Stand D749 Masasa Drive, Chiredzi",
  town: "Chiredzi",
  province: "Masvingo Province, Zimbabwe",
  phoneNumbers: ["0775 092 867", "0774 565 131"],
  phoneClean: ["+263775092867", "+263774565131"],
  whatsappNumber: "+263775092867",
  whatsappDisplay: "0775 092 867",
  email: "enockshons@gmail.com",
  operatingHours: "Monday - Saturday: 7:30 AM - 5:30 PM (Sunday by appointment)",
  regionsServed: "Chiredzi, Triangle, Hippo Valley, Mwenezi, Rutenga, Ngundu, Masvingo & countrywide Zimbabwe delivery",
};

export const SERVICES_LIST: ServiceSpecialty[] = [
  {
    id: "tombstones",
    title: "Mawere Tombstones & Memorials",
    tagline: "Dignified monuments carved from premier Zimbabwe black granite",
    description: "From executive upright headstones to full kerbed family memorials, we hand-craft enduring tributes for your loved ones with precision laser and chisel engraving, ceramic photo medallions, and matching granite flower vases.",
    iconName: "Monument",
    highlights: [
      "100% Solid Grade-A Zimbabwe Black Granite",
      "Executive sculpted apexes and bevelled shoulders",
      "Laser photo engraving & durable gold leaf lettering",
      "Grave site measurement & Chiredzi delivery/fitting"
    ]
  },
  {
    id: "cutting-polishing",
    title: "Stone Cutting & Diamond Mirror Polishing",
    tagline: "Industrial cutting and mirror-gloss finishing for granite and marble",
    description: "Our Chiredzi workshop is equipped with heavy-duty diamond circular saws and multi-stage water-cooled rotary polishing pads to transform raw quarried stone into smooth, reflective architectural masterpieces.",
    iconName: "Sparkles",
    highlights: [
      "Custom slab cutting to your exact millimeter dimensions",
      "High-luster mirror diamond finish with zero cloudy patches",
      "Edge profiling: 45° Bevel, Full Bullnose, Half Bullnose, Ogee",
      "Resurfacing, re-polishing and edge refurbishment"
    ]
  },
  {
    id: "kitchen-tops",
    title: "Granite Kitchen Tops & Countertops",
    tagline: "Luxury, heat-resistant, and scratch-proof kitchen worktops",
    description: "Transform your home with heat-proof, stain-sealed granite kitchen islands, breakfast bars, and counter surfaces. We cut precise sink cutouts, hob openings, and seamless waterfall edges tailored to your cabinetry.",
    iconName: "UtensilsCrossed",
    highlights: [
      "Heat-proof against hot pots and baking pans",
      "Anti-bacterial, easy-to-clean polished surface",
      "Precision cutouts for undermount & drop-in sinks and hobs",
      "Custom edge details complementing modern kitchen joinery"
    ]
  },
  {
    id: "window-sills",
    title: "Granite Window Sills & Thresholds",
    tagline: "Weather-tight, elegant granite sills that last a lifetime",
    description: "Upgrade from cracking plaster or weathered wood to solid polished granite window sills. Designed for both interior elegance and exterior weather-resistance with integrated drip grooves.",
    iconName: "Layers",
    highlights: [
      "Impervious to rain, scorching sun, and moisture rot",
      "Polished visible faces and clean beveled edges",
      "Built-in drip grooves for exterior drainage",
      "Custom cut to length for residential & commercial builds"
    ]
  },
  {
    id: "curving-curious",
    title: "Stone Curving & Curious Products",
    tagline: "Artisanal sculptured stonework and commemorative pieces",
    description: "Handcrafted stone artistry, commemorative opening plaques, heraldic emblems, granite pedestals, shaped vases, and unique stone ornamental curios that reflect African stone sculpting heritage.",
    iconName: "Gem",
    highlights: [
      "Bespoke stone sculpting and 3D relief curving",
      "Ceremonial cornerstone and institutional dedication plaques",
      "Solid turned granite flower vases and urns",
      "Curious art pieces, bookends, and decorative pedestals"
    ]
  },
  {
    id: "carpentry",
    title: "Carpentry & Structural Fitting",
    tagline: "Precision joinery supporting custom masonry installations",
    description: "Comprehensive woodcraft and structural cabinetry preparation to support heavy granite installations, custom wooden display stands, and reinforced coffin sub-structures.",
    iconName: "Hammer",
    highlights: [
      "Reinforced timber support frames for heavy stone slabs",
      "Cabinet leveling and substructure framing",
      "Custom wooden casket fittings and plinth formwork",
      "Combined stone & timber bespoke furniture pieces"
    ]
  },
  {
    id: "mining-exploration",
    title: "Granite Exploration & Mining",
    tagline: "Quarry sourcing from rich geological veins of the Lowveld & Zimbabwe",
    description: "Direct quarrying and geological block exploration ensures our clients receive unblemished, dense black granite with superior hardness, resistance to acid rain, and rich mineral consistency.",
    iconName: "Mountain",
    highlights: [
      "Direct quarry block selection with strict crack testing",
      "World-famous dense fine-grain Zimbabwe Black stone",
      "Elimination of middleman markups for affordable direct pricing",
      "Sustainable exploration practices complying with local standards"
    ]
  }
];

export const TOMBSTONE_CATALOG: TombstoneModel[] = [
  {
    id: "NKOSI-EXEC",
    name: "The 'Nkosi' Executive Memorial",
    category: "executive",
    graniteType: "Grade-A Zimbabwe Black Granite",
    dimensions: "Headstone: 900mm x 600mm x 80mm | Base: 1000mm x 250mm x 150mm",
    features: [
      "Signature carved base with bold raised 'NKOSI' or custom surname",
      "Scalloped top crown with beveled edge detailing",
      "Weather-sealed ceramic portrait medallion insert",
      "Dual integrated flower holders / granite side vases",
      "Double polished plinth with gold leaf epitaph lettering"
    ],
    description: "Our signature flagship memorial. A majestic, deeply reverent tribute featuring a sculpted crest, beveled shoulders, and high-gloss diamond polish.",
    priceEstimateUSD: 850,
    popular: true,
    shapeStyle: "executive"
  },
  {
    id: "MAWERE-CURVED",
    name: "Mawere Classic Arch Monument",
    category: "classic",
    graniteType: "Zimbabwe Deep Black Granite",
    dimensions: "Headstone: 750mm x 500mm x 75mm | Base: 900mm x 200mm x 100mm",
    features: [
      "Smooth curved roman arch top with polished beveled profile",
      "Up to 120 carved & gold-infilled characters included",
      "Polished sub-base with optional vase hole",
      "Pre-drilled stainless steel dowel pins for storm anchor"
    ],
    description: "A timeless, dignified headstone with an elegant semi-circular arch. Perfect for solo memorials with ample space for sacred verses and family lineages.",
    priceEstimateUSD: 520,
    popular: true,
    shapeStyle: "arch"
  },
  {
    id: "SACRED-SCROLL",
    name: "Open Bible & Book of Life Memorial",
    category: "scroll",
    graniteType: "Zimbabwe Jet Black & Rustenburg Charcoal",
    dimensions: "Headstone: 800mm x 650mm x 80mm | Base: 1000mm x 300mm x 100mm",
    features: [
      "Artistically carved double page 3D book contour with center tassel",
      "Left page dedicated to personal history, right page for scripture/epitaph",
      "Deep relief carved edge resembling stacked parchment pages",
      "Polished angled granite display pedestal"
    ],
    description: "A beloved Christian design symbolizing the Book of Life. The gently curved pages provide a reverent canvas for cherished memories and biblical verses.",
    priceEstimateUSD: 780,
    popular: true,
    shapeStyle: "scroll"
  },
  {
    id: "LOWVELD-KERBING",
    name: "Full Cathedral Kerbing & Ledger Monument",
    category: "kerbing",
    graniteType: "Grade-A Zimbabwe Black Granite",
    dimensions: "Headstone: 950mm x 650mm | Full Kerbing: 2200mm x 1100mm x 150mm",
    features: [
      "Complete perimeter solid granite kerb walls with corner posts",
      "Matching solid slab ledger or decorative white marble stone chips",
      "Two square corner vases with brass flower inserts",
      "Raised foot-end kerb with carved family crest or cross"
    ],
    description: "The ultimate dignified tribute covering the full grave boundary. Prevents weed overgrowth and preserves the consecrated ground with magnificent solid stone.",
    priceEstimateUSD: 1450,
    popular: false,
    shapeStyle: "executive"
  },
  {
    id: "COMPANION-DOUBLE",
    name: "Mawere Companion Double Memorial",
    category: "companion",
    graniteType: "Zimbabwe Black or African Red Granite",
    dimensions: "Headstone: 1200mm x 700mm x 90mm | Base: 1400mm x 300mm x 150mm",
    features: [
      "Wide double-panel headstone for husband and wife / beloved parents",
      "Twin ceramic portrait medallions side by side",
      "Central carved praying hands, cross, or tree of life emblem",
      "Double width polished base with two matching vases"
    ],
    description: "Designed for couples united in life and eternity. Generous proportions provide equal tribute space for both names, dates, and loving dedications.",
    priceEstimateUSD: 1100,
    popular: false,
    shapeStyle: "double"
  },
  {
    id: "FAITH-CROSS",
    name: "Sacred Cross & Heart Tribute",
    category: "cross",
    graniteType: "Zimbabwe Black Granite with White Engraving",
    dimensions: "Headstone: 850mm x 550mm x 75mm | Base: 900mm x 250mm x 120mm",
    features: [
      "Intricately sculpted Celtic or Latin cross integrated into headstone apex",
      "Heart-shaped polished inscription field with sculpted border roses",
      "Hand-etched floral accents with durable highlight pigment",
      "Reinforced heavy-duty base block"
    ],
    description: "A graceful expression of everlasting love and spiritual devotion. Combines the comfort of the cross with the warmth of an engraved heart.",
    priceEstimateUSD: 690,
    popular: false,
    shapeStyle: "cross"
  }
];

export const GRANITE_COLORS = [
  {
    id: "black",
    name: "Zimbabwe Jet Black Granite",
    origin: "Zimbabwe Local Quarry",
    description: "Globally famous dense fine-grain stone. Deep obsidian sheen with outstanding weather durability and highest contrast for gold and white lettering.",
    cssClass: "granite-black",
    colorHex: "#161719"
  },
  {
    id: "grey",
    name: "Rustenburg Charcoal Grey",
    origin: "Southern Africa",
    description: "Classic salt-and-pepper crystalline granite with medium-dark tones. Highly dignified and forgiving of dust.",
    cssClass: "granite-grey",
    colorHex: "#373d43"
  },
  {
    id: "emerald",
    name: "African Emerald Pearl",
    origin: "Selected Geological Veins",
    description: "Rich dark green base infused with shimmering feldspar mineral crystals that sparkle in sunlight.",
    cssClass: "granite-emerald",
    colorHex: "#122a24"
  },
  {
    id: "red",
    name: "African Ruby Red Granite",
    origin: "Regional Mining",
    description: "Warm crimson-red stone with dark quartz streaks, providing an affectionate and bold presence.",
    cssClass: "granite-red",
    colorHex: "#2e1515"
  }
];

export const EDGE_PROFILES = [
  { id: "eased", name: "Pencil Eased & Polished", desc: "Clean modern square edge with softened 2mm top and bottom radius." },
  { id: "bevel", name: "45° Beveled Edge", desc: "Crisp angled 10mm bevel reflecting architectural light lines." },
  { id: "bullnose", name: "Full Bullnose", desc: "Completely rounded semi-circular edge, ideal for busy kitchens and children safety." },
  { id: "ogee", name: "Decorative Ogee", desc: "Classic elegant S-curve profile for executive island counter pieces." }
];

export const FAQ_ITEMS = [
  {
    question: "Where is Lowveld Skilled Craftsmens / Mawere Tombstones located?",
    answer: "Our workshop and showyard is located at Stand D749 Masasa Drive in Chiredzi, Masvingo Province, Zimbabwe. Clients are welcome to visit our yard to inspect granite slabs, raw quarry blocks, and finished headstones in person."
  },
  {
    question: "How do I place an order for a tombstone from outside Chiredzi (e.g. Harare, Bulawayo, or Diaspora)?",
    answer: "Many of our clients reside across Zimbabwe or in South Africa, the UK, and abroad. You can configure your memorial on this website or chat directly with our master craftsmen on WhatsApp (+263 77 509 2867). We send step-by-step progress photos from cutting, engraving, and polishing, to final installation at the cemetery or rural homestead."
  },
  {
    question: "What makes Zimbabwe Black Granite superior to imported synthetic stones?",
    answer: "Authentic Zimbabwe Black Granite is celebrated worldwide in architectural and monument industries for its extreme mineral density, low water absorption (<0.02%), and high compressive strength. It will not fade, warp, or crack under harsh African sunlight, torrential rains, or veld fires."
  },
  {
    question: "Can you personalize inscriptions, portraits, and languages (Shona, Ndebele, English)?",
    answer: "Yes, absolutely. We engrave inscriptions in English, ChiShona, isiNdebele, Shangani, or any language you require. We also offer high-definition porcelain ceramic photo medallions and laser-etched portraits directly onto the stone."
  },
  {
    question: "Do you supply and install granite kitchen tops and window sills?",
    answer: "Yes! In addition to memorial monuments, we specialize in custom-measured granite kitchen countertops, bathroom vanities, and durable window sills with moisture-drip grooves for residential and commercial building projects across the Lowveld."
  }
];

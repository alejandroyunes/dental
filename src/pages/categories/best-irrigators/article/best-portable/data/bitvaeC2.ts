import {
  waterPikGlobalData,
  bitvaec2GlobalData,
  nicwellF5025GlobalData,
  coslus300mlGlobalData
} from "../../global-data/best-portable/best-portable"

export const headerProps = {
  title: "Bitvae C2 Professional Water Dental Flosser, 260ml",
  subtitle: "Cordless and Portable",
  text: "Achieve a brighter smile with advanced features and ergonomic design.",
  image: bitvaec2GlobalData.headerBgImage,
  mobileImage: bitvaec2GlobalData.headerBgMobileImage,
  url: bitvaec2GlobalData.bitvaec2ProductUrl,
  buttonText: "Buy Now",
  date: '11/21/2023',
  externalUrl: true
}

export const bitvaec2Url = '/best-portable/bitvae-c2-water-flossing-oral-irrigator'

export const tableOfContentItems = [
  {
    content: '\u2022 The Best of Bitvae C2',
    id: `${bitvaec2Url}#the-best-of-bitvae-c2`
  },
  {
    content: '\u2022 Why Choose Bitvae C2?',
    id: `${bitvaec2Url}#why-bitvae-c2`
  },
  {
    content: '\u2022 Pros and Cons',
    id: `${bitvaec2Url}#pro-and-cons-bitvae-c2`
  },
  {
    content: '\u2022 Comparison table with other irrigators',
    id: `${bitvaec2Url}#how-does-the-bitvae-c2-compares-to-other-irrigators`
  },
  {
    content: '\u2022 Why opt for the Bitvae C2?',
    id: `${bitvaec2Url}#why-opt-for-bitvae-c2`
  },
]

export const titleProps = {
  id: 'the-best-of-bitvae-c2',
  title: 'The Best of Bitvae C2',
  message: "The Bitvae C2 Professional Water Dental Flosser is a leading choice for dental care, boasting a range of impressive features: Portable, 300ml tank, 6 nozzles, 3 pressure settings, ergonomic design, removable tank, special pressure frequency."
}

export const bitvaec2Props = {
  product: {
    title: 'Bitvae C2 Professional Water Dental Flosser, 260ml',
    image: bitvaec2GlobalData.bitvaec2,
    alt: 'Bitvae C2 Product Image',
    productUrl: bitvaec2GlobalData.bitvaec2ProductUrl,
    primeUrl: bitvaec2GlobalData.amazonPrime,
    description: "Experience advanced oral care with the Bitvae C2 Water Dental Flosser. Keep your mouth clean and healthy with cutting-edge features and portability."
  },
  list: [
    "Wide Mouth Reservoir for Easy Cleaning.",
    "Large Capacity for a 60-Second Full Mouth Clean.",
    "3 Hours Charging for 40-Day Battery Life.",
    "3 Pressure Settings, 6 Replaceable Nozzles, and More."
  ]
}

export const titleListProps = {
  id: 'why-bitvae-c2',
  title: 'Why Choose Bitvae C2?',
  items: [
    {
      itemTitle: [
        'At Home,',
        "For blind",
        "Bitvae",
        "6pcs",
        "The leading brand",
        "Get a complete",
      ],
      itemContent: [
        'In the office, or on the go.',
        'spots and hard-to-clean areas.',
        'wide reservoir is easy to clean.',
        'of replaceable nozzles.',
        'in cordless oral irrigator battery life, up to 40 days of working time.',
        'clean in 60 seconds with one refill.',
      ]
    }
  ]
}

export const proAndCons = {
  id: 'pro-and-cons-bitvae-c2',
  title: "Pros and Cons",
  message: "Explore the advantages and considerations of the Bitvae C2 Water Dental Flosser.",
  itemspro: [
    {
      title: 'Customers praise its ability to remove debris and provide a thorough clean.',
    },
    {
      title: 'Portable and lightweight, making it suitable for travel and small spaces.',
    },
    {
      title: 'Multiple speeds, nozzle options, and a 60-second flossing time for a tailored experience.',
    },
    {
      title: 'Positive feedback on battery durability, lasting up to 40 days in the lowest pressure mode.',
    },
  ],
  itemscons: [
    {
      title: 'Mixed opinions on product durability, with reports of breakages and head detachment.',
    },
    {
      title: 'Some customers mention water leakage and challenges in drying the water reservoir.',
    },
  ]
}

export const comparativeTableProps = {
  id: 'how-does-the-bitvae-c2-compares-to-other-irrigators',
  title: 'Compare the Bitvae C2 with other irrigators',
  message: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2023.',
  primeUrl: bitvaec2GlobalData.amazonPrime,
  items: [
    {
      id: 1,
      models: 'Bitvae C2',
      image: bitvaec2GlobalData.bitvaec2,
      alt: 'Bitvae C2 Oral Irrigator Image',
      prime: true,
      dimensions: '4 x 3 x 8 in, 12 oz',
      multifunctionaltips: '6',
      capacity: '260 ml',
      highlight: 'Effective Cleaning, Compact Design, Long Battery Life',
      problem: 'Water Resistance, Durability',
      price: 'Great Price',
      satisfaction: '9/10',
      view: 'View Price',
      url: bitvaec2GlobalData.bitvaec2ProductUrl
    },
    {
      id: 2,
      models: 'Coslus F5020E',
      image: coslus300mlGlobalData.coslus300ml,
      alt: 'Coslus F5020E Oral Irrigator',
      prime: true,
      dimensions: '1.97 x 2.74 x 12.2 in, 15.52 oz',
      multifunctionaltips: '5',
      capacity: '300ml',
      highlight: 'Dual-thread stream, Child mode, IPX7 waterproof',
      problem: 'Limited water capacity',
      price: 'Excelent price',
      satisfaction: '9/10',
      view: 'View Price',
      url: coslus300mlGlobalData.coslus300mlProductUrl
    },
    {
      id: 3,
      models: 'Waterpik WF-02',
      image: waterPikGlobalData.waterpikwf02,
      alt: 'Waterpik Model WF-02',
      prime: true,
      dimensions: '3.6 x 2.5 x 11.75 in, 11.68 oz',
      multifunctionaltips: '2',
      capacity: '5oz reservoir for 30 seconds of flossing time',
      highlight: 'Economical, Portable, Waterproof, Customizable.',
      problem: 'Battery replacement, Limited water capacity.',
      price: 'Best buy',
      satisfaction: '9/10',
      view: 'View Price',
      url: waterPikGlobalData.waterpikwf02ProductUrl
    },
    {
      id: 4,
      models: 'Nicwell F5025',
      image: nicwellF5025GlobalData.nicwellf5025,
      alt: 'Nicwell 200ml Oral Irrigator',
      prime: true,
      dimensions: '8.03 x 4.02 x 2.73 in, 14 oz',
      multifunctionaltips: '5',
      capacity: '200 ml',
      highlight: 'Cleaning Orthodontic Gums, Prevent Bad Breath',
      problem: 'Charging',
      price: 'Great Price',
      satisfaction: '9/10',
      view: 'View Price',
      url: nicwellF5025GlobalData.nicwellf5025ProductUrl
    },
  ]
}

export const titleListNicwellProps = {
  id: 'why-opt-for-bitvae-c2',
  title: 'Is Bitvae a good brand?',
  items: [
    {
      itemTitle: [
        'After thorough analysis',
      ],
      itemContent: [
        "of customer feedback, product reviews, and ratings, Bitvae stands out with an impressive average star rating of 4.3. Having sold thousands of oral irrigators on Amazon, Bitvae is synonymous with high-quality products and overwhelmingly positive user reviews.",
      ]
    }
  ]
}
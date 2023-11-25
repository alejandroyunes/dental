import {
  nicwellF5025GlobalData,
  nicefeelFC1592bkGlobalData,
  waterPikGlobalData,
  coslus300mlGlobalData
} from '../../global-data/best-portable/best-portable'

export const headerProps = {
  title: "Waterpik Water Flosser Model WF-02, 5oz",
  subtitle: "Cordless Express Portable Water Flosser",
  text: "Waterpik: Dentist Recommended, ADA Accepted, and Clinically Proven for Superior Oral Health.",
  image: waterPikGlobalData.headerBgImage,
  mobileImage: waterPikGlobalData.headerBgMobileImage,
  url: waterPikGlobalData.waterpikwf02ProductUrl,
  buttonText: "Buy Now",
  date: '11/21/2023',
  externalUrl: true
}

export const waterpikwf02Url = '/best-portable/waterpik-wf02-water-flossing-oral-irrigator'

export const tableOfContentItems = [
  {
    content: '\u2022 The Best of Waterpik WF-02',
    id: `${waterpikwf02Url}#the-best-of-waterpic-wf02`
  },
  {
    content: '\u2022 Why Choose Waterpik WF-02?',
    id: `${waterpikwf02Url}#why-waterpic-wf02`
  },
  {
    content: '\u2022 Pros and Cons',
    id: `${waterpikwf02Url}#pro-and-cons-wf02`
  },
  {
    content: '\u2022 Comparison table with other irrigators',
    id: `${waterpikwf02Url}#how-does-the-waterpik-compares-to-other-irrigators`
  },
  {
    content: '\u2022 Why opt for the Waterpic WF-02',
    id: `${waterpikwf02Url}#why-waterpik-5oz`
  },
]

export const titleProps = {
  id: 'the-best-of-waterpic-wf02',
  title: 'The Best of Waterpik Model WF-02 Professional Water Flosser',
  message: "Waterpik's Cordless Express Water Flosser, featuring a battery-operated, portable, and waterproof design, is perfect for on-the-go oral care. With 2 pressure settings, a water on/off slider, 30 seconds of flossing time, and included AA batteries, it's easy to use anytime, anywhere, for healthier gums and brighter teeth."
}

export const waterpikwf02Props = {
  product: {
    title: 'Waterpik Water Flosser Model WF-02, 5oz',
    image: waterPikGlobalData.waterpikwf02,
    alt: 'Waterpik Water Flosser Model WF-02',
    productUrl: waterPikGlobalData.waterpikwf02ProductUrl,
    primeUrl: waterPikGlobalData.amazonPrime,
    description: "Clinically proven to remove up to 99.9% of plaque, the Cordless Express combines water pressure with pulsating action for an exceptional clean that traditional methods can't match."
  },
  list: [
    "Portable and waterproof design.",
    "2 pressure settings (45-75 PSI) for customizable cleaning.",
    "1200 water pulses per minute.",
    "Easy-to-fill, removable 5-ounce reservoir for 30 seconds of flossing time.",
    "2 JT-450E water flossing tips.",
    "Compact dimension.",
  ],
}

export const titleListProps = {
  id: 'why-waterpic-wf02',
  titleH2: 'Why Choose WaterPik WF-02?',
  items: [
    {
      itemTitle: [
        'Portability and On-the-Go Use:',
        "Waterproof Design:",
        "Clinically Proven Plaque Removal:",
        "Mouthwash Compatibility:",
        "Manufacturer's Warranty and Customer Support:",
      ],
      itemContent: [
        "Designed for travel, small bathrooms, and shower use, providing flexibility and convenience in maintaining oral hygiene wherever you go.",
        "Waterproof construction enhances durability and allows for use in the shower, adding versatility to your oral care routine.",
        "Clinically proven to remove up to 99.9% of plaque, offering an effective solution for superior oral cleanliness compared to traditional brushing and flossing.",
        "Users can add their favorite mouthwash for a personalized and fresher clean, enhancing the overall flossing experience.",
        "Backed by a 1-year manufacturer's warranty, ensuring product reliability and customer satisfaction.",
      ]
    }
  ]
}

export const proAndCons = {
  id: 'pro-and-cons-wf02',
  title: "Pros and Cons Waterpik Model WF-02",
  message: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the Waterpik Cordless Express WF-02 is the right fit for them.",
  itemspro: [
    {
      title: 'Ideal for travel, small bathrooms, and on-the-go oral care.',
    },
    {
      title: 'Runs on 3 AA batteries (included), eliminating the need for charging cords.',
    },
    {
      title: 'Allows for use in the shower, enhancing versatility and convenience.',
    },
    {
      title: ' Removable 5-ounce reservoir with easy-fill design for convenient use.',
    },

  ],
  itemscons: [
    {
      title: 'Requires regular replacement of 3 AA batteries (every 1-2 months, depending on use).',
    },
    {
      title: 'The 5-ounce reservoir may require refilling for extended flossing sessions.',
    },
    {
      title: 'While customizable, the flosser provides only two pressure settings.',
    },
  ]
}

export const comparativeTableProps = {
  id: 'how-does-the-waterpik-compares-to-other-irrigators',
  title: 'Compare the Waterpik WF-02 with other irrigators',
  message: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2023.',
  primeUrl: waterPikGlobalData.amazonPrime,
  items: [
    {
      id: 1,
      models: 'Waterpik WF-02',
      image: waterPikGlobalData.waterpikwf02,
      alt: 'Waterpik Model WF-02',
      prime: true,
      dimensions: '3.6 x 2.5 x 11.75 in, 11.68 oz',
      multifunctionaltips: '2',
      capacity: '5oz reservoir for 30 seconds of flossing time',
      highlight: 'Economical, Portable, Customizable.',
      problem: 'Battery replacement, Limited water capacity.',
      price: 'Best buy',
      satisfaction: '9/10',
      view: 'View Price',
      url: waterPikGlobalData.waterpikwf02ProductUrl
    },
    {
      id: 2,
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
    {
      id: 3,
      models: 'Nicefeel FC1592-BK',
      image: nicefeelFC1592bkGlobalData.nicefeelFC1592bk,
      alt: 'Nicefeel FC1592-BK Oral Irrigator Image',
      prime: true,
      dimensions: '0.3 x 0.31 x 0.87 in, 13 oz',
      multifunctionaltips: '4',
      capacity: '300 ml',
      highlight: 'Compact Design, Long Battery Life',
      problem: 'Durability',
      price: 'Great Price',
      satisfaction: '8/10',
      view: 'View Price',
      url: nicefeelFC1592bkGlobalData.nicefeelFC1592bkProductUrl
    },
    {
      id: 1,
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
  ]
}

export const titleListNicwellProps = {
  id: 'why-waterpik-5oz',
  titleH2: 'Why opt for the Waterpik Model WF-02?',
  items: [
    {
      itemTitle: [
        'Choose the Waterpik',
      ],
      itemContent: [
        "Cordless Express WF-02 for unparalleled convenience in your oral care routine – its portable design, waterproof functionality, and clinically proven efficacy make it the ideal choice for those seeking a hassle-free, on-the-go solution to achieve superior plaque removal and gum health.",
      ]
    }
  ]
}
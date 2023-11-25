import {
  waterPikGlobalData,
  insmartFC256GlobalData,
  nicwellF5025GlobalData,
  coslus300mlGlobalData
} from "../../global-data/best-portable/best-portable"

export const insmartFC256Url = '/best-portable/insmartFC256-water-flossing-oral-irrigator'

export const headerProps = {
  title: "InSmart Professional Cordless Water Dental Flosser FC256, 300ml",
  subtitle: "Efficient Oral Care Anytime, Anywhere",
  text: "Dentists highly recommend and choose the global-brand InSmart Portable Water Dental Flosser because it goes beyond the limitations of daily brushing.",
  image: insmartFC256GlobalData.headerBgImage,
  mobileImage: insmartFC256GlobalData.headerBgMobileImage,
  url: insmartFC256GlobalData.insmartFC256ProductUrl,
  buttonText: "Buy Now",
  date: '11/22/2023',
  externalUrl: true
}

export const tableOfContentItems = [
  {
    content: '\u2022 The Best of InSmart FC256',
    id: `${insmartFC256Url}#the-best-of-insmartFC256`
  },
  {
    content: '\u2022 Why Choose InSmart FC256?',
    id: `${insmartFC256Url}#why-insmartFC256`
  },
  {
    content: '\u2022 Pros and Cons',
    id: `${insmartFC256Url}#pro-and-cons-insmartFC256`
  },
  {
    content: '\u2022 Comparison table with other irrigators',
    id: `${insmartFC256Url}#how-does-the-insmartFC256-compares-to-other-irrigators`
  },
  {
    content: '\u2022 Why opt for the InSmart FC256?',
    id: `${insmartFC256Url}#why-opt-for-insmartFC256`
  },
]

export const titleProps = {
  id: 'the-best-of-insmartFC256',
  title: 'The Best of InSmart FC256',
  message: "This portable water flosser creates over 1250-1700 plus/min jets of water, reaching areas normal toothbrushes can't, ensuring healthy gums and a thorough teeth clean. Its IPX7 waterproof design allows for use in the shower, featuring three operation modes for a personalized experience. With a large 200ml water tank and extended battery life, it's perfect for daily use at home and on the go."
}

export const insmartFC256Props = {
  product: {
    title: 'InSmart Professional Cordless Water Dental Flosser FC256, 300ml',
    image: insmartFC256GlobalData.insmartFC256,
    alt: 'InSmart Professional Cordless Water Dental Flosser, 300ml Product Image',
    productUrl: insmartFC256GlobalData.insmartFC256ProductUrl,
    primeUrl: insmartFC256GlobalData.amazonPrime,
    description: "Catering to the oral care needs of your entire family. Give the gift of a healthier smile with the InSmart Professional Cordless Water Dental Flosser—perfect for home and on-the-go use."
  },
  list: [
    "Cordless and Portable for home and travel use.",
    "Charging with all USB port.",
    "Nozzle Tips for the whole family.",
    "Convenient travel carrying bag.",
  ]
}

export const titleListProps = {
  id: 'why-insmartFC256',
  title: 'Why Choose InSmart FC256?',
  items: [
    {
      itemTitle: [
        "InSmart cordless",
        "It is perfect",
        "Built in 1500mA",
        "The main flosser",
      ],
      itemContent: [
        "water dental flosser is an extremely convenient option over traditional oral irrigators. It gives flossing excellence with the convenience of being cordless and rechargeable.",
        "for removal of food residue between teeth and below the gums, where the brushing alone can not reach. It is excellent at removing hard-to-reach range that can cause bad breath, and tooth decay.",
        "Li-ion rechargeable batteries operates standby 2 weeks when full charge.",
        "and water tank are designed separately to help clean the dirt in the water tank.",
      ]
    }
  ]
}

export const proAndCons = {
  id: 'pro-and-cons-insmartFC256',
  title: "Pros and Cons",
  message: "It's essential to consider these customer experiences to make an informed decision about the InSmart Professional Cordless Water Dental Flosser.",
  itemspro: [
    {
      title: 'Large water reservoir for uninterrupted use.',
    },
    {
      title: '1800 times/minute high-pressure water pulse',
    },
    {
      title: 'Latest technology lithium battery for long-lasting use.',
    },
    {
      title: 'Low-noise design for a comfortable experience.',
    },
  ],
  itemscons: [
    {
      title: 'Reports of breakage after a few months of use, including issues with the device not holding a charge.',
    },
    {
      title: 'Complaints about the tip breaking every time, indicating potential fragility.',
    },
  ]
}

export const comparativeTableProps = {
  id: 'how-does-the-insmartFC256-compares-to-other-irrigators',
  title: 'Compare the InSmart FC256 with other irrigators',
  message: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2023.',
  primeUrl: insmartFC256GlobalData.amazonPrime,
  items: [
    {
      id: 1,
      models: 'InSmart FC256',
      image: insmartFC256GlobalData.insmartFC256,
      alt: 'InSmart FC256 Oral Irrigator Image',
      prime: true,
      dimensions: '8.27 x 3.15 x 1.97 in, 14 oz',
      multifunctionaltips: '4',
      capacity: '300 ml',
      highlight: 'Travel Carrying bag, Ease of use, Size',
      problem: 'Battery Life, Durability',
      price: 'Great Price',
      satisfaction: '8/10',
      view: 'View Price',
      url: insmartFC256GlobalData.insmartFC256ProductUrl
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
      highlight: 'Quality, Ease of use, Value, Battery Life',
      problem: '-',
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
  id: 'why-opt-for-insmartFC256',
  title: 'Is InSmart FC256 a good brand?',
  items: [
    {
      itemTitle: [
        "Dentists highly recommend",
      ],
      itemContent: [
        "the global-brand InSmart Portable Water Dental Flosser because studies have shown that daily brushing alone is insufficient for optimal oral cleanliness and health. The InSmart Water Dental Flosser caters to diverse family needs, offering a comprehensive solution to dental problems and promoting confident and charming smiles.",
      ]
    }
  ]
}
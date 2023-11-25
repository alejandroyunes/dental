import { h2oflossHF9GlobalData, sawgmoreB09GlobalData, turewell600mlGlobalData, zerhuntFC169GlobalData } from "../../global-data/best-countertop/best-countertop"

export const headerProps = {
  title: "Sawgmore Water Flosser Oral Irrigator B09, 600ml",
  subtitle: "Easy and efficient, deep cleaning",
  text: "The perfect tooth cleaner for those with braces, implants, crowns, or periodontal pockets.",
  image: sawgmoreB09GlobalData.headerBgImage,
  mobileImage: sawgmoreB09GlobalData.headerBgMobileImage,
  url: sawgmoreB09GlobalData.sawgmoreB09ProductUrl,
  buttonText: "Buy Now",
  date: '11/18/2023',
  externalUrl: true
}

export const sawgmoreB09Url = '/best-countertop/sawgmore-B09-water-flossing-oral-irrigator'

export const tableOfContentItems = [
  {
    content: '\u2022 The Best of the Sawgmore B09 Water Flosser',
    id: `${sawgmoreB09Url}#the-best-sawgmore-B09`
  },
  {
    content: '\u2022 How to use the Sawgmore B09?',
    id: `${sawgmoreB09Url}#how-to-use`
  },
  {
    content: '\u2022 Props and Cons?',
    id: `${sawgmoreB09Url}#props-and-cons`
  },
  {
    content: '\u2022 Comparison table with other irrigators',
    id: `${sawgmoreB09Url}#how-does-the-sawgmore-compares-to-other-irrigators`
  },
  {
    content: '\u2022 Why opt for the Sawgmore B09, 600ML?',
    id: `${sawgmoreB09Url}#why-sawgmore-B09`
  },
]

export const titleProps = {
  id: 'the-best-of-sawgmore-B09',
  title: 'The Best of the Sawgmore B09 Water Flosser',
  message: 'Sawgmore water flosser can effectively remove 99.9% of plaque and solve various oral problems. he advanced technology and excellent design can meet your needs for multiple uses.'
}

export const sawgmoreB09Props = {
  product: {
    title: 'Sawgmore Water Flosser Oral Irrigator B09, 600ml',
    image: sawgmoreB09GlobalData.sawgmoreB09,
    alt: 'Sawgmore Water Flossing Oral Irrigator',
    productUrl: sawgmoreB09GlobalData.sawgmoreB09ProductUrl,
    primeUrl: sawgmoreB09GlobalData.amazonPrime,
    description: 'Sawgmore water flosser holds 600ML/22ounces water and 90 seconds of continuous dental flossing, which satisfy the whole family use without frequent refilling.'
  },
  list: [
    "Level pressure control adjustment.",
    "600ML large detachable water tank.",
    "8 Jets for various cleaning needs",
    "360 nozzle rotation",
    "Easy to clean",
    "Anti-leakage design ensures no liquid leaks during high-pressure use.",
    "Available in black and white.",
  ],
}

export const titleListProps = {
  id: 'how-to-use',
  titleH2: 'How to install the nozzle step by step?',
  items: [
    {
      itemTitle: [
        'Step 1:',
        'Step 2:',
        'Step 3:',
      ],
      itemContent: [
        "Insert the nozzle into the handle.",
        "Installation is complete when you hear a click in the handle.",
        "Turn on the Sawgmore on.",

      ]
    }
  ]
}

export const proAndCons = {
  id: 'props-and-cons',
  title: "Pros and Cons of the Sawgmore B09",
  message: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the Sawgmore Water Flossing Oral Irrigator, 600ml is the right fit for them.",
  itemspro: [
    {
      title: 'Customers consistently appreciate the quality and value of the oral irrigator.',
    },
    {
      title: 'Users are satisfied with the variety of attachments included with the oral irrigator.',
    },
    {
      title: 'The attachments are interchangeable, and the overall usability is highlighted as a positive aspect.',
    },
    {
      title: 'The oral irrigator is recognized for its affordability.',
    },
  ],
  itemscons: [
    {
      title: 'Some appreciate the large reservoir, while others report issues such as the motor running without water coming out, quick water depletion at the max setting, and the need for messy water refills.',
    },
    {
      title: 'It gets very messy and water pulsation could generate noise.',
    },
  ]
}

export const comparativeTableProps = {
  id: 'how-does-the-sawgmore-compares-to-other-irrigators',
  title: 'Compare the Sawgmore B09 with other irrigators',
  message: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2023.',
  primeUrl: turewell600mlGlobalData.amazonPrime,
  items: [
    {
      id: 1,
      models: 'Sawgmore B09',
      image: sawgmoreB09GlobalData.sawgmoreB09,
      alt: 'Sawgmore B09 Oral Irrigator',
      prime: true,
      dimensions: '7.09 x 5.31 x 8.27 in, 2.2 lbs',
      multifunctionaltips: '8',
      capacity: '600 ml',
      highlight: '8 Nozzles, Value, Ease of use',
      problem: 'Noisy',
      price: 'Good Price',
      satisfaction: '8/10',
      view: 'View Price',
      url: sawgmoreB09GlobalData.sawgmoreB09ProductUrl
    },
    {
      id: 2,
      models: 'Turewell FC165',
      image: turewell600mlGlobalData.turewell600ml,
      alt: 'Turewell FC165 Oral Irrigator',
      prime: true,
      dimensions: '5.7 x 4.9 x 8.07 in, 1.7 lbs',
      multifunctionaltips: '8',
      capacity: '600 ml',
      highlight: '8 Nozzles, Value, Ease of use',
      problem: 'Water Resistance',
      price: 'Good Price',
      satisfaction: '8/10',
      view: 'View Price',
      url: turewell600mlGlobalData.turewell600mlProductUrl
    },
    {
      id: 3,
      models: 'H2ofloss HF-9',
      image: h2oflossHF9GlobalData.h2oflossHF9,
      alt: 'H2ofloss HF-9 Oral Irrigator',
      prime: true,
      dimensions: '8.39 x 2.56 x 4 in, 3.95 lbs',
      multifunctionaltips: '12',
      capacity: '800 ml',
      highlight: 'User-Friendly Design, Versatility and Cleaning Power',
      problem: 'Leaking Problems, Noise Levels',
      price: 'Good Price',
      satisfaction: '9/10',
      view: 'View Price',
      url: h2oflossHF9GlobalData.h2oflossHF9ProductUrl
    },
    {
      id: 4,
      models: 'Zerhunt FC169',
      image: zerhuntFC169GlobalData.zerhuntFC169,
      alt: 'Zerhunt FC169 Oral Irrigator',
      prime: true,
      dimensions: '5 x 5.5 x 7.9 in, 1.72 lbs',
      multifunctionaltips: '4',
      capacity: '600 ml',
      highlight: 'Multiple Pressure Settings, Multiple Tips',
      problem: 'Leaking Problems',
      price: 'Good Price',
      satisfaction: '8/10',
      view: 'View Price',
      url: zerhuntFC169GlobalData.zerhuntFC169ProductUrl
    },
  ]
}

export const titleListSawgmoreProps = {
  id: 'why-sawgmore-B09',
  titleH2: 'Why opt for the Sawgmore B09?',
  items: [
    {
      itemTitle: [
        'Is known',
        'This model',
        'The advanced',
        'Sawgmore',
      ],
      itemContent: [
        "for its durability and sleek design.",
        "incorporates advanced technology for enhanced performance.",
        "technology and excellent design can meet your needs for multiple uses.",
        "water dental flosser has 10 adjustable water pressure levels and 8 professional nozzles to meet different needs, which is suitable for the daily clean of children and adults, as well as the sensitive-gum people, even ideal for those with implants, crowns, bridges, or periodontal pockets.",
      ]
    }
  ]
}
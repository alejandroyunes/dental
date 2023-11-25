import {
  h2oflossHF9GlobalData,
  sawgmoreB09GlobalData,
  turewell600mlGlobalData,
  zerhuntFC169GlobalData
} from "../../global-data/best-countertop/best-countertop"

export const headerProps = {
  title: "Turewell Water Flossing Oral Irrigator FC165, 600ml",
  subtitle: "Dental Water Teeth Cleaner",
  text: "Removes 99.99% of Debris: compared with regular toothbrush, toothpick or floss which can't reach the hidden parts.",
  image: turewell600mlGlobalData.headerBgImage,
  mobileImage: turewell600mlGlobalData.headerBgMobileImage,
  url: turewell600mlGlobalData.turewell600mlProductUrl,
  buttonText: "Buy Now",
  date: '11/18/2023',
  externalUrl: true
}

export const turewell600mlUrl = '/best-countertop/turewell-FC165-water-flossing-oral-irrigator'

export const tableOfContentItems = [
  {
    content: '\u2022 The Best of the Turewell FC165 Water Flosser',
    id: `${turewell600mlUrl}#the-best-of-turewell`
  },
  {
    content: '\u2022 How to use the Turewell FC165?',
    id: `${turewell600mlUrl}#how-to-use`
  },
  {
    content: '\u2022 Props and Cons?',
    id: `${turewell600mlUrl}#props-and-cons`
  },
  {
    content: '\u2022 Comparison table with other irrigators',
    id: `${turewell600mlUrl}#how-does-the-turewell-compares-to-other-irrigators`
  },
  {
    content: '\u2022 Why opt for the Turewell FC165, 600ML?',
    id: `${turewell600mlUrl}#why-turewell-600ml`
  },
]

export const titleProps = {
  id: 'the-best-of-turewell',
  title: 'The Best of the Turewell FC165 Water Flosser',
  message: 'Turewell introduced an exceptionally budget-friendly model equipped with 360° rotating nozzles and 1700 times/min water pulsation, effectively eliminating 99.99% of debris, thus preventing tooth decay.'
}


export const turewell600mlProps = {
  product: {
    title: 'Turewell Water Flossing Oral Irrigator FC165, 600ml',
    image: turewell600mlGlobalData.turewell600ml,
    alt: 'Turewell Water Flossing Oral Irrigator',
    productUrl: turewell600mlGlobalData.turewell600mlProductUrl,
    primeUrl: turewell600mlGlobalData.amazonPrime,
    description: 'Turewell offers superior oral care, reaching areas traditional methods miss. Unlike toothbrushes, it cleans hidden gaps, ensuring a thorough and healthier dental routine.'
  },
  list: [
    "Prevents tooth decay, dental calculus, bleeding, and hypersensitivity.",
    "Ideal for braces and kids.",
    "600ml larger water tank, easy to clean and removable.",
    "3 high-pressure tips and 5 specialized tips for various needs.",
    "3-minute smart timer for safety and device lifespan.",
    "Anti-leakage design ensures no liquid leaks during high-pressure use.",
    "Available in black and white.",
  ],
}

export const titleListProps = {
  id: 'how-to-use',
  titleH2: 'How to use the Turewell FC165 oral irrigator step by step?',
  items: [
    {
      itemTitle: [
        'Place the irrigator',
        'Fill the 600ml',
        'Connect',
        'Select',
        'Select',
        'Press',
        'Follow',
      ],
      itemContent: [
        'on a smooth surface in the sink. We recommend using a wooden base for stability.',
        'water tank with warm water.',
        'the Turewell to the power source.',
        'the pressure level. Start with the lowest level and increase as needed.',
        'the desired nozzle based on your needs (e.g., toothbrush tip, periodontal tip).',
        'the nozzle onto the device and adjust the angle for a 90-degree flow into the sink.',
        'your gum line to thoroughly clean teeth and gums.'
      ]
    }
  ]
}

export const proAndCons = {
  id: 'props-and-cons',
  title: "Pros and Cons of the Turewell FC165",
  message: "It's important to note that the perceived pros and cons can vary based on individual preferences and needs. Users should consider their specific oral care requirements and lifestyle when deciding if the Turewell Water Flossing Oral Irrigator, 600ml is the right fit for them.",
  itemspro: [
    {
      title: 'Good for the price.',
    },
    {
      title: 'Effectively removes plaque and debris.',
    },
    {
      title: 'Setup is easy and simple.',
    },
    {
      title: 'Comes with a variety of tools and attachments.',
    },
  ],
  itemscons: [
    {
      title: 'Customers are mixed about the size of the oral irrigator.',
    },
    {
      title: 'It gets very messy and water pulsation could generate noise.',
    },
  ]
}

export const comparativeTableProps = {
  id: 'how-does-the-turewell-compares-to-other-irrigators',
  title: 'Compare the Turewell FC165 with other irrigators',
  message: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2023.',
  primeUrl: turewell600mlGlobalData.amazonPrime,
  items: [
    {
      id: 1,
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
      id: 2,
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
      id: 3,
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
    }
  ]
}

export const titleListTurewellProps = {
  id: 'why-turewell-600ml',
  titleH2: 'Why opt for the Turewell FC165?',
  items: [
    {
      itemTitle: [
        'Turewell',
        'This model',
        'Allows',
        'With its',
        'What makes it unique?',
      ],
      itemContent: [
        'is one of the most recognized brands in the dental hygiene market, known for its oral irrigators that offer a comprehensive solution to users.',
        'stands out not only for its very affordable price but also for the capacity.',
        'for easy mouth cleaning by adjusting the power with the dial.',
        'set of 8 nozzles, each family member can improve their oral hygiene without having to share.',
        'It features a timer that turns off the irrigator if it detects no use in 3 minutes to save energy.',
      ]
    }
  ]
}
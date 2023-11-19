//IMAGES
const headerBgImage = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700292788/HomePage/firstThreeColumn/oralb5000/zsguiqgbhop6t8xspfvy.webp'
const headerBgMobileImage = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700293313/HomePage/firstThreeColumn/oralb5000/nkhhgoczppqrxn1ofmdj.webp'
const HTML5Img = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/kkc4eb4flw5qgmjpmdro.webp'

export const oralb5000 = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700292788/HomePage/firstThreeColumn/oralb5000/rbf6jycs0baap4pvetou.webp'


const productUrl = 'https://a.co/d/aQoAc5G'
const amazonPrime = '/amazonprimeurl'

export const headerProps = {
  title: "Oral-B 5000 SmartSeries",
  subtitle: "Floss-like clean for healthier gums",
  text: "Discover the next level of oral care innovation with the Oral-B 5000 SmartSeries rechargeable electric toothbrush.",
  image: headerBgImage,
  mobileImage: headerBgMobileImage,
  url: productUrl,
  buttonText: "Buy Now",
  date: '11/18/2023'
}

export const titleProps = {
  title: 'The Best of the Oral B SmartSeries 5000.',
  message: 'Achieve 100% healthier gums with this advanced toothbrush, outperforming manual ones. Its 3D cleaning action breaks up more plaque along the gumline. Bluetooth provides real-time feedback, and the pressure sensor alerts against excessive force.'
}

export const tableOfContentUrl = '/best-irrigators/#'
export const tableOfContentItems = [
  {
    content: '\u2022 Comparative Table of the Best Oral Irrigators',
    id: `${tableOfContentUrl}comparative-table-of-the-best-oral-irrigators`
  },
  {
    content: '\u2022 Criteria Used in this Irrigator Comparison',
    id: `${tableOfContentUrl}criteria-used-in-this-irrigator-comparison`
  },
  {
    content: '\u2022 Waterpik Ultra 660EU – Best Quality-Price Ratio Irrigator',
    id: `${tableOfContentUrl}waterpik-ultra-660eu-best-quality-price-ratio-irrigator`
  },
  {
    content: '\u2022 Oral-B Smart 5 Dental Hygiene Station – Best Kit with Irrigator',
    id: `${tableOfContentUrl}oral-b-smart-5-dental-hygiene-station-best-kit-with-irrigator`
  },
  {
    content: '\u2022 Apiker FC169 Dental Irrigator, Best Capacity',
    id: `${tableOfContentUrl}apiker-fc169-dental-irrigator-best-capacity`
  },
  {
    content: '\u2022 Turewell FC165, Best Compact Size',
    id: `${tableOfContentUrl}turewell-fc165-best-compact-size`
  },
  {
    content: '\u2022 H2ofloss HF-6 – Best Power Portable Dental Irrigator',
    id: `${tableOfContentUrl}h2ofloss-hf-6-best-power-portable-dental-irrigator`
  },
  {
    content: '\u2022 Panasonic EW1511W503, Best Quality in Travel Irrigator',
    id: `${tableOfContentUrl}panasonic-ew1511w503-best-quality-in-travel-irrigator`
  },
  {
    content: '\u2022 MiTdir Wireless',
    id: `${tableOfContentUrl}mitdir-wireless`
  },
  {
    content: '\u2022 Enpuly MLG1, Best Price for Portable Irrigator',
    id: `${tableOfContentUrl}enpuly-mlg1-best-price-for-portable-irrigator`
  },
  {
    content: '\u2022 Factors to Consider to Find the Best Oral Irrigator',
    id: `${tableOfContentUrl}factors-to-consider-to-find-the-best-oral-irrigator`
  },
  {
    content: '\u2022 Frequently Asked Questions about Irrigators',
    id: `${tableOfContentUrl}frequently-asked-questions-about-irrigators`
  },
  {
    content: '\u2022 Related Articles',
    id: `${tableOfContentUrl}related-articles`
  }
]

export const oralB5000Props = {
  product: {
    title: 'Oral B Smart 5000 Rechargeable Electric Toothbrush',
    image: oralb5000,
    alt: 'Smart 5000 Rechargeable Electric Toothbrush',
    productUrl: productUrl,
    primeUrl: amazonPrime,
    description: 'The Oral-B Smart 5000 electric toothbrush is a complete and efficient product for daily dental care. Its combination of an electric toothbrush and oral irrigator provides a complete solution for tooth cleaning and care.',
    url: '/best/oral-b-pro-5000-smartseries-rechargeable',
  },
  list: [
    "Real-time feedback on brushing habits",
    "Size: 9.96 x 7.68 x 3.89 In",
    "Visible Pressure Sensor",
    "Bluetooth Connectivity",
    "Travel Case",
    "5 Clearning Modes",
    "Sensitive Gum Care",
  ],
}
export const titleListProps = {
  title: 'What do people who have purchased it say?',
  items: [
    {
      itemTitle: [
        'Quality:',
        'Functionality:',
        'Intensity:',
        'Accessories:',
        'Customer Service:',
        'Overall Satisfaction:'
      ],
      itemContent: [
        "Most users are satisfied with the product's quality, emphasizing its durability and effectiveness in oral hygiene.",
        "The combination of a modern electric toothbrush with an oral irrigator in the same station is appreciated by many users.",
        "Some users have mentioned that the brush can be too intense, while the irrigator may lack the desired intensity.",
        "The station comes with many accessories, making it convenient to use.",
        "There have been some comments about product issues and the need for customer service, but overall, the experience has been positive.",
        "Many users have expressed their satisfaction with the product, recommending it for its complete dental hygiene and price."
      ]
    }
  ]
}


//not using yet
export const comparativeProductsProps = {
  id: 'comparative-table-of-the-best-oral-irrigators',
  title: 'Comparative of the Best Oral Irrigators',
  message: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2023.',
  primeUrl: amazonPrime,
  items: [
    {
      id: 1,
      models: 'Waterpik Ultra 660 some more texts',
      image: HTML5Img,
      alt: 'Waterpik Ultra 660',
      prime: true,
      dimensions: '15 x 16,5 x 23 cm',
      replacementheads: '6',
      capacity: '650 ml',
      highlight: 'Economical, easy to use, and very comprehensive.',
      problem: 'The customer service of Waterpik.',
      price: 'Best buy',
      satisfaction: '5/5',
      view: 'View Price',
      url: '/buy-amazon-url'
    },
    {
      id: 2,
      models: 'Waterpik Ultra 660',
      image: HTML5Img,
      alt: 'Waterpik Ultra 660',
      prime: false,
      dimensions: '15 x 16,5 x 23 cm',
      replacementheads: '6',
      capacity: '650 ml',
      highlight: 'Economical, easy to use, and very comprehensive.',
      problem: 'The customer service of Waterpik.',
      price: 'Best buy',
      satisfaction: '5/5',
      view: 'View Price',
      url: '/buy-amazon-url2'

    },
    {
      id: 3,
      models: 'Waterpik Ultra 660',
      image: HTML5Img,
      alt: 'Waterpik Ultra 660',
      prime: true,
      dimensions: '15 x 16,5 x 23 cm',
      replacementheads: '6',
      capacity: '650 ml',
      highlight: 'Economical, easy to use, and very comprehensive.',
      problem: 'The customer service of Waterpik.',
      price: 'Best buy',
      satisfaction: '5/5',
      view: 'View Price',
      url: '/buy-amazon-url3'
    },
    {
      id: 4,
      models: 'Waterpik Ultra 660',
      image: HTML5Img,
      alt: 'Waterpik Ultra 660',
      prime: true,
      dimensions: '15 x 16,5 x 23 cm',
      replacementheads: '6',
      capacity: '650 ml',
      highlight: 'Economical, easy to use, and very comprehensive.',
      problem: 'The customer service of Waterpik.',
      price: 'Best buy',
      satisfaction: '5/5',
      view: 'View Price',
      url: '/buy-amazon-url'
    }
  ]
}


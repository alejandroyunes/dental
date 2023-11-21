import { nicwellf5025, nicwellf5025ProductUrl, turewell600ml, turewell600mlProductUrl } from "./turewell610ml"
import { waterpikwf02 } from "./waterpikwf02"

const headerBgImage = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700542160/Best/Coslus300ml/mwwygzs3lr0wvnz6hbgf.webp'
const headerBgMobileImage = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700541238/Best/Coslus300ml/nnbu7ewuqkl8cp4zkbh0.webp'

export const coslus300ml = 'https://res.cloudinary.com/dkv2cmxfs/image/upload/v1700541237/Best/Coslus300ml/bekj7waajyb9egnw08a8.webp'
export const productReview = 'https://www.amazon.com/product-reviews/B0BG52SJ5N/ref=acr_dp_hist_5?ie=UTF8&filterByStar=five_star&reviewerType=all_reviews#reviews-filter-bar'

export const coslus300mlProductUrl = 'https://a.co/d/hQhUiFO'
const amazonPrime = 'https://www.amazon.com'

export const headerProps = {
  title: "Coslus Water Dental Flosser Teeth Pick",
  subtitle: "Portable Cordless Oral Irrigator 300ML",
  text: "Deep clean every oral corner precisely! Keep healthier gums and brighter teeth.",
  image: headerBgImage,
  mobileImage: headerBgMobileImage,
  url: coslus300mlProductUrl,
  buttonText: "Buy Now",
  date: '11/21/2023',
  externalUrl: true
}

export const coslus300mlUrl = '/best/coslus-300ml-water-flossing-oral-irrigator'

export const tableOfContentItems = [
  {
    content: '\u2022 The Best of Waterpik wf02',
    id: `${coslus300mlUrl}#the-best-of-colus-300ml`
  },
  {
    content: '\u2022 Why Choose Waterpik wf02',
    id: `${coslus300mlUrl}#why-waterpic-wf02`
  },
  {
    content: '\u2022 Pros and Cons',
    id: `${coslus300mlUrl}#pro-and-cons-wf02`
  },
  {
    content: '\u2022 Comparison table with other irrigators',
    id: `${coslus300mlUrl}#how-does-the-waterpik-compares-to-other-irrigators`
  },
  {
    content: '\u2022 Why opt for the Waterpic wf02',
    id: `${coslus300mlUrl}#why-waterpik-5oz`
  },
]

export const titleProps = {
  id: 'the-best-of-waterpic-wf02',
  title: 'The Best of Waterpik ModelWF-02 Professional Water Flosser',
  message: "Waterpik's Cordless Express Water Flosser, featuring a battery-operated, portable, and waterproof design, is perfect for on-the-go oral care. With 2 pressure settings, a water on/off slider, 30 seconds of flossing time, and included AA batteries, it's easy to use anytime, anywhere, for healthier gums and brighter teeth."
}

export const coslus300mlProps = {
  product: {
    title: 'Waterpik Water Flosser',
    image: coslus300ml,
    alt: 'Waterpik Water Flosser ModelWF-02',
    productUrl: coslus300mlProductUrl,
    primeUrl: amazonPrime,
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
  title: 'Why Choose WaterPik WF-02?',
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
  title: "Pros and Cons",
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
      title: 'Relies on disposable batteries rather than a rechargeable system.',
    },
    {
      title: 'While customizable, the flosser provides only two pressure settings.',
    },
  ]
}

export const comparativeTableProps = {
  id: 'how-does-the-waterpik-compares-to-other-irrigators',
  title: 'Compare the Waterpik WF-02 Oral Irrigator with other irrigators',
  message: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2023.',
  primeUrl: amazonPrime,
  items: [
    {
      id: 1,
      models: 'Waterpik WF-02',
      image: waterpikwf02,
      alt: 'Waterpik Model WF-02',
      prime: true,
      dimensions: '11.75h x 2.5w x 3.6d, 11.68 oz',
      multifunctionaltips: '2',
      capacity: '5-ounce reservoir for 30 seconds of flossing time',
      highlight: 'Economical, Portable, Waterproof, Clinically Proven Plaque Removal, Customizable Cleaning.',
      problem: 'Battery replacement, Limited water capacity.',
      price: 'Best buy',
      satisfaction: '9/10',
      view: 'View Price',
      url: '/buy-amazon-url3'
    },
    {
      id: 2,
      models: 'Nicwell f5025',
      image: nicwellf5025,
      alt: 'Nicwell 200ml Oral Irrigator',
      prime: true,
      dimensions: '8.03h x 4.02w x 2.73d in, 14 oz',
      multifunctionaltips: '5',
      capacity: '200 ml',
      highlight: 'Cleaning Orthodontic Gums, Prevent Bad Breath',
      problem: 'Charging',
      price: 'Great Price',
      satisfaction: '9/10',
      view: 'View Price',
      url: nicwellf5025ProductUrl
    },
    {
      id: 3,
      models: 'TUREWELL 600ml',
      image: turewell600ml,
      alt: 'TUREWELL 600ml Oral Irrigator',
      prime: true,
      dimensions: '8.6h x 6.1w x 5.4d in, 1.7 lbs',
      multifunctionaltips: '8',
      capacity: '600 ml',
      highlight: '10 Adjustable Pressure',
      problem: 'Water Resistance',
      price: 'Good Price',
      satisfaction: '8/10',
      view: 'View Price',
      url: turewell600mlProductUrl
    },
    {
      id: 4,
      models: '',
      image: waterpikwf02,
      alt: '',
      prime: true,
      dimensions: '',
      multifunctionaltips: '',
      capacity: '',
      highlight: '',
      problem: '',
      price: '',
      satisfaction: '',
      view: 'View Price',
      url: '/buy-amazon-url'
    }
  ]
}

export const titleListNicwellProps = {
  id: 'why-waterpik-5oz',
  title: 'Why opt for the Waterpik Model WF-02?',
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
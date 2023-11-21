const HTML5Img = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/kkc4eb4flw5qgmjpmdro.webp'
const webDev = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698377831/blog/o8uhw4gqb4wdjj6nrnef.webp'
const NodeExpressServer = 'https://res.cloudinary.com/dcpdkock3/image/upload/v1698957906/blog/mcygclsb4g0jj5jrchuj.webp'

import { coslus300ml, coslus300mlProps, coslus300mlUrl } from '../../../categories/best-irrigators/article/data/coslus300ml'
import { nicwellF5025Url, nicwellf5025, nicwellf5025Props } from '../../../categories/best-irrigators/article/data/nicwellf5025'
import { turewell600mlProps, turewell600ml, turewell600mlUrl } from '../../../categories/best-irrigators/article/data/turewell610ml'
import { waterpikwf02, waterpikwf02Props, waterpikwf02Url } from '../../../categories/best-irrigators/article/data/waterpikwf02'

export const firstThreeColumnCard = {
  title: "Relying solely on brushing is not enough",
  subTitle: "The Dental Irrigator removes plaque that lodges deep in the interdental spaces and below the gums. Using a toothbrush or dental floss alone is not sufficient to achieve the best oral hygiene. That's why if you thinking in buying an oral irrigator we recommend that you view these Oral Irrigators.",
  moreInfo: "Click on the following images to read thereviews of the top-rated Oral Dental Irrigators",
  columnsUrl: '',
  items: [
    {
      id: 6,
      image: turewell600ml,
      alt: turewell600mlProps.product.alt,
      title: turewell600mlProps.product.title,
      url: turewell600mlUrl,
    },
    {
      id: 5,
      image: nicwellf5025,
      alt: nicwellf5025Props.product.alt,
      title: nicwellf5025Props.product.title,
      url: nicwellF5025Url,
    },
    {
      id: 4,
      image: waterpikwf02,
      alt: waterpikwf02Props.product.alt,
      title: waterpikwf02Props.product.title,
      url: waterpikwf02Url,
    },
    {
      id: 3,
      image: coslus300ml,
      alt: coslus300mlProps.product.alt,
      title: coslus300mlProps.product.title,
      url: coslus300mlUrl,
    },
    {
      id: 2,
      image: NodeExpressServer,
      alt: 'lorem ipsum, dolor sit amet consectetur.',
      title: 'lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      url: 'https://res.cloudinary.com/d',
    },
    {
      id: 1,
      image: webDev,
      alt: 'lorem ipsum, dolor sit amet consectetur.',
      title: 'lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
      url: 'https://res.cloudinary.com/d',
    }
  ]
}

import MobileDesignIcon from './svgs/main-cards/mobile-design-icon.svg'
import ResponsiveDesignIcon from "./svgs/main-cards/responsive-design-icon.svg"
import RocketAnimation from "./svgs/main-cards/rocket.svg"

import AnimationBillboard from './images/app/irrigador-dental-max.webp'
import MobileImage from './images/app/irrigador-dental-max-mobile.webp'

export interface BillboardProps {
  title: string
  subtitle: string
  button: string
  image: string
  mobileImage: string
  alt: string
}

export interface MainCardProps {
  image: string
  alt: string
  title: string
  subtitle: string
  message: string
  viewMore: boolean
}

export interface BillboardTwoTypes {
  label: string
  title: string
  subtitle: string
  listOne: string
  listTwo: string
  listThree: string
  listFour: string
  labelFooter: string
  image: string
  alt: string
}

export interface mainDesignTypes {
  altImageOne: string
  altImageTwo: string
  altImageThree: string
  altImageFour: string
  altImageFive: string
}

export const english = {
  billboard: {
    title: "Enhance your oral health.",
    subtitle: "We have performed an exhaustive analysis of reviews, user comments, forum discussions, brand reputation sentiments, and other pertinent data to empower you in making an informed decision when selecting your Dental Irrigator.",
    button: "View the Best Irrigators",
    image: AnimationBillboard,
    mobileImage: MobileImage,
  },
  titleOne: {
    title: "Technologies",
    message: "Mobile Era"
  },
  mainCards: [
    {
      image: ResponsiveDesignIcon,
      alt: "Icon of a monitor or PC",
      title: 'Simple yet Effective',
      subtitle: 'High-Performance Apps',
      message: 'Leave a lasting impression on your customers with a fast, modern, customized application featuring cutting-edge graphic design.',
      viewMore: false,
    },
    {
      image: MobileDesignIcon,
      title: 'Mobile Adaptability',
      alt: "Icon of a mobile device",
      subtitle: 'Fully Responsive Designs',
      message: 'In today\'s world, there are more than 5 billion unique users of mobile devices, which accounts for 67% of the global population.',
      viewMore: false,
    },
    {
      image: RocketAnimation,
      alt: "Icon of a Rocket",
      title: 'Digital Strategy',
      subtitle: 'Boosting in the Digital World',
      message: 'Digital strategies to promote brands, engage with the audience, and achieve business goals effectively.',
      viewMore: false,
    }
  ],
  billboardTwo: {
    label: "ONLINE SOLUTIONS",
    title: "Need a Website?",
    subtitle: "Top reasons to hire web professionals.",
    listOne: "Specialization in web development",
    listTwo: "Measurable results and traffic metrics",
    listThree: "Creativity, digital marketing, SEO, and more",
    listFour: "Support and scalability",
    labelFooter: "We can assist you in getting a domain that fits your business, hosting, and high-quality professional web design.",
    image: "https://res.cloudinary.com/dcpdkock3/image/upload/v1696905664/billboard/jaeiptpllby7kmizfnym.webp",
    alt: "Image with website statistics"
  },
  titleTwo: {
    title: "Designed for All Devices",
    message: "Creative Designs"
  },
  mainDesign: {
    altImageOne: "Icon of a computer with an avatar sitting on the keyboard",
    altImageTwo: "Icon of a horizontal mobile phone with images coming out of it of social media",
    altImageThree: "Icon of a computer with a security avatar",
    altImageFour: "Icon of a computer with an avatar pointing at statistics on a tablet",
    altImageFive: "Icon of a computer with a user avatar and authentication"
  },
  meta: "Leading digital agency with expertise in mobile product and web application design and development"
}
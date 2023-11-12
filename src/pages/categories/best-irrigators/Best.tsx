import Header from "../../../components/Article/article-header/Header";
import ComparativeProducts from "../../../components/CompartiveProducts/ComparativeProducts";
import TableOfContent from "../../../components/TableOfContent/TableOfContent";
import Title from "../../../components/Title/Title";
import TwoRowGrid from "../../../components/TwoRowGrid/TwoRowGrid";

const dataProps = {
  title: "Comparison of the Best Irrigators in 2023",
  subtitle: "Best Dental Irrigator",
  text: "According to our analysis, the best quality - price dental irrigator is the Waterpik Ultra WP - 660.",
  image: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1699702078/billboard/zcxvfauicbu1q56xtjkl.webp",
  mobileImage: "https://res.cloudinary.com/dkv2cmxfs/image/upload/v1699702078/billboard/zcxvfauicbu1q56xtjkl.webp",
  url: 'https://a.co/d/89W1sAL',
  buttonText: "View More",
  date: '11/12/2023'
}

const tableOfContentUrl = '/best-irrigators/#'

const dataItems = [
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

export const titleProps = 'Dental irrigators are efficient for removing plaque and food particles from between the teeth. Additionally, they contribute to reducing the risk of gum diseases and combating bad breath. But, which irrigator to buy? What would be the best irrigator? Below, we present the most comprehensive and detailed analysis of the best irrigators to assist you in your purchase.'

export const comparativeProductsProps = {
  title: 'Comparative of the Best Oral Irrigators',
  message: 'In this table, you can see all the analyzed models, their features, notable advantages, user ratings, and the results of our analyses in 2023.'
}

export default function () {
  return (
    <>
      <Header {...dataProps} />
      <TableOfContent items={dataItems} />
      <Title message={titleProps} />
      <ComparativeProducts />
    </>
  )
}
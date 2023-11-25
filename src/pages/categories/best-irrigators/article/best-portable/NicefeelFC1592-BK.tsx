import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "../../../../../components/Article/article-header/Header"
import AmazonButton from "../../../../../components/Button/AmazonButton/AmazonButton"
import SimpleButton from "../../../../../components/Button/SimpleButton/SimpleButton"
import ComparativeTable from "../../../../../components/CompartiveProducts/ComparativeTable"
import ProAndCon from "../../../../../components/ProAndCon/ProAndCon"
import Product from "../../../../../components/Product/Product"
import TableOfContent from "../../../../../components/TableOfContent/TableOfContent"
import Title from "../../../../../components/Title/Title"
import TitleList from "../../../../../components/TitleList/TitleList"
import { nicefeelFC1592bkGlobalData } from "../global-data/best-portable/best-portable"

import {
  tableOfContentItems,
  headerProps,
  titleProps,
  comparativeTableProps,
  titleListProps,
  nicefeelFC1592bkProps,
  proAndCons,
  titleListNicwellProps,
} from "./data/nicefeelFC1592-bk"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content="Nicefeel Cordless Water Flosser - A portable and rechargeable oral irrigator with a 300ml detachable water tank. Efficiently improves gum health and teeth cleaning with 3 cleaning modes. Ideal for travel, featuring IPX7 waterproof design. Great for those with periodontitis and braces. Includes 4 jet tips for family use."
          />
          <title>Nicefeel Cordless Water Flosser | Portable and Rechargeable Oral Irrigator</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />

      <Title message={titleProps.message} titleH2={titleProps.title} id={titleProps.id} />

      <Product {...nicefeelFC1592bkProps.product} list={nicefeelFC1592bkProps.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} message={proAndCons.message} />
      <ProAndCon {...proAndCons} />

      <SimpleButton blank text="View all Reviews" url={nicefeelFC1592bkGlobalData.productReview} />



      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListNicwellProps} id={titleListNicwellProps.id} />

      <AmazonButton text="Buy in Amazon" url={nicefeelFC1592bkGlobalData.nicefeelFC1592bkProductUrl} blank />
    </main>
  )
}
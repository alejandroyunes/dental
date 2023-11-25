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
import { insmartFC256GlobalData } from "../global-data/best-portable/best-portable"

import {
  tableOfContentItems,
  headerProps,
  titleProps,
  comparativeTableProps,
  titleListProps,
  insmartFC256Props,
  proAndCons,
  titleListNicwellProps,
} from "./data/insmartfc256"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content="Upgrade your oral care routine with the InSmart Professional Cordless Water Dental Flosser. Featuring a 300ML detachable tank, 1800 times/minute water pulse, and 4 cleaning modes, this rechargeable flosser ensures efficient plaque removal and gum health. Perfect for home and travel."
          />
          <title>InSmart Professional Cordless Water Dental Flosser - Efficient Oral Care</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />

      <Title message={titleProps.message} titleH2={titleProps.title} id={titleProps.id} />

      <Product {...insmartFC256Props.product} list={insmartFC256Props.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} message={proAndCons.message} />
      <ProAndCon {...proAndCons} />

      <SimpleButton blank text="View all Reviews" url={insmartFC256GlobalData.productReview} />



      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListNicwellProps} id={titleListNicwellProps.id} />

      <AmazonButton text="Buy in Amazon" url={insmartFC256GlobalData.insmartFC256ProductUrl} blank />
    </main>
  )
}
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
import { nicwellF5025GlobalData } from "../global-data/best-portable/best-portable"

import {
  tableOfContentItems,
  headerProps,
  titleProps,
  comparativeTableProps,
  titleListProps,
  nicwellf5025Props,
  proAndCons,
  titleListNicwellProps,
} from "./data/nicwellf5025"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content="Discover the revolutionary Nicwell water dental flosser with advanced pulsation technology, offering high-pressure water pulses for deep cleaning, gum massage, and improved oral health. Portable, rechargeable, and backed by professional customer service. Transform your oral care routine today." />
          <title>Discover the revolutionary Nicwell water dental flosser with advanced pulsation technology.</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />

      <Title message={titleProps.message} titleH2={titleProps.title} id={titleProps.id} />

      <Product {...nicwellf5025Props.product} list={nicwellf5025Props.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} message={proAndCons.message} />
      <ProAndCon {...proAndCons} />

      <SimpleButton blank text="View all Reviews" url={nicwellF5025GlobalData.productReview} />



      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListNicwellProps} id={titleListNicwellProps.id} />

      <AmazonButton text="Buy in Amazon" url={nicwellF5025GlobalData.nicwellf5025ProductUrl} blank />
    </main>
  )
}
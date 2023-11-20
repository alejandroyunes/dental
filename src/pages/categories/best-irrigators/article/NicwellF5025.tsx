import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "../../../../components/Article/article-header/Header"
import AmazonButton from "../../../../components/Button/AmazonButton/AmazonButton"
import SimpleButton from "../../../../components/Button/SimpleButton/SimpleButton"
import ComparativeTable from "../../../../components/CompartiveProducts/ComparativeTable"
import ProAndCon from "../../../../components/ProAndCon/ProAndCon"
import Product from "../../../../components/Product/Product"
import TableOfContent from "../../../../components/TableOfContent/TableOfContent"
import Title from "../../../../components/Title/Title"
import TitleList from "../../../../components/TitleList/TitleList"

import {
  tableOfContentItems,
  headerProps,
  titleProps,
  comparativeTableProps,
  titleListProps,
  nicwellf5025Props,
  proAndCons,
  productReview,
  titleListTurewellProps,
  productUrl
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

      <Title message={titleProps.message} title={titleProps.title} id={titleProps.id} />

      <Product {...nicwellf5025Props.product} list={nicwellf5025Props.list} />


      <TitleList {...titleListProps} id={titleListProps.id} />


      <SimpleButton blank text="View all Reviews" url={productReview} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} />
      <ProAndCon {...proAndCons} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListTurewellProps} id={titleListTurewellProps.id} />

      <AmazonButton text="Buy in Amazon" url={productUrl} />
    </main>
  )
}
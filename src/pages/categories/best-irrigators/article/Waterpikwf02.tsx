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
  waterpikwf02Props,
  proAndCons,
  productReview,
  titleListNicwellProps,
  waterpikwf02ProductUrl
} from "./data/waterpikwf02"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content="Waterpik's Cordless Express Water Flosser—battery-operated, portable, and waterproof." />
          <title>Waterpik's WF02 Cordless Express Water Flosser—battery-operated, portable, and waterproof.</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />

      <Title message={titleProps.message} title={titleProps.title} id={titleProps.id} />

      <Product {...waterpikwf02Props.product} list={waterpikwf02Props.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} message={proAndCons.message} />
      <ProAndCon {...proAndCons} />

      <SimpleButton blank text="View all Reviews" url={productReview} />



      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListNicwellProps} id={titleListNicwellProps.id} />

      <AmazonButton text="Buy in Amazon" url={waterpikwf02ProductUrl} blank />
    </main>
  )
}
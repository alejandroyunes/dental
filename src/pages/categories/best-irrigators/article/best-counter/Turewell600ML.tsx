import { HelmetProvider, Helmet } from "react-helmet-async"
import Header from "../../../../../components/Article/article-header/Header"
import AmazonButton from "../../../../../components/Button/AmazonButton/AmazonButton"
import SimpleButton from "../../../../../components/Button/SimpleButton/SimpleButton"
import ComparativeTable from "../../../../../components/CompartiveProducts/ComparativeTable"
import ProAndCon from "../../../../../components/ProAndCon/ProAndCon"
import Product from "../../../../../components/Product/Product"
import TableOfContent from "../../../../../components/TableOfContent/TableOfContent"
import Title from "../../../../../components/Title/Title"
import TitleList from "../../../../../components/TitleList/TitleList"
import { turewell600mlGlobalData } from "../global-data/best-countertop/best-countertop"

import {
  tableOfContentItems,
  headerProps,
  titleProps,
  comparativeTableProps,
  titleListProps,
  turewell600mlProps,
  proAndCons,
  titleListTurewellProps,
} from "./data/turewell610ml"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content='Turewell introduced an exceptionally budget-friendly model' />
          <title>Turewell introduced an exceptionally budget-friendly model</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps.message} titleH2={titleProps.title} id={titleProps.id} />

      <Product {...turewell600mlProps.product} list={turewell600mlProps.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} />
      <ProAndCon {...proAndCons} />
      <SimpleButton blank text="View all Reviews" url={turewell600mlGlobalData.productReview} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListTurewellProps} id={titleListTurewellProps.id} />

      <AmazonButton text="Buy in Amazon" url={turewell600mlGlobalData.turewell600mlProductUrl} blank />
    </main>
  )
}
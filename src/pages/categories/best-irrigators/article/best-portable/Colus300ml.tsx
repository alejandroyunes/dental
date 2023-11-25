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
import { coslus300mlGlobalData } from "../global-data/best-portable/best-portable"

import {
  tableOfContentItems,
  headerProps,
  titleProps,
  comparativeTableProps,
  titleListProps,
  coslus300mlProps,
  proAndCons,
  titleListNicwellProps,
} from "./data/coslus300ml"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content="Discover the superior dental care experience with the Coslus F5020E water dental flosser." />
          <title>Coslus F5020E Water Dental Flosser: Advanced Technology for Optimal Oral Health</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />

      <Title message={titleProps.message} titleH2={titleProps.title} id={titleProps.id} />

      <Product {...coslus300mlProps.product} list={coslus300mlProps.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} message={proAndCons.message} />
      <ProAndCon {...proAndCons} />

      <SimpleButton blank text="View all Reviews" url={coslus300mlGlobalData.productReview} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListNicwellProps} id={titleListNicwellProps.id} />

      <AmazonButton text="Buy in Amazon" url={coslus300mlGlobalData.coslus300mlProductUrl} blank />
    </main>
  )
}
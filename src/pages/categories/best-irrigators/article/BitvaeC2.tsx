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
  bitvaec2Props,
  proAndCons,
  productReview,
  titleListNicwellProps,
  bitvaec2ProductUrl
} from "./data/bitvaeC2"

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

      <Product {...bitvaec2Props.product} list={bitvaec2Props.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} message={proAndCons.message} />
      <ProAndCon {...proAndCons} />

      <SimpleButton blank text="View all Reviews" url={productReview} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListNicwellProps} id={titleListNicwellProps.id} />

      <AmazonButton text="Buy in Amazon" url={bitvaec2ProductUrl} blank />
    </main>
  )
}
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
  turewell600mlProps,
  proAndCons,
  productReview,
  titleListTurewellProps,
  productUrl
} from "./data/turewell610ml"

export default function () {
  return (
    <main>
      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps.message} title={titleProps.title} id={titleProps.id} />

      <Product {...turewell600mlProps.product} list={turewell600mlProps.list} />

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
import Header from "../../../../components/Article/article-header/Header"
import Product from "../../../../components/Product/Product"
// import ComparativeProducts from "../../../../components/CompartiveProducts/ComparativeTable"
// import Product from "../../../../components/Product/Product"
import TableOfContent from "../../../../components/TableOfContent/TableOfContent"
import Title from "../../../../components/Title/Title"
import { oralB5000Props } from "./data/oral-b-smart"
// import TitleList from "../../../../components/TitleList/TitleList"
import {
  tableOfContentItems,
  headerProps,
  titleProps,
  // comparativeProductsProps,
  // titleListProps,
  // firstProduct
} from "./data/oral-b-smart"

export default function () {
  return (
    <main>
      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps.message} title={titleProps.title} />

      <Product {...oralB5000Props.product} list={oralB5000Props.list} />

      {/* <ComparativeProducts {...comparativeProductsProps} /> */}
      {/* <TitleList {...titleListProps} /> */}
    </main>
  )
}
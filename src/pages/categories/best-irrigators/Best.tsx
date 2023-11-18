import Header from "../../../components/Article/article-header/Header"
import ComparativeProducts from "../../../components/CompartiveProducts/ComparativeProducts"
import Product from "../../../components/Product/Product"
import TableOfContent from "../../../components/TableOfContent/TableOfContent"
import Title from "../../../components/Title/Title"
import TitleList from "../../../components/TitleList/TitleList"
import { tableOfContentItems, headerProps, titleProps, comparativeProductsProps, titleListProps, firstProduct } from "./data/best-irrigator"




export default function () {
  return (
    <main>
      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps} />

      <ComparativeProducts {...comparativeProductsProps} />
      <TitleList {...titleListProps} />
      <Product {...firstProduct} />
    </main>
  )
}
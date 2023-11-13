import Header from "../../../components/Article/article-header/Header"
import ComparativeProducts from "../../../components/CompartiveProducts/ComparativeProducts"
import TableOfContent from "../../../components/TableOfContent/TableOfContent"
import Title from "../../../components/Title/Title"
import { tableOfContentItems, headerProps, titleProps, comparativeProductsProps } from "./data/best-irrigator"

export default function () {
  return (
    <>
      {/* <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps} /> */}
      <ComparativeProducts {...comparativeProductsProps} />
    </>
  )
}
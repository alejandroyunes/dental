import Header from "../../../components/Article/article-header/Header"
import ComparativeProducts from "../../../components/CompartiveProducts/ComparativeProducts"
import ProAndConComponent from "../../../components/ProAndCon/ProAndConComponent"
import TableOfContent from "../../../components/TableOfContent/TableOfContent"
import Title from "../../../components/Title/Title"
import TitleList from "../../../components/TitleList/TitleList"
import { tableOfContentItems, headerProps, titleProps, comparativeProductsProps, titleListProps, proAndCons } from "./data/best-irrigator"


export default function () {
  return (
    <>
      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps} />
      <ComparativeProducts {...comparativeProductsProps} />
      <TitleList {...titleListProps} />
      <ProAndConComponent {...proAndCons} />
    </>
  )
}
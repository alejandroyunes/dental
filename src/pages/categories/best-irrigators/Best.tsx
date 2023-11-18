import Header from "../../../components/Article/article-header/Header"
import SimpleButton from "../../../components/Button/SimpleButton/SimpleButton"
import ComparativeTable from "../../../components/CompartiveProducts/ComparativeTable"
import ProAndConComponent from "../../../components/ProAndCon/ProAndCon"
import Product from "../../../components/Product/Product"
import TableOfContent from "../../../components/TableOfContent/TableOfContent"
import Title from "../../../components/Title/Title"
import TitleList from "../../../components/TitleList/TitleList"
import { Container } from "./best-irrigators.styled"
import { tableOfContentItems, headerProps, titleProps, comparativeTableProps, titleListProps, firstProduct } from "./data/best"


export default function () {
  return (
    <Container>
      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />

      <Title message={titleProps} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListProps} />

      {/* First Product */}
      <Title titleH2={firstProduct.proAndCons.title} message={firstProduct.proAndCons.subtitle} />

      <ProAndConComponent {...firstProduct.proAndCons} />

      <Product {...firstProduct.product} list={...firstProduct.list} />
      <Title {...firstProduct.productDetails} />

      <div className="product-button">
        <SimpleButton text="some text" url="/lest" />
      </div>

    </Container>
  )
}
import { Helmet, HelmetProvider } from "react-helmet-async"
import Header from "../../../components/Article/article-header/Header"
import ComparativeTable from "../../../components/CompartiveProducts/ComparativeTable"
import ProAndCon from "../../../components/ProAndCon/ProAndCon"
import Product from "../../../components/Product/Product"
import TableOfContent from "../../../components/TableOfContent/TableOfContent"
import Title from "../../../components/Title/Title"
import TitleList from "../../../components/TitleList/TitleList"
import { tableOfContentItems, headerProps, titleProps, comparativeTableProps, titleListProps, firstProduct } from "./data/best"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content='Comparison of the Best Irrigators in 2023 | Dental Irrigator' />
          <title>Comparison of the Best Irrigators in 2023 | Dental Irrigator</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />

      <Title message={titleProps} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />
      <TitleList {...titleListProps} />

      {/* First Product */}
      <Title titleH2={firstProduct.proAndCons.title} message={firstProduct.proAndCons.subtitle} />
      <ProAndCon {...firstProduct.proAndCons} />
      <Product {...firstProduct.product} list={firstProduct.list} />
      <Title {...firstProduct.productDetails} />

    </main>
  )
}
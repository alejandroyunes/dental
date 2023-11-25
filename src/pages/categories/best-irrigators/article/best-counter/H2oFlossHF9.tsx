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

import {
  tableOfContentItems,
  headerProps,
  titleProps,
  comparativeTableProps,
  titleListProps,
  h2oflossHF9Props,
  proAndCons,
  titleListh2oflossHF9Props,
} from "./data/h2ofloss-HF9"
import { h2oflossHF9GlobalData } from "../global-data/best-countertop/best-countertop"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content='This professional countertop oral irrigator, featuring 12 multifunctional tips, offers efficient teeth cleaning. With an 800ml capacity and a quiet design (HF-9), it is one of the most budget-friendly models on the market and a top-seller on major online platforms.' />
          <title>H2ofloss Dental Water Flosser for Teeth Cleaning Professional Countertop Oral Irrigator HF-9</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps.message} titleH2={titleProps.title} id={titleProps.id} />

      <Product {...h2oflossHF9Props.product} list={h2oflossHF9Props.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} message={proAndCons.message} />
      <ProAndCon {...proAndCons} />
      <SimpleButton blank text="View all Reviews" url={h2oflossHF9GlobalData.productReview} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListh2oflossHF9Props} id={titleListh2oflossHF9Props.id} />

      <AmazonButton text="Buy in Amazon" url={h2oflossHF9GlobalData.h2oflossHF9ProductUrl} blank />
    </main>
  )
}
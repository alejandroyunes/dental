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
import { bitvaec2GlobalData } from "../global-data/best-portable/best-portable"


import {
  tableOfContentItems,
  headerProps,
  titleProps,
  comparativeTableProps,
  titleListProps,
  bitvaec2Props,
  proAndCons,
  titleListNicwellProps,
} from "./data/bitvaeC2"

export default function () {
  return (
    <main>
      <HelmetProvider>
        <Helmet>
          <meta
            name='description'
            content="Discover the features and benefits of the Bitvae C2 Water Dental Flosser. Enjoy effective oral care with its compact design, ease of use, and versatile performance. Read customer feedback on affordability, quality, and more." />
          <title>Bitvae C2 Water Dental Flosser - Superior Oral Care</title>
        </Helmet>
      </HelmetProvider>

      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />

      <Title message={titleProps.message} titleH2={titleProps.title} id={titleProps.id} />

      <Product {...bitvaec2Props.product} list={bitvaec2Props.list} />

      <TitleList {...titleListProps} id={titleListProps.id} />

      <Title titleH2={proAndCons.title} id={proAndCons.id} message={proAndCons.message} />
      <ProAndCon {...proAndCons} />

      <SimpleButton blank text="View all Reviews" url={bitvaec2GlobalData.productReview} />

      <Title id={comparativeTableProps.id} titleH2={comparativeTableProps.title} message={comparativeTableProps.message} />
      <ComparativeTable items={comparativeTableProps.items} primeUrl={comparativeTableProps.primeUrl} />

      <TitleList {...titleListNicwellProps} id={titleListNicwellProps.id} />

      <AmazonButton text="Buy in Amazon" url={bitvaec2GlobalData.bitvaec2ProductUrl} blank />
    </main>
  )
}
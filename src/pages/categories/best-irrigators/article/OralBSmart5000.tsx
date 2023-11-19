import Header from "../../../../components/Article/article-header/Header"
import SimpleButton from "../../../../components/Button/SimpleButton/SimpleButton"
import Product from "../../../../components/Product/Product"
import TableOfContent from "../../../../components/TableOfContent/TableOfContent"
import Title from "../../../../components/Title/Title"
import TitleList from "../../../../components/TitleList/TitleList"
import { oralB5000Props } from "./data/oral-b-smart"
// import ComparativeProducts from "../../../../components/CompartiveProducts/ComparativeTable"

import {
  tableOfContentItems,
  headerProps,
  titleProps,
  // comparativeProductsProps,
  titleListProps,
  // firstProduct
} from "./data/oral-b-smart"

export default function () {
  return (
    <main>
      <Header {...headerProps} />
      <TableOfContent items={tableOfContentItems} />
      <Title message={titleProps.message} title={titleProps.title} />

      <Product {...oralB5000Props.product} list={oralB5000Props.list} />
      <TitleList {...titleListProps} />


      <SimpleButton blank text="View all Reviews" url="https://www.amazon.com/product-reviews/B00O8ODHOA/ref=acr_dp_hist_5?ie=UTF8&filterByStar=five_star&reviewerType=all_reviews#reviews-filter-bar" />

      {/* <ComparativeProducts {...comparativeProductsProps} /> */}

    </main>
  )
}
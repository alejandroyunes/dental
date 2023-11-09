import Billboard from "../../components/Billboard/Billboard"
import ThreeRowTable from "../../components/ThreeRowTable/ThreeRowTable";

import { billboard } from "./data/billboard"
import { rowsTable } from "./data/threeRowsTable"
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function HomePage() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={billboard.meta} />
        </Helmet>
      </HelmetProvider>
      <Billboard {...billboard.billboard} />
      <ThreeRowTable {...rowsTable} />
    </>
  )
}

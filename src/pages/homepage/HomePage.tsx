import Billboard from "../../components/Billboard/Billboard"
import ProAndCon from "../../components/ProAndCon/ProAndCon";
import ThreeRowTable from "../../components/ThreeRowTable/ThreeRowTable";

import { billboard } from "./data/billboard/billboard"
import { firstThreeRowsTable } from "./data/firstThreeRowTable/firstThreeRowsTable"
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { proAndCons } from "./data/proAndCons/proAndCons";

export default function HomePage() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={billboard.meta} />
        </Helmet>
      </HelmetProvider>
      <Billboard {...billboard.billboard} />
      <ThreeRowTable {...firstThreeRowsTable} />
      <ProAndCon {...proAndCons} />
    </>
  )
}

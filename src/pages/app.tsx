import MainDesign from "../components/MainDesignSection/MainDesign"
import MainCards from "../components/MainCards/MainCards"
import Billboard from "../components/Billboard/Billboard"
import Title from "../components/Title/Title"
import BillboardTwo from "../components/BillboardTwo/BillboardTwo"
import { english } from "./translate/app"
import { Helmet, HelmetProvider } from 'react-helmet-async';

export default function App() {

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <meta name="description" content={english.meta} />
        </Helmet>
      </HelmetProvider>
      <Billboard {...english?.billboard} />
      <Title title={english.titleOne.title} message={english.titleOne.message} />
      <MainCards mainCards={english.mainCards} />
      <BillboardTwo {...english.billboardTwo} />
      <Title title={english.titleTwo.title} message={english.titleTwo.message} />
      <MainDesign {...english.mainDesign} />
    </>
  );
}
